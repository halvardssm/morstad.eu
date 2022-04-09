import Link from "next/link";
import { Home, CornerRightUp } from "react-feather";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export const Header: React.FC<{
  title?: string;
  backUrl?: string;
  useFlexColOnSm?: boolean;
  showThemeSelector?: boolean;
  className?: string;
}> = ({ title, backUrl, useFlexColOnSm, showThemeSelector, className }) => {
  const links = (
    <>
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

      {showThemeSelector && <ThemeToggle className="dark:stroke-white" />}
    </>
  );

  return (
    <div
      className={`w-full flex ${
        useFlexColOnSm ? "flex-col lg:flex-row" : "flex-row"
      } ${useFlexColOnSm ? "items-start" : "items-center"} mt-5 mb-5 px-6 py-2${
        className ? ` ${className}` : ""
      }`}
    >
      {useFlexColOnSm ? (
        <div className="flex my-auto mr-5">{links}</div>
      ) : (
        links
      )}
      {title && <h1 className="text-4xl">{title}</h1>}
    </div>
  );
};
