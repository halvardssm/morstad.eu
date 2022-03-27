import Link from "next/link";
import { Home, CornerRightUp } from "react-feather";

export const Header: React.FC<{ title: string; backUrl?: string }> = ({
  title,
  backUrl,
}) => {
  return (
    <div className="w-full flex items-center mt-5 mb-5 px-6 py-2">
      <Link href="/">
        <a className="mr-6">
          <Home />
        </a>
      </Link>

      {backUrl && (
        <Link href={backUrl}>
          <a className="mr-6">
            <CornerRightUp />
          </a>
        </Link>
      )}

      <h1 className="text-4xl">{title}</h1>
    </div>
  );
};
