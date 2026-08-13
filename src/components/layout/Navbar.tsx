"use client";

import { Button, NavItem } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS: { label: string; href?: string; hasDropdown?: boolean }[] = [
  { label: "Who we are", href: "/who-we-are", hasDropdown: true },
  { label: "Who we treat", href: "/who-we-treat", hasDropdown: true },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources", hasDropdown: true },
];

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-10 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/images/logo-icon.png"
            alt="Ada Psychiatry logo"
            width={46}
            height={46}
            className="h-8 w-8 shrink-0 sm:h-[46px] sm:w-[46px]"
            priority
          />
          <span className="truncate font-sans text-xs font-semibold tracking-wide text-white sm:text-lg sm:tracking-[3px]">
            Ada Psychiatry
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-3 sm:gap-8">
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                hasDropdown={item.hasDropdown}
              />
            ))}
          </div>

          <Button
            href="/book-an-appointment"
            className="shrink-0 whitespace-nowrap"
          >
            Book an Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
