export type TagT = {
  isSelected: boolean;
  code: string;
  name: string;
  [key: string]: unknown;
};

export type TagsProps<T extends TagT> = {
  tags: T[];
  onTagClick: (tag: T) => void;
};

export const Tags = <T extends TagT = TagT>({
  tags,
  onTagClick,
}: TagsProps<T>) => {
  return (
    <div className="flex flex-wrap p-2 md:p-4">
      {tags.map((tag, i) => {
        const colors = tag.isSelected
          ? `text-white bg-${tag.color} border-${tag.color}`
          : `text-${tag.color} bg-white border-${tag.color} dark:bg-black`;

        return (
          <span
            key={i}
            onClick={() => onTagClick(tag)}
            className={`cursor-pointer inline-block rounded-min border ${colors} px-2 py-1 text-xs select-none font-bold mr-2 mb-1`}
          >
            {tag.name}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
