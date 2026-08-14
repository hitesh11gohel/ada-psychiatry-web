import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export type NavDropdownItem = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  items: NavDropdownItem[];
  className?: string;
};

const NavDropdown = ({ items, className = "" }: NavDropdownProps) => {
  return (
    <div
      className={`absolute top-full left-1/2 z-50 -translate-x-1/2 pt-4 ${className}`}
    >
      <div className="bg-bg w-[280px] rounded-[20px] p-6 shadow-xl">
        {items.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`text-ink hover:text-gold group/link flex items-center justify-between gap-3 font-sans text-base font-medium transition-colors ${
              index === 0
                ? "pb-4"
                : index === items.length - 1
                  ? "pt-4"
                  : "py-4"
            } ${index !== items.length - 1 ? "border-ink/15 border-b" : ""}`}
          >
            <span>{item.label}</span>
            <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
