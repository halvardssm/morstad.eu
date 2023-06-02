import { Helmet } from "react-helmet";

export type HeadProps = {
  title: string;
  description: string;
};

export const Head: React.FC<HeadProps> = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Head;
