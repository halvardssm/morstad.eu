import { _TAGS, TAGS, TW_COLORS } from "./constants";

export const TAGS_MAPPED = Object.entries(_TAGS)
  .map((e) => {
    const colorNumber = Math.floor(Math.random() * TW_COLORS.length);
    const color = TW_COLORS[colorNumber];
    const gradient = Math.floor(Math.random() * (7 - 2 + 1) + 2) * 100;

    return {
      name: e[1],
      code: e[0] as TAGS,
      color: `${color}-${gradient}`,
    };
  });
