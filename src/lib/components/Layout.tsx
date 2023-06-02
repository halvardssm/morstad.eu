import { FCC } from "../../types";

const Layout: FCC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-full w-screen min-h-screen">
      {children}
    </div>
  );
};

export default Layout;
