export enum TAGS {
  js = "js",
  ts = "ts",
  deno = "deno",
  node = "node",
  react = "react",
  redux = "redux",
  observables = "observables",
  saga = "saga",

  java = "java",
  spring = "spring",

  docker = "docker",
  kotlin = "kotlin",
  go = "go",
  c = "c",
  c_sh = "c_sh",
  unity = "unity",
  tf = "tf",

  mysql = "mysql",
  pg = "pg",
  sqlite = "sqlite",
  gql = "gql",

  lib = "lib",
  feApp = "feApp",
  beApp = "beApp",
  game = "game",
  android = "android",
}

export const _TAGS: Record<keyof typeof TAGS, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  deno: "Deno",
  node: "NodeJS",
  react: "ReactJS",
  redux: "Redux",
  observables: "Redux Observables",
  saga: "Redux Saga",

  java: "Java",
  spring: "Spring",

  docker: "Docker",
  kotlin: "Kotlin",
  go: "Go",
  c: "C",
  c_sh: "C#",
  unity: "Unity",
  tf: "Terraform",

  mysql: "MySQL",
  pg: "PostgreSQL",
  sqlite: "SQLite",
  gql: "GraphQL",

  lib: "Library",
  feApp: "Frontend Application",
  beApp: "Backend Application",
  game: "Game",
  android: "Android App",
};

export const LINKS = [
  {
    url: "https://www.linkedin.com/in/halvardssm/",
    title: "Linkedin",
  },
  {
    url: "https://github.com/SimplyUndoable",
    title: "SimplyUndoable GitHub",
    description: "The GitHub page for SimplyUndoable",
  },
  {
    url: "https://github.com/SocialSlam",
    title: "Social Slam GitHub",
    description: "The GitHub page for Social Slam",
  },
  {
    url: "https://github.com/CodeChroma",
    title: "CodeChroma GitHub",
    description: "The GitHub page for CodeChroma",
  },
];

export const PROJECTS = [
  {
    symbol: "🦕",
    title: "Nessie",
    tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.lib],
    url: "https://github.com/halvardssm/deno-nessie",
    description:
      "A modular Deno library for PostgreSQL, MySQL, MariaDB and SQLite migrations.",
  },
  {
    symbol: "🎵",
    title: "Social Slam",
    tags: [
      TAGS.react,
      TAGS.js,
      TAGS.ts,
      TAGS.feApp,
      TAGS.redux,
      TAGS.saga,
      TAGS.pg,
      TAGS.gql,
    ],
    url: "https://github.com/SocialSlam/social-slam-frontend",
    description:
      "A Hackathon project where the concept is to create a live stream of people playing music together remotely.",
  },
  {
    symbol: "🌍",
    title: "Translation Fetch",
    tags: [TAGS.node, TAGS.js, TAGS.ts, TAGS.lib],
    url: "https://github.com/halvardssm/package-translation-fetch",
    description:
      "A NPM package for syncing translations from POEditor to a repo, and then downloading them.",
  },
  {
    symbol: "🗝",
    title: "Oak Middleware JWT",
    tags: [TAGS.deno, TAGS.js, TAGS.ts, TAGS.lib],
    url: "https://github.com/halvardssm/oak-middleware-jwt",
    description: "A JWT middleware for the Oak server.",
  },
  {
    symbol: "🎓",
    title: "Campus Management System",
    tags: [
      TAGS.java,
      TAGS.spring,
      TAGS.lib,
      TAGS.beApp,
      TAGS.feApp,
      TAGS.mysql,
    ],
    url: "https://github.com/halvardssm/java-campus-management-system",
    description:
      "A university project used to provide an interface for room bookings across the university buildings.",
  },
  {
    symbol: "🐹",
    title: "Domeneshop Client",
    tags: [
      TAGS.go,
      TAGS.lib,
    ],
    url: "https://github.com/halvardssm/go-domeneshop-client",
    description:
      "A client for domene.shop to use with Terraform for provisioning.",
  },
  {
    symbol: "☂️",
    title: "Domeneshop Provider (WIP)",
    tags: [
      TAGS.go,
      TAGS.lib,
      TAGS.tf,
    ],
    url: "https://github.com/halvardssm/terraform-provider-domeneshop",
    description: "A Terraform provider for Domeneshop.",
  },
  {
    symbol: "♟",
    title: "Chess has Quirks",
    tags: [
      TAGS.js,
      TAGS.node,
      TAGS.beApp,
      TAGS.feApp,
      TAGS.game,
    ],
    url: "https://github.com/halvardssm/js-chess-has-quirks",
    description:
      "A university project where a creation of chess in JavaScript was required.",
  },
  {
    symbol: "👾",
    title: "Game Jam 2020 entry",
    tags: [
      TAGS.c_sh,
      TAGS.unity,
      TAGS.game,
    ],
    url: "https://github.com/CodeChroma/gmtk_2020",
    description: "A game entry for GMTK 2020 written in c# with Unity.",
  },
  {
    symbol: "⚔️",
    title: "Munchkin Buddy",
    tags: [
      TAGS.kotlin,
      TAGS.android,
    ],
    url: "https://github.com/halvardssm/munchkin-buddy",
    description: "An Android helper application for Munchkin, the board game.",
  },
  {
    symbol: "🚢",
    title: "Docker images",
    tags: [
      TAGS.docker,
    ],
    url: "https://github.com/halvardssm/docker-custom-images",
    description: "A collection of custom docker images used for development.",
  },
  {
    symbol: "🎴",
    title: "Checkers",
    tags: [
      TAGS.c,
    ],
    url: "https://github.com/halvardssm/c-checkers",
    description: "The checkers game written in C.",
  },
  {
    symbol: "🦠",
    title: "CoDash",
    tags: [
      TAGS.js,
      TAGS.ts,
      TAGS.react,
      TAGS.saga,
      TAGS.redux,
    ],
    url: "https://github.com/codash-platform/codash",
    description: "A COVID-19 dashboard.",
  },
];

export const TW_COLORS = [
  "red",
  // "orange",
  // "amber",
  "yellow",
  // "lime",
  "green",
  // "emerald",
  // "teal",
  // "cyan",
  "blue",
  "indigo",
  // "violet",
  "purple",
  // "fuchsia",
  "pink",
  // "rose",
];
