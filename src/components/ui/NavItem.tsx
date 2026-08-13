"use client";

import Link from "next/link";

type NavItemProps = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  onClick?: () => void;
  className?: string;
};

const NavItem = ({
  label,
  href,
  hasDropdown = false,
  onClick,
  className = "",
}: NavItemProps) => {
  const classes = `hover:text-gold flex items-center gap-1 font-sans text-sm font-medium text-white transition-colors ${className}`;

  const content = (
    <>
      <span>{label}</span>
      {hasDropdown && (
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="none"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.alert(`${label} clicked`);
  };

  return (
    <button type="button" onClick={handleClick} className={classes}>
      {content}
    </button>
  );
};

export default NavItem;
