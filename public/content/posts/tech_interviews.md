---
title: How to conduct tech interviews
date: "2023-06-03"
tags: []
codeFolderLink:
---

# How to conduct tech interviews

> Disclaimer: This post is all from my personal experience with interviewing (both sides), and my personal belief of what is important when looking for new hires.

In 2023, there is no real reason to do a whiteboard interview unless you are hiring for a very specific role that requires a lot of algorithmic knowledge. Generally:

- As their manager or coworker, will you be able to work with them without major issues?
- Are they able to sufficiently solve problems independently according to their level or role that you are hiring for?

Honestly, that's it. There is not much more that you should be looking for in an interview, and anything else is mostly irelevant for a majority of positions.

Now you might disagree (or even agree), but let's look at how you can conduct an interview with the focus on my points above.

> I will use a technical interview for a Web Engineer (TypeScript) as an example throughout this post, so all code examples will be in TypeScript.

## The interview

To get an answer to my points above, we need to simulate an actual work situation with the candidate as a colleague. To do this, what better way of doing it than with peer-programming!

We will create an environment in which you and the candidate can interract, discuss problems and you can get a feel how it would be to have them as your coworker.

### Preparation

All good interviews comes from solid preparation, and knowing what you are looking for. In my case, I know that anyone with access to the internet these days can produce code for any algorithm you want, so asking the candidate to produce such a function, is something I find largelly useless (but as you might see later, not completely).

When conducting interviews, I use a pre-crafted codebase with some scripts and functions to run. Some of the functions are complete, others need some work, and some are not implemented besides their name.

Let's create three functions, one fully implemented, one with a bug, and one that only has a function name.

```ts
export function arrayLoopAround<T>(array: T[], index: number): T {
  const arrayLength = array.length;

  if (index < arrayLength && index >= 0) {
    return array[index];
  }

  const adjustedArrayIndex =
    index - Math.floor(index / arrayLength) * arrayLength;

  return array[adjustedArrayIndex];
}

/** A generator for range. Supports descending ranges as well.
 *
 *      for(const i of rangeGenerator(0,3)) {
 *          console.log(i)
 *      }
 *      // 0,1,2,3
 */
export function* rangeGenerator(start: number, end: number) {
  if (start > end) {
    for (let i = start; end <= i; i--) {
      return i;
    }
  }

  for (let i = start; i <= end; i++) {
    return i;
  }
}

/**
 * Sleeps for the specified amount of milliseconds
 */
export function sleep(ms?: number): Promise<void> {}
```

Now, if i ask you to explain these functions to me, would you be able to? Your answer doesn't really matter, cause the purpose of this interview is to see how you can solve problems together with your candidate. Notice how the fist method doesn't have any comments, we'll get to that a bit later.

### Entering the interview

As always when interviewing, don't forget that the candidate is evaluating you as much as you are evaluating them. Some might think that their company is the best one there is, and that anyone should want to work there. This however is a very big and inaccurate assumption, and is already the wrong mindset going into an interview.

The purpose of an interview is to mutually figure out if you can accept each other in the workplace, and if either part does not pass the vibe-check, this is probably for the best on both ends.

Start the interview by greeting the candidate and introduce yourself with your preferred pronouns, and ask then for their preferred name and ask if they would mind sharing their pronouns. The next step is to introduce any fellow interviewees and the company.

After introductions are completed, it's generally good with an ice-breaker to relax the situation as candidates are generally nervous coming in. A good ice breaker would be something completely unrelated to the position, and is preferred to be something unexpected like: "If you could turn into a frog, which type of frog would you prefer?" or "What is the best stage of an avocados ripeness and why?". Spend a minute or so to get to know the candidate, and to have them relax, before you hit them with the actual interview.

### Conducting the interview

When starting the technical part of the interview, I always like to tell the candidate that they can ask me any question at any point during the interview, and that it is better to ask when they are stuck or do not know anything. I also tell them that this part will simulate how it is to be working together, and therefore they are allowed to look things up using search or whatever is their favorite AI.

> Note that it never hurts to give them guidance, share things, or teach them as you are conducting the interview. This will also reflect back on you to show that you are someone who can help them grow as well.

I also never share the code with the candidate, as I like to share my screen and tell them to guide me on what to do. This is good to see if the communication skills of the candidate is at a decent level, where we can solve problems together.

#### Code understanding

First I will ask the candidate to pretend that I am a junior developer who barely touched JS before, and then explain me what is happening in the function `arrayLoopAround`. What I am usually looking for, is if they catch the types including the generic, and if they understand the flow. I then ask them to summarize what this function is doing, and to help me create the DocBlock to "save them from questions from future junior devs about the same function". By having the candidate tell you what to write in the DocBlock word-by-word gives you two things: You see if they really understood what the function does, and you see if they are able to explain things in simple terms.

#### Debugging

The second question is more about debugging faulty code. You can use the example in the DocBlock of `rangeGenerator` to run an example of it not working (hint, you have to use `yield` instead of return), and for test the candidates steps along the way. Another finicky detail about this function is that it is a generator function, which is not very common to use outside of some very specific cases. The duration for this question, might be the shortest or the longest, because if the candidate is familiar with generators (trust me, not many are), they will see the issue right away. Otherwise, if they have never used generators before, they will need to look up the documentation about generators and learn it on the spot.

All of this will indicate to you, the candidates ability to problem solve and communicate with you, which they would have to do as your coworker. What I sometimes also do if the candidate cant find good documentation, is to send them the MDN page on [itterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators).

#### Implementation

The third and last question is about their implementation skills. The `sleep` is one of the easiest and first functions you come across when dealing with promises, but most people will just search up how to implement it rather than knowing it by heart. The issue with this is that there are some overcomplicated ways of implementing it, and this question is to evaluate if the candidate is able to weed out the good examples from the bad ones. A good candidate in my eyes will search up "js sleep function", and pick a solution giving this implementation:

```ts
/**
 * Sleeps for the specified amount of milliseconds
 */
export function sleep(ms?: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
```

This seems pretty simple at first glance, but trust me, you will have a fair share of interesting solutions here. Of course, my solution might not be the best, but as long as the candidate can explain why they chose the solution over the other ones (and it makes sense), that is good enough for me.

### Ending the interview

When ending the interview, it is good to summarize everything you did, and reflect together back on how it went. This is also the oportunity for the candidate to revisit previous parts if they want to, and to ask questions (it never hurts to ask if they have any questions). 

Remember to thank the applicant for their time, and wish them a good day ✨

## Conclusion

- candidate is stressed or uncomfortable
- candidate is not able to communicate
- candidate is not able to code
- candidate is not able to code to the level you expect
- candidate is not able to code in the language you expect
- you have to go through a lot of code
- you have to prepare before the interview
- 10 minutes are usually enough to know if you will take the candidate or not
