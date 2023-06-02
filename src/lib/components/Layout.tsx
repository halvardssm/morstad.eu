export const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen">
      {children}
    </div>
  );
};
