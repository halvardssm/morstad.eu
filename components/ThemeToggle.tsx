import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "react-feather";

type Theme = "system" | "dark" | "light";
const themes: Theme[] = ["system", "dark", "light"];

export type ThemeToggleProps = {
  className: string;
};

export function isTheme(theme: unknown): theme is Theme {
  return typeof theme === "string" && themes.includes(theme as Theme);
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

  const iconProps = { className: "inline-block mr-2 mb-1", size: 18 };

  return (
    <div className={props.className}>
      {theme === "light"
        ? (
          <Sun {...iconProps} />
        )
        : theme === "dark"
        ? (
          <Moon {...iconProps} />
        )
        : (
          <Monitor {...iconProps} />
        )}

      <select
        name="themes"
        id="theme-select"
        className="inline-block focus:ring-0 focus:outline-none"
        value={theme}
        onChange={(e) => setLocalTheme(e.target.value as Theme)}
      >
        {themes.map((el) => {
          return <option value={el}>{el}</option>;
        })}
      </select>
    </div>
  );
}
