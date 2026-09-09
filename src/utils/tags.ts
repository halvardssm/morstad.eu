export type TagColor =
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "pink"
  | "red"
  | "yellow"
  | "cyan"
  | "teal"
  | "indigo";

export const TAG_COLORS: Record<TagColor, { text: string; bg: string; border: string }> = {
  blue: { text: "#85b7eb", bg: "rgba(133,183,235,0.15)", border: "rgba(133,183,235,0.3)" },
  orange: { text: "#f0997b", bg: "rgba(240,153,123,0.15)", border: "rgba(240,153,123,0.3)" },
  green: { text: "#97c459", bg: "rgba(151,196,89,0.15)", border: "rgba(151,196,89,0.3)" },
  purple: { text: "#afa9ec", bg: "rgba(175,169,236,0.15)", border: "rgba(175,169,236,0.3)" },
  pink: { text: "#ed93b1", bg: "rgba(237,147,177,0.15)", border: "rgba(237,147,177,0.3)" },
  red: { text: "#e57373", bg: "rgba(229,115,115,0.15)", border: "rgba(229,115,115,0.3)" },
  yellow: { text: "#d4b85a", bg: "rgba(212,184,90,0.15)", border: "rgba(212,184,90,0.3)" },
  cyan: { text: "#7ec8c8", bg: "rgba(126,200,200,0.15)", border: "rgba(126,200,200,0.3)" },
  teal: { text: "#5eaba8", bg: "rgba(94,171,168,0.15)", border: "rgba(94,171,168,0.3)" },
  indigo: { text: "#8b95d4", bg: "rgba(139,149,212,0.15)", border: "rgba(139,149,212,0.3)" },
};

const COLOR_KEYS = Object.keys(TAG_COLORS) as TagColor[];
const tagColorCache = new Map<string, { text: string; bg: string; border: string }>();

export function getTagColor(name: string): { text: string; bg: string; border: string } {
  let colors = tagColorCache.get(name);
  if (!colors) {
    const color = TAG_COLORS[COLOR_KEYS[Math.floor(Math.random() * COLOR_KEYS.length)]];
    tagColorCache.set(name, color);
    colors = color;
  }
  return colors;
}
