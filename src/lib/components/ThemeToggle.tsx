import { FC } from "react";
import { ThemeState, themes, useTheme } from "../hooks/useTheme";
import { arrayLoopAround } from "../helpers/utils";
import { ReactComponent as MonitorMoon } from "../../assets/icons/monitor_moon.svg"
import { ReactComponent as MonitorSun } from "../../assets/icons/monitor_sun.svg"
import { ReactComponent as MonitorSystem } from "../../assets/icons/monitor_system.svg"

export type ThemeToggleProps = {
  className: string;
};

const ThemeToggle: FC<ThemeToggleProps> = (props) => {
  const { theme, toggleTheme } = useTheme();

  const getThemeIcon = (theme: ThemeState) => {
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

  console.log(`ThemeToggle: theme is ${theme}`);

  const icon = getThemeIcon(theme);

  return (
    <div
      className={"cursor-pointer " + props.className}
      onClick={() => {
        const themeIndex = themes.indexOf(theme);
        console.log(`Current theme ${theme} index at ${themeIndex}`);
        const newTheme = arrayLoopAround(themes, themeIndex + 1);
        console.log(`Setting theme ${newTheme} index at ${themeIndex}`);
        toggleTheme(newTheme);
      }}
    >
      {icon}
    </div>
  );
};

export default ThemeToggle;
