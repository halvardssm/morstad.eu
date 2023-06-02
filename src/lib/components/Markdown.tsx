export type MarkdownProps = {
  content: string;
};

export const Markdown: React.FC<MarkdownProps> = ({ content }) => {
  return (
    <div
      className={"prose dark:prose-invert max-w-full"}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
