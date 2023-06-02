import { FCC } from "../../types";

export const Card: FCC = ({ children }) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg dark:shadow-none border border-white p-2 md:p-4">
      {children}
    </article>
  );
};
export default Card;
