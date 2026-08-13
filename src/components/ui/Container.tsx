import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const Container = ({
  children,
  as: Tag = "div",
  className = "",
}: ContainerProps) => {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
