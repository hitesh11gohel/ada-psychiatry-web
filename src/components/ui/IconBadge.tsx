import type { ReactNode } from "react";

type IconBadgeProps = {
  children: ReactNode;
  className?: string;
};

const IconBadge = ({ children, className = "" }: IconBadgeProps) => {
  return (
    <div
      className={`bg-cream text-gold flex h-[100px] w-[100px] shrink-0 items-center justify-center rounded-full ${className}`}
    >
      {children}
    </div>
  );
};

export default IconBadge;
