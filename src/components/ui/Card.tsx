import type { ElementType, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

const Card = ({ children, as: Tag = "div", className = "" }: CardProps) => {
  return (
    <Tag
      className={`shadow-ink/5 rounded-2xl bg-white p-6 shadow-md sm:p-8 ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Card;
