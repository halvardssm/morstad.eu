import { useEffect } from "react";
import { useRemark } from "react-remark";
import frontmatter from "remark-frontmatter"
export type MarkdownProps = {
  /**
   * Markdown content
   */
  source: string;
};

const Markdown = (props: MarkdownProps) => {
  const [reactContent, setMarkdownSource] = useRemark({ remarkPlugins:[[frontmatter]]});

  useEffect(() => {
    setMarkdownSource(props.source);
  }, [setMarkdownSource, props.source]);

  return (
    <div className="prose dark:prose-invert max-w-full">{reactContent}</div>
  );
};

export default Markdown;
