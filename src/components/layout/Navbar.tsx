"use client";

import { Button, NavItem, type NavDropdownItem } from "@/components/ui";
import { ArrowRightIcon, HamburgerIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_ITEMS: {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
}[] = [
  {
    label: "Who we are",
    href: "/who-we-are",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Ada", href: "/who-we-are/about-ada" },
      { label: "Meet The Team", href: "/who-we-are/meet-the-team" },
    ],
  },
  {
    label: "What we treat",
    href: "/who-we-treat",
    hasDropdown: true,
    dropdownItems: [
      { label: "Mental Health", href: "/who-we-treat/mental-health" },
      { label: "Substance Abuse", href: "/who-we-treat/substance-abuse" },
      {
        label: "Weight Loss Program",
        href: "/who-we-treat/weight-loss-program",
      },
    ],
  },
  { label: "Services", href: "/services" },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    dropdownItems: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Faq", href: "/resources/faq" },
      { label: "Self Pay Fees", href: "/resources/self-pay-fees" },
      { label: "Insurance", href: "/resources/insurance" },
      {
        label: "PMHNP Preceptorship",
        href: "/resources/pmhnp-preceptorship",
      },
      { label: "Important Info", href: "/resources/important-info" },
    ],
  },
];

const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none">
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none">
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenAccordion(null);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const mediaQuery = window.matchMedia("(min-width: 1025px)");
    const handleChange = () => {
      if (mediaQuery.matches) closeMobileMenu();
    };
    mediaQuery.addEventListener("change", handleChange);

    document.body.style.overflow = "hidden";
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/60" : "bg-black"
      }`}
    >
      <div className="relative flex items-center justify-between gap-3 px-4 py-3 min-[1025px]:h-[83px] min-[1025px]:py-0 sm:px-10 sm:py-4">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/images/logo-icon.png"
            alt="Ada Psychiatry logo"
            width={46}
            height={46}
            className="h-8 w-8 shrink-0 sm:h-[46px] sm:w-[46px]"
            priority
          />
          <span className="hidden truncate font-sans font-semibold tracking-wide text-white min-[1025px]:inline min-[1025px]:text-lg min-[1025px]:tracking-[3px]">
            Ada Psychiatry
          </span>
        </Link>

        <span className="absolute left-1/2 -translate-x-1/2 truncate font-sans text-[18px] font-semibold tracking-[3px] text-white min-[1025px]:hidden">
          Ada Psychiatry
        </span>

        <div className="flex shrink-0 items-center gap-3 sm:gap-8">
          <div className="hidden items-center gap-8 min-[1025px]:flex">
            {NAV_ITEMS.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                href={item.href}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>

          <div className="hidden min-[1025px]:block">
            <Button
              href="/book-an-appointment"
              className="shrink-0 text-sm! leading-[18.5px]! font-medium! whitespace-nowrap min-[1025px]:h-[46px]! min-[1025px]:w-[209px]!"
            >
              Book an Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="text-gold relative flex h-8 w-8 shrink-0 items-center justify-center min-[1025px]:hidden"
          >
            <HamburgerIcon
              className={`absolute h-[15px] w-6 transition-all duration-200 ease-in-out ${
                mobileOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <CloseIcon
              className={`absolute h-[22px] w-[22px] transition-all duration-200 ease-in-out ${
                mobileOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav-menu"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        className={`fixed inset-x-0 top-[56px] bottom-0 z-40 overflow-y-auto bg-white transition-all duration-300 ease-in-out min-[1025px]:hidden sm:top-[78px] ${
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto mt-[50px] flex w-[90%] flex-col">
          {NAV_ITEMS.map((item) => {
            const submenu = item.hasDropdown ? item.dropdownItems : undefined;
            const isOpen = openAccordion === item.label;

            return (
              <div key={item.label} className="border-goldenrod border-b">
                {submenu?.length ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion((prev) =>
                        prev === item.label ? null : item.label,
                      )
                    }
                    aria-expanded={isOpen}
                    className="text-ink flex w-full items-center justify-between py-4 font-sans text-xl font-semibold"
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon className="h-4 w-4 shrink-0" />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={closeMobileMenu}
                    className="text-ink flex items-center justify-between py-4 font-sans text-xl font-semibold"
                  >
                    {item.label}
                  </Link>
                )}

                {submenu?.length ? (
                  <div
                    className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="bg-cream">
                        {submenu.map((sub, index) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={closeMobileMenu}
                            className={`text-ink flex items-center justify-between gap-3 pt-[10px] pr-[32px] pb-[16px] pl-[32px] font-sans text-base ${
                              index !== submenu.length - 1
                                ? "border-goldenrod border-b"
                                : ""
                            }`}
                          >
                            <span>{sub.label}</span>
                            <ArrowRightIcon className="h-4 w-4 shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}

          <Link
            href="/book-an-appointment"
            onClick={closeMobileMenu}
            className="text-ink border-goldenrod flex items-center justify-between border-b py-4 font-sans text-xl font-semibold"
          >
            Book An Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
