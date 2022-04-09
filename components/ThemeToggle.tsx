import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import MonitorSun from "../public/icons/monitor_sun.svg";
import MonitorMoon from "../public/icons/monitor_moon.svg";
import MonitorSystem from "../public/icons/monitor_system.svg";

type Theme = "system" | "dark" | "light";
const themes: Theme[] = ["system", "dark", "light"];

export type ThemeToggleProps = {
  className?: string;
};

export function isTheme(theme: unknown): theme is Theme {
  return typeof theme === "string" && themes.includes(theme as Theme);
}

export function arrayLoopAround<T>(array: T[], index: number): T {
  const arrayLength = array.length;

  if (index < arrayLength && index >= 0) {
    return array[index];
  }

  const adjustedArrayIndex =
    index - Math.floor(index / arrayLength) * arrayLength;

  return array[adjustedArrayIndex];
}

export default function ThemeToggle(props: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const initialTheme: Theme = isTheme(theme) ? theme : "system";

  const [localTheme, setLocalTheme] = useState<Theme>(initialTheme);
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setTheme(localTheme);
  }, [localTheme, setTheme]);

  if (!mounted) return null;

  const getThemeIcon = (theme: Theme) => {
    const className = "";
    switch (theme) {
      case "light":
        return <MonitorSun className={className} />;
      case "dark":
        return <MonitorMoon className={className} />;
      default:
        return <MonitorSystem className={className} />;
    }
  };
  const icon = getThemeIcon(theme);
  return (
    <div
      className={"cursor-pointer " + props.className}
      onClick={() => {
        const themeIndex = themes.indexOf(theme);
        const newTheme = arrayLoopAround(themes, themeIndex + 1);
        console.log(`Setting theme ${newTheme} index at ${themeIndex}`);
        setLocalTheme(newTheme);
      }}
    >
      {icon}
    </div>
  );
}
