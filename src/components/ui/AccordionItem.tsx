"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
  className = "",
}: AccordionItemProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const triggerId = `accordion-trigger-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className={className}>
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((prev) => !prev)}
          className="text-ink flex w-full cursor-pointer items-center gap-4 py-4 text-left font-sans text-base font-medium"
        >
          {open ? (
            <MinusIcon className="h-[18px] w-[18px] shrink-0" />
          ) : (
            <PlusIcon className="h-[18px] w-[18px] shrink-0" />
          )}
          <span>{title}</span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="text-ink/70 pt-1 pb-6 pl-[34px] font-sans text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
