import type { ReactNode } from "react";

type StepCardProps = {
  number: string;
  title: string;
  icon: ReactNode;
  className?: string;
};

const StepCard = ({ number, title, icon, className = "" }: StepCardProps) => {
  return (
    <div
      className={`flex w-full max-w-[220px] flex-col items-center gap-3 text-center ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center text-white">
        {icon}
      </div>
      <span className="text-gradient-gold font-serif text-2xl font-bold">
        {number}
      </span>
      <p className="font-sans text-sm text-white">{title}</p>
    </div>
  );
};

export default StepCard;
