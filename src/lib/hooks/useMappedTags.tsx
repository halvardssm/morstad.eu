import { TagT } from "../components/Tags";
import { TAGS, TW_COLORS } from "../../constants";
import { useEffect, useState } from "react";

export const useMappedTags = (): [
  TagT[],
  (code: string, isSelected: boolean) => void
] => {
  const [tags, setTags] = useState<TagT[]>([]);

  useEffect(() => {
    const initialTags = Object.entries(TAGS).map(([code, name]) => {
      const colorNumber = Math.floor(Math.random() * TW_COLORS.length);
      const color = TW_COLORS[colorNumber];
      // We want gradient to be 200-800
      const gradient = Math.floor(Math.random() * 6 + 2) * 100;

      return {
        name,
        code,
        color: `${color}-${gradient}`,
        isSelected: false,
      };
    });
    setTags(initialTags);
  }, []);

  const setIsSelected = (code: string, isSelected: boolean) => {
    setTags((prevTags = []) =>
      prevTags.map((it) =>
        it.code === code ? { ...it, isSelected: isSelected } : it
      )
    );
  };

  return [tags, setIsSelected];
};
