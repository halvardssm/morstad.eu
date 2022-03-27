export type ContainerProps = {
  wide?: boolean;
  footer?: boolean;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  wide = false,
  footer = false,
}) => {
  return (
    <main
      className={`pt-5 ${
        footer ? "pb-20" : "pb-5"
      } flex flex-col grow justify-center max-w-5xl mx-5 lg:mx-auto${
        wide ? " max-w-screen-2xl" : ""
      } lg:w-full`}
    >
      {children}
    </main>
  );
};

export default Container;
