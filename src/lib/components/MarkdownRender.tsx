import { useEffect, useState } from "react";
import Markdown from "./Markdown";

const getAndSetMarkdownFile = async ({
  setMd,
  url,
}: {
  setMd: (source: string) => void;
  url: string;
}) => {
  const response = await fetch(url);
  setMd(await response.text());
};

export type MarkdownRenderProps = {
  url: string;
};

const MarkdownRender = (props: MarkdownRenderProps) => {
  const [markdownSource, setMarkdownSource] = useState<string>();

  useEffect(() => {
    getAndSetMarkdownFile({ setMd: setMarkdownSource, url: props.url });
  }, [setMarkdownSource, props.url]);

  if (!markdownSource) return null;

  return <Markdown source={markdownSource} />;
};

export default MarkdownRender;
