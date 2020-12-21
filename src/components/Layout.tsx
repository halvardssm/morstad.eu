import * as React from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutProps {
  skipHeader?: boolean;
  skipFooter?: boolean;
  sidebar?: Record<string, any>;
  debug?: boolean;
  title?: string
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  skipHeader,
  skipFooter,
  sidebar,
  title,
  debug = false,
}) => {
  return (
    <div className='container mx-auto'>
      <Helmet>
      </Helmet>
      {!skipHeader && (
        <Header title={title} />
      )}
      {!sidebar
        ? children
        : <div ></div>}
      {!skipFooter && (
        <Footer />
      )}
    </div>
  );
};
