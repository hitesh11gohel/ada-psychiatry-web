"use client";

import type { ReactNode } from "react";

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

const Accordion = ({ children, className = "" }: AccordionProps) => {
  return (
    <div className={`divide-y [&>div:first-child>h3>button]:pt-0 ${className}`}>
      {children}
    </div>
  );
};

export default Accordion;
