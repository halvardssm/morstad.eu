import { PostT, ProjectT } from "../../types";

export type ContentData = {
  posts: PostT[];
  projects: ProjectT[];
};

export const fetcher = (input: RequestInfo | URL, init?: RequestInit) =>
  fetch(input, init).then((res) => res.json());

export const parseContentData = () => {
  const contentData = __CONTENT_DATA__; //JSON.parse(__CONTENT_DATA__);
  return contentData as unknown as ContentData;
};

export function arrayLoopAround<T>(array: T[], index: number): T {
  const arrayLength = array.length;

  if (index < arrayLength && index >= 0) {
    return array[index];
  }

  const adjustedArrayIndex =
    index - Math.floor(index / arrayLength) * arrayLength;

  return array[adjustedArrayIndex];
}

/**
 * Calculates age in years based on date
 *
 * @param dateString in format yyyy-mm-dd
 * @returns
 */
export function getAgeInYears(dateString: string) {
  const date = new Date(dateString);
  const cur = new Date();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore works
  const diff = cur - date;
  return Math.ceil(diff / 31536000000);
}
