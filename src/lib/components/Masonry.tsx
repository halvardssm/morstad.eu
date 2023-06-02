import React from "react";

export const Masonry: React.FC<{ elements: React.ReactElement[] }> = ({
  elements,
}) => {
  return (
    <div className="masonry-1-col sm:masonry-2-col lg:masonry-3-col 2xl:masonry-4-col m-5 flex-grow">
      {elements.map((element, i) => {
        return (
          <div key={element.key ?? i} className="break-inside w-full mb-4">
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default Masonry;
