import { FC, PropsWithChildren } from "react";

export type FCC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Props extends Record<string, any> = Record<string, any>
> = FC<PropsWithChildren<Props>>;

export type PostT = {
  title: string;
  date: string;
  tags: string[];
  codeFolderLink?: string;
  filePath: string;
  slug: string;
  [key: string]: unknown;
};

export type ProjectT = {
  symbol: string;
  title: string;
  tags: string[];
  url: string;
  description: string;
  priority?: number;
  filePath: string;
  slug: string;
  [key: string]: unknown;
};

type ContentFolder = "posts" | "projects";
