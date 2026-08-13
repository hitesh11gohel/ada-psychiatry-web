import type { ReactNode } from "react";
import IconBadge from "./IconBadge";

type ServiceBadgeProps = {
  icon: ReactNode;
  label: string;
  className?: string;
};

const ServiceBadge = ({ icon, label, className = "" }: ServiceBadgeProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <IconBadge>{icon}</IconBadge>
      <p className="text-ink mt-4 max-w-[150px] font-serif text-lg font-bold">
        {label}
      </p>
    </div>
  );
};

export default ServiceBadge;
