/**
 * The current version of the Zustand persistent store in localStorage,
 * update only when we want to force reset the store for the client
 */
export const STORE_VERSION = 1;

/**
 * localStorage key
 */
export const STORE_NAME = "__ZUSTAND_STORE";

/**
 * Sentry error sample rate, should be 100% of errors
 */
export const SENTRY_SAMPLE_RATE = 1.0;

/**
 * Sentry traces sample rate, should be 0% of traces
 */
export const SENTRY_TRACES_SAMPLE_RATE = 0.01;

/**
 * Sub-path the entrypoint will be served from
 */
export const ROUTE_BASENAME = "/";

export const TAGS: Record<string, string> = {
  js: "JavaScript",
  ts: "TypeScript",
  deno: "Deno",
  node: "NodeJS",
  react: "ReactJS",
  redux: "Redux",
  observables: "Redux Observables",
  saga: "Redux Saga",
  next: "NextJS",
  tw: "Tailwind",
  bootstrap: "Bootstrap",
  ws: "WebSocket",
  rust: "Rust",

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

  course: "Course",
  lib: "Library",
  feApp: "Frontend Application",
  beApp: "Backend Application",
  game: "Game",
  android: "Android App",
};

export const TW_COLORS = [
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];
