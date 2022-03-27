---
title: Increase Performance of Your Deno Application with Rust
date: "2022-03-27"
tags: [deno, rust]
---

# Increase Performance of Your Deno Application with Rust

You have probably heard about the new fuzz in the JavaScript (and TypeScript) ecosystem over the past year and a half. Deno has arisen as a runtime for JavaScript with built-in Typescript support, and not only does it follow the web standards to make code between browsers and servers compatible, but it also includes a powerful set of built-in tools like linter, formatter, bundler, and compiler. If you want to learn more, check out [this post](/posts/deno-introduction) where I introduce Deno.

When writing your code, you might sometimes work with heavy computational methods which JS was never meant to tackle. There are a couple of ways to deal with this:

1. Write your codebase in a different language that is built to handle CPU-intensive tasks.
2. Use APIs which handle the CPU-intensive task.
3. Write the CPU-intensive function in any language able to compile into [WASM](https://deno.land/manual/webassembly) and import this into Deno.
4. Write your code in any language that compiles to C and use Deno's built-in [FFI (Foreign Function Interface)](https://deno.land/manual/runtime/ffi_api) to call the method

Say that the requirements for the application or script are that it is built using JS and that we do not want to rely on APIs as we want to keep the code contained or offline. We are then left with options 3 and 4. In this post, I show off the WASM way, and in the next one, we will look at how to do it with FFI. The language we will use is Rust, as it is a rather large hype-train amongst developers nowadays. But enough for the introduction, let's get to it!

> ⚠️ For this tutorial, I will assume that you have [Deno](https://deno.land/#installation) and [Rust](https://www.rust-lang.org/learn/get-started) installed on your machine, if not, follow the respective guides to set it up.

## Set up the code folder

Start by creating a blank folder to house your Deno project.

```shell
mkdir deno_rust && cd deno_rust
```

In your blank folder, we want to create two files to start with. One `Makefile` to house commonly used calls, and one `main.ts` file to serve as the entry point for our Deno script.

```shell
touch Makefile main.ts
```

## Fibonacci in JavaScript (TypeScript)

Now it's time to add some code into our `main.ts` file. As the computation of the Fibonacci sequence is known for being quite heavy for the computer, we will implement this to compare performance easily.

> If you don't fully remember what the Fibonacci sequence is, take a look [here](https://en.wikipedia.org/wiki/Fibonacci_number).

```ts
function fibonacci(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}
```

Looks pretty simple, doesn't it? Let's run and time it to see the performance, so add the following to the bottom of your file.

```ts
const FIBONACCI_NUMBER = 42;

function timeJs() {
  console.time("js");
  console.log(fibonacci(FIBONACCI_NUMBER));
  console.timeEnd("js");
}

timeJs();
```

> As you can see, I set the `FIBONACCI_NUMBER` to be `42` as it is the sweet spot for my computer, but if it takes longer than 2 seconds for you to get any output, feel free to adjust the number. For this example, it should ideally take no longer than 5 seconds to complete.

Now, let's add the run function to our `Makefile`, and run it with `make run`

```makefile
run:
    deno run main.ts
```

Your output should now be something like this.

```shell
> deno run --allow-read main.ts
267914296
js: 2436ms
```

Now you are probably thinking _"I want to be able to compute an arbitrary large Fibonacci sequence, and ~2 seconds is far too long for 42..."_. Why the average project requirements demand you to think these horrendous thoughts is beyond me, but I can at least help you somewhat in the right direction.

## Fibonacci compiled to WASM

I will now introduce you to compiling Rust to WASM, and how to include it in your JS code. To get started we need to create a new cargo project within our code folder. I will do it simply by calling it `rs_helpers_wasm`.

```shell
cargo new --lib --vcs none rs_helpers_wasm
```

> - `cargo new` creates a new rust project.
> - `--lib` makes sure to generate a library base.
> - `--vcs none` removes the initial git setup.

Your folder structure should now look like this.

```text
deno_rust
├── Makefile
├── README.md
├── main.ts
└── rs_helpers_wasm
    ├── .gitignore
    ├── Cargo.toml
    └── src
        └── lib.rs
```

> If you are not familiar with Rust, I would recommend you to follow the [official guide](https://www.rust-lang.org/learn) as it will take you through everything you need.

Before we add any code to our rust project, we need to install the Rust to WASM library,

```shell
cargo install wasm-pack
```

and also adjust the `Cargo.toml` file.

```toml
[package]
name = "rs_helpers_wasm"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

As soon as this is done, we can move on to creating the Fibonacci function inside of Rust as well. In the `lib.rs` file, add the following.

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn fibonacci(x: isize) -> isize {
    if x == 0 {
        return 0;
    }

    if x == 1 {
        return 1;
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}
```

Pretty straightforward, no? I would say that besides the small changes in syntax, and stricter types, it is more or less the same as our JS function. Let's walk through the code.

The first thing that is happening is that we import `wasm_bindgen::prelude::*` to make WASM bindings available for use in our code. If you know a bit of Rust already, you can notice that there is a macro above our `fibonnaci`, namely `#[wasm_bindgen]`. This tells our WASM compiler that this function should be exported and made available for our JS code to import.

> Rust macros are similar (but the same) to TS decorators

Now, let's compile the code. Change the `Makefile` to the following, and run it with `make build_wasm`

```makefile
run: build_rs
    deno run --allow-read main.ts
build_wasm:
    cd rs_helpers_wasm && wasm-pack build --target web
```

After `wasm-pack` is done compiling our code, we can take a look at what is different.

First off, our `run` script in the `Makefile` now looks like this `run: build_wasm`. This means that before the run script is executed, `make` will run `build_wasm`. You will see the use of this later.

We also now have a couple of new folders in `rs_helpers_wasm`, namely `target` and `pkg`. In our case, we only care about `pkg`, so open it up and check out its contents.

```text
rs_helpers/pkg
├── package.json
├── rs_helpers_wasm.d.ts
├── rs_helpers_wasm.js
├── rs_helpers_wasm_bg.wasm
└── rs_helpers_wasm_bg.wasm.d.ts
```

The first thing to notice is that it looks pretty much like a standard npm project.

- The `.js` file exists as an entry point for our code calls, and for the initiation of `WebAssembly`.
- The `.d.ts` file is for the types we can use when trying to figure out how to use the exported functions.
- The `.wasm` file is the actual code that we implemented in Rust. If you open it up, it is just a bunch of gibberish as it is in binary format.
- Lastly, we have the `.wasm.d.ts` file which contains the types for the exported function from the WASM file.

> You can in practice publish this module to NPM, but I would recommend setting the build target to `bundler` instead of `web` for this use-case and also following a more specific `NodeJS` tutorial for that.

### WASM in Deno

Now that we have our WASM compiled Rust code ready for import, we can now import it into our `main.ts` file. Add the following two lines to the top of the file.

```ts
import init, { fibonacci as fibonacciWasm } from "./rs_helpers_wasm/pkg/rs_helpers_wasm.js";

await init();
```

`init` has to be run once to initialize `WebAssembly` and to make the code reachable.

Now add the Fibonacci function call with a timer.

```ts
function timeRs() {
  console.time("wasm");
  console.log(fibonacciWasm(FIBONACCI_NUMBER));
  console.timeEnd("wasm");
}

timeRs();
```

Yes, it is this easy to import and use the Rust code in our JS file! The entire file should now look something like this.

```ts
import init, { fibonacci as fibonacciWasm } from "./rs_helpers_wasm/pkg/rs_helpers_wasm.js";

const FIBONACCI_NUMBER = 42;

await init();

function fibonacci(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}

function timeJs() {
  console.time("js");
  console.log(fibonacci(FIBONACCI_NUMBER));
  console.timeEnd("js");
}

function timeWasm() {
  console.time("wasm");
  console.log(fibonacciWasm(FIBONACCI_NUMBER));
  console.timeEnd("wasm");
}

timeJs();
timeWasm();
```

If you now execute `make run`, you should get something like this output.

```shell
deno run --allow-read main.ts
267914296
js: 2439ms
267914296
wasm: 1088ms
```

As you can see, the only difference is the speed it takes to compute the Fibonacci sequence, WASM is almost 2x as fast!

## Fibonacci compiled to C

The next method to speed up Deno is by using the new (and unstable as of Deno 1.20.1) Foreign Function Interface (in short FFI). Deno FFI can call the [C ABIs (Application Binary Interface)](https://en.wikipedia.org/wiki/Application_binary_interface), and we can therefore compile our code into a C dynamic library.

In our project root, create a new Rust project called `rs_helpers_c`.

```shell
cargo new --lib --vcs none rs_helpers_c
```

Your folder structure should now look like this.

```text
deno_rust
├── Makefile
├── README.md
├── main.ts
├── rs_helpers_wasm
│   ├── .gitignore
│   ├── Cargo.toml
│   └── src
│       └── lib.rs
└── rs_helpers_c
    ├── .gitignore
    ├── Cargo.toml
    └── src
        └── lib.rs
```

This time we will use a Deno helper tool called [deno_bindgen](https://github.com/denoland/deno_bindgen) which is maintained by Deno. Update your new `Cargo.toml` file.

```toml
[package]
name = "rs_helpers_c"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
deno_bindgen = "0.5.0"
serde = { version = "1", features = ["derive"] }
```

Now that the dependencies are added, we can add the Rust code in the `lib.rs` file.

```rust
use deno_bindgen::deno_bindgen;

#[deno_bindgen]
pub fn fibonacci(x: isize) -> isize {
    if x == 0 {
        return 0;
    }

    if x == 1 {
        return 1;
    }

    return fibonacci(x - 1) + fibonacci(x - 2);
}
```

As you can see, the Fibonacci code is exactly the same as for the WASM version, but it has a different macro. This macro allows `deno_bindgen` to generate the types and code needed to use the compiled dynamic library.

Let's test it out by adding the build script to our makefile, and execute the compiling by running `make build_c`.

```makefile
run: build_wasm build_c
    deno run  --allow-read --allow-write --allow-env --allow-ffi --unstable main.ts
build_wasm:
    cd rs_helpers_wasm && wasm-pack build --target web
build_c:
    cd rs_helpers_c && deno run --allow-read --allow-write --allow-env --allow-run https://deno.land/x/deno_bindgen/cli.ts
```

If you have a sharp eye, you will also see that we added permissions to the `run` script. This is so that the generated bindings can be executed.

If everything is compiled without issues, it is time to import the bindings into our `main.ts`.

```ts
import init, { fibonacci as fibonacciWasm } from "./rs_helpers_wasm/pkg/rs_helpers_wasm.js";
import { fibonacci as fibonacciC } from "./rs_helpers_c/bindings/bindings.ts";

const FIBONACCI_NUMBER = 43;

await init();

function fibonacci(x: number): number {
  if (x === 0) {
    return 0;
  }

  if (x === 1) {
    return 1;
  }

  return fibonacci(x - 1) + fibonacci(x - 2);
}

function timeJs() {
  console.time("js");
  console.log(fibonacci(FIBONACCI_NUMBER));
  console.timeEnd("js");
}

function timeWasm() {
  console.time("wasm");
  console.log(fibonacciWasm(FIBONACCI_NUMBER));
  console.timeEnd("wasm");
}

function timeC() {
  console.time("c");
  console.log(fibonacciC(FIBONACCI_NUMBER));
  console.timeEnd("c");
}

timeJs();
timeWasm();
timeC()
```

So, assuming your excitement and anticipation are through the roof, we will not run `make run`. You should get an output similar to this.

```text
433494437
js: 4005ms
433494437
wasm: 1797ms
433494437
c: 5058ms
```

So now you are wondering, why is the C version so much slower than even JS?? Well, it is simple, as we did not specify that `deno_bindgen` should create a release build, it created a debug build for easier development. Add `--release` to the end of the `build_c` script, and try to run it again.

```makefile
build_c:
    cd rs_helpers_c && deno run --allow-env --allow-read --allow-write --allow-run https://deno.land/x/deno_bindgen/cli.ts --release
```

The output should now look similar to this.

```text
433494437
js: 3886ms
433494437
wasm: 1765ms
433494437
c: 1186ms
```

So much faster than WASM even! 🎉

## Final notes about using Deno with WASM and FFI

You have now completed this post on how to use Deno with WASM and FFI. As you might see, we benefit from an increase in processing speed when using WASM and FFI, but that is not without caveats. A thing to notice is that calling the function takes time as it has to read and load the file, so if you have an add function (add two numbers together) in Rust, but loop over it in JS, it will take longer than doing the same in pure JS. Just try it out yourself, I'll even add the code for it! This means that you need to be tactical about where to use external code, as it will sometimes have a negative effect you did not take into account.

```rust
#[wasm_bindgen] // or #[deno_bindgen] for FFI
pub fn add(n1: isize, n2: isize) -> isize {
    n1 + n2
}
```

The best thing to do is to implement code in JS first, take timings, and if you see that a function is taking longer than what you would have liked, and you see that it is a reasonable place to use external code, port it over.

Another thing to notice is that Rust is not the only language able to compile into WASM or dylib, so if you prefer Go to Rust, you are free to do so.

If you go this far, I hope you learned something useful, and that you are ready to continue on your own! See you around! 👋🏻
