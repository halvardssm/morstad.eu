export type TagColor = 'blue' | 'orange' | 'green' | 'purple' | 'pink';

export const TAG_COLORS: Record<TagColor, { text: string; bg: string; border: string }> = {
  blue:   { text: '#85b7eb', bg: 'rgba(133,183,235,0.15)', border: 'rgba(133,183,235,0.3)' },
  orange: { text: '#f0997b', bg: 'rgba(240,153,123,0.15)', border: 'rgba(240,153,123,0.3)' },
  green:  { text: '#97c459', bg: 'rgba(151,196,89,0.15)', border: 'rgba(151,196,89,0.3)' },
  purple: { text: '#afa9ec', bg: 'rgba(175,169,236,0.15)', border: 'rgba(175,169,236,0.3)' },
  pink:   { text: '#ed93b1', bg: 'rgba(237,147,177,0.15)', border: 'rgba(237,147,177,0.3)' },
};

export const TAGS: Record<string, { name: string; color: TagColor }> = {
  js:          { name: 'JavaScript',        color: 'blue' },
  ts:          { name: 'TypeScript',        color: 'blue' },
  deno:        { name: 'Deno',              color: 'blue' },
  node:        { name: 'NodeJS',            color: 'purple' },
  react:       { name: 'React',             color: 'blue' },
  redux:       { name: 'Redux',             color: 'purple' },
  saga:        { name: 'Redux Saga',       color: 'purple' },
  observables: { name: 'Redux Observables', color: 'purple' },
  next:        { name: 'NextJS',            color: 'blue' },
  tw:          { name: 'Tailwind',          color: 'blue' },
  bootstrap:   { name: 'Bootstrap',         color: 'purple' },
  ws:          { name: 'WebSocket',         color: 'pink' },
  rust:        { name: 'Rust',              color: 'green' },
  java:        { name: 'Java',              color: 'orange' },
  spring:      { name: 'Spring',            color: 'orange' },
  docker:      { name: 'Docker',            color: 'blue' },
  kotlin:      { name: 'Kotlin',            color: 'orange' },
  android:     { name: 'Android',           color: 'orange' },
  go:          { name: 'Go',                color: 'blue' },
  c:           { name: 'C',                 color: 'green' },
  c_sh:        { name: 'C#',                color: 'blue' },
  unity:       { name: 'Unity',             color: 'orange' },
  tf:          { name: 'Terraform',         color: 'blue' },
  aws:         { name: 'AWS',               color: 'blue' },
  mysql:       { name: 'MySQL',             color: 'green' },
  pg:          { name: 'PostgreSQL',        color: 'green' },
  sqlite:      { name: 'SQLite',            color: 'green' },
  gql:         { name: 'GraphQL',           color: 'green' },
  course:      { name: 'Course',            color: 'green' },
  lib:         { name: 'Library',           color: 'blue' },
  feApp:       { name: 'Frontend',          color: 'orange' },
  beApp:       { name: 'Backend',           color: 'green' },
  game:        { name: 'Game',              color: 'pink' },
};

export function getTag(code: string): { name: string; color: TagColor } {
  return TAGS[code] ?? { name: code, color: 'blue' };
}
