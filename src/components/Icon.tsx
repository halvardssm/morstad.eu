import type { FC } from "react";
import {
  IconHome,
  IconArrowLeft,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMoon,
  IconSun,
  IconCode,
  IconBulb,
  IconUsers,
  IconCloud,
  IconSchool,
  IconMusic,
  IconKey,
  IconRuler2,
  IconShip,
  IconSword,
  IconTerminal2,
  IconChessKnight,
  IconLock,
  IconFolders,
  IconWorld,
  IconCloudRain,
  IconTag,
  IconArchive,
  IconDeviceGamepad2,
  IconChecklist,
  IconDatabase,
  IconBook,
  IconPackage,
  IconLanguage,
  IconRobot,
  IconFolder,
  IconVirus,
  IconPointer,
  IconClick,
  IconStar,
  IconRss,
} from "@tabler/icons-react";

const ICONS: Record<string, FC<{ size?: number; color?: string; stroke?: number }>> = {
  home: IconHome,
  "arrow-left": IconArrowLeft,
  "brand-github": IconBrandGithub,
  "brand-linkedin": IconBrandLinkedin,
  mail: IconMail,
  moon: IconMoon,
  sun: IconSun,
  code: IconCode,
  bulb: IconBulb,
  users: IconUsers,
  cloud: IconCloud,
  school: IconSchool,
  music: IconMusic,
  key: IconKey,
  "ruler-2": IconRuler2,
  ship: IconShip,
  sword: IconSword,
  "terminal-2": IconTerminal2,
  "chess-knight": IconChessKnight,
  lock: IconLock,
  folders: IconFolders,
  world: IconWorld,
  "cloud-rain": IconCloudRain,
  tag: IconTag,
  archive: IconArchive,
  "device-gamepad-2": IconDeviceGamepad2,
  checklist: IconChecklist,
  database: IconDatabase,
  book: IconBook,
  package: IconPackage,
  language: IconLanguage,
  robot: IconRobot,
  folder: IconFolder,
  virus: IconVirus,
  pointer: IconPointer,
  click: IconClick,
  star: IconStar,
  rss: IconRss,
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  stroke?: number;
};

export const Icon: FC<IconProps> = ({ name, size = 16, color, stroke = 2 }) => {
  const IconComponent = ICONS[name] ?? IconHome;
  return <IconComponent size={size} color={color} stroke={stroke} />;
};

export default Icon;
