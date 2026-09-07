export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  codeFolderLink?: string;
};

export const POSTS: Post[] = [
  {
    slug: 'deno-react-ws-chat',
    title: 'Realtime chat application with Deno and React',
    date: '2023-09-11',
    tags: ['deno', 'react', 'ws'],
    summary: 'Building a chat app with WebSockets, using Deno for the backend and React on the frontend.',
    codeFolderLink: 'https://github.com/halvardssm/blog-code/tree/main/code/deno_rtc',
  },
  {
    slug: 'module-deno-node',
    title: 'How to build a module for both Deno and Node',
    date: '2023-06-02',
    tags: ['deno', 'node'],
    summary: 'A shared build setup so one codebase ships as a package for both runtimes.',
    codeFolderLink: 'https://github.com/halvardssm/blog-code/tree/main/code/module_deno_node',
  },
  {
    slug: 'deno-react-csr',
    title: 'React CSR with Deno',
    date: '2022-03-28',
    tags: ['deno', 'react'],
    summary: 'Serving a client-rendered React app straight from a vanilla Deno server.',
    codeFolderLink: 'https://github.com/halvardssm/blog-code/tree/main/code/deno_react',
  },
  {
    slug: 'deno-rust',
    title: 'Increase performance of your Deno application with Rust',
    date: '2022-03-27',
    tags: ['deno', 'rust'],
    summary: 'Offloading a hot code path to a compiled Rust module via FFI.',
    codeFolderLink: 'https://github.com/halvardssm/blog-code/tree/main/code/deno_rust',
  },
  {
    slug: 'deno-introduction',
    title: 'Introduction to Deno',
    date: '2022-03-26',
    tags: ['deno'],
    summary: 'A quick overview of Deno and what makes it different from Node.',
  },
];
