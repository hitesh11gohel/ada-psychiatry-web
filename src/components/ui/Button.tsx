import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "soft" | "link";
export type ButtonSize = "md" | "lg";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & (
  | ({ href: string } & Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "className"
    >)
  | ({ href?: undefined } & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "className"
    >)
);

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-sans transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-gold text-ink-alt hover:brightness-105 text-base font-semibold leading-[27px]",
  soft: "bg-gradient-gold-soft text-ink-alt hover:brightness-105 text-base font-semibold leading-[27px]",
  link: "text-ink hover:text-gold text-sm font-medium",
};

const pillSizeClasses: Record<ButtonSize, string> = {
  md: "rounded-full px-4 py-2 sm:px-6 sm:py-3",
  lg: "h-[56px] w-[335px] rounded-[50px] px-6",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...rest
}: ButtonProps) => {
  const classes = [
    baseClasses,
    variantClasses[variant],
    variant !== "link" ? pillSizeClasses[size] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      {children}
      {variant === "link" && <span aria-hidden="true">→</span>}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default Button;
