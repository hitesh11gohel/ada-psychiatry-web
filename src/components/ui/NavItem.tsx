"use client";

import Link from "next/link";
import NavDropdown, { type NavDropdownItem } from "./NavDropdown";

type NavItemProps = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
  onClick?: () => void;
  className?: string;
};

const NavItem = ({
  label,
  href,
  hasDropdown = false,
  dropdownItems,
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

  const trigger = href ? (
    <Link href={href} className={classes}>
      {content}
    </Link>
  ) : (
    <button
      type="button"
      onClick={() => {
        if (onClick) {
          onClick();
          return;
        }
        window.alert(`${label} clicked`);
      }}
      className={classes}
    >
      {content}
    </button>
  );

  if (!hasDropdown || !dropdownItems?.length) {
    return trigger;
  }

  return (
    <div className="group relative">
      {trigger}
      <NavDropdown
        items={dropdownItems}
        className="pointer-events-none opacity-0 transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100"
      />
    </div>
  );
};

export default NavItem;
