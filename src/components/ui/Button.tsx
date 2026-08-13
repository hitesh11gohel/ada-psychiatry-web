import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type ButtonVariant = "primary" | "soft" | "link";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
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
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "rounded-full bg-gradient-gold px-4 py-2 sm:px-6 sm:py-3 text-ink-alt hover:brightness-105",
  soft: "rounded-full bg-gradient-gold-soft px-4 py-2 sm:px-6 sm:py-3 text-ink-alt hover:brightness-105",
  link: "text-ink hover:text-gold",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  ...rest
}: ButtonProps) => {
  const classes = [baseClasses, variantClasses[variant], className]
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
