import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

export type PostT = {
  slug: string;
  content: string;
  title: string;
  date: string;
  tags?: string[];
  [key: string]: unknown;
};

export type ProjectT = {
  symbol: string;
  title: string;
  tags: string[];
  url: string
  description: string
  priority?: number
  [key: string]: unknown;
};

type AssetFolder = "posts" | "projects"

const assetsDirectory = join(process.cwd(), "_assets");

function getAssetDirectory(asset: AssetFolder) {
  return join(assetsDirectory, asset);
}

export function getSlugs(asset: AssetFolder): string[] {
  return readdirSync(getAssetDirectory(asset));
}

export function getBySlug<T extends Record<string, unknown> = Record<string, unknown>>(
  asset: AssetFolder,
  slug: string,
  fields: Array<keyof T> = [],
): T {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(getAssetDirectory(asset), `${ realSlug }.md`);
  const fileContents = readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const res: Record<string, string> = {};

  if (fields.length < 1) return {
    slug: realSlug,
    content: content,
    ...data,
  } as unknown as T;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      res[field as string] = realSlug;
    }
    if (field === "content") {
      res[field as string] = content;
    }

    if (typeof data[field as string] !== "undefined") {
      res[field as string] = data[field as string];
    }
  });

  return res as T;
}

export function getPostBySlug(
  slug: string,
  fields: Array<keyof PostT> = [],
): PostT {
  return getBySlug<PostT>("posts", slug, fields);
}

export function getProjectBySlug(
  slug: string,
  fields: Array<keyof ProjectT> = [],
): ProjectT {
  const res =  getBySlug<ProjectT>("projects", slug, fields);
  res.tags = (res.tags as unknown as string).split(" ")
  return res
}

export function getAllOfAsset<T extends Record<string, unknown> = Record<string, unknown>>(asset: AssetFolder, fields: Array<keyof T> = [], sortKey = "date"): T[] {
  const slugs = getSlugs(asset);
  return slugs
    .map((slug) => getBySlug<T>(asset, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1[sortKey] as number) > (post2[sortKey] as number) ? -1 : 1));
}

export function getAllPosts(fields: Array<keyof PostT> = []): PostT[] {
  return getAllOfAsset<PostT>("posts", fields);
}

export function getAllProjects(fields: Array<keyof ProjectT> = []): ProjectT[] {
  return getAllOfAsset<ProjectT>("projects", fields, "priority");
}


