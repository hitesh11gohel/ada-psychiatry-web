import type { ElementType, ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  eyebrow?: ReactNode;
  as?: ElementType;
  align?: "center" | "left";
  className?: string;
};

const SectionHeading = ({
  children,
  eyebrow,
  as: Tag = "h2",
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="text-gold mb-3 font-sans text-sm font-semibold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
      )}
      <Tag
        className={`text-ink font-serif text-3xl font-semibold sm:text-4xl ${className}`}
      >
        {children}
      </Tag>
    </div>
  );
};

export default SectionHeading;
