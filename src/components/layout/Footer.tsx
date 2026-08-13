import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  XIcon,
} from "@/components/icons";
import Image from "next/image";
import Link from "next/link";

type FooterLink = { label: string; href?: string };

const QUICK_LINKS: FooterLink[] = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "What We Treat", href: "/what-we-treat" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact-us" },
];
const RESOURCE_LINKS: FooterLink[] = [
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Fees and Insurance", href: "/fees-and-insurance" },
];
const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Cookie Settings", href: "/cookie-settings" },
];

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    Icon: InstagramIcon,
    href: "https://www.instagram.com/accounts/login/",
  },
  {
    label: "Facebook",
    Icon: FacebookIcon,
    href: "https://www.facebook.com/login/",
  },
  { label: "X", Icon: XIcon, href: "https://x.com/login" },
  { label: "TikTok", Icon: TikTokIcon, href: "https://www.tiktok.com/login" },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/login",
  },
];

const FooterHeading = ({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) => (
  <p
    className={`text-goldenrod font-serif text-[18px] tracking-wide ${className}`}
  >
    {children}
  </p>
);

const FooterLinkGroup = ({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) => (
  <div>
    <FooterHeading>{heading}</FooterHeading>
    <ul className="mt-5 space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href ?? "#"}
            className="font-sans text-sm text-white/90 hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white sm:px-20 sm:py-6">
      <div className="px-10">
        <div className="grid gap-x-6 gap-y-10 lg:grid-cols-[7fr_3fr]">
          <div className="grid gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1.6fr]">
            <FooterLinkGroup heading="Quick Links" links={QUICK_LINKS} />
            <FooterLinkGroup heading="Resources" links={RESOURCE_LINKS} />
            <FooterLinkGroup heading="Legal" links={LEGAL_LINKS} />

            <div>
              <FooterHeading>Business Hours</FooterHeading>
              <p className="mt-5 font-sans text-sm text-white/90">
                Monday - Thursday
              </p>
              <p className="mt-1 font-sans text-sm text-white/90">
                09:00 am - 4:00 pm
              </p>
              <FooterHeading className="mt-8">For Careers</FooterHeading>
              <p className="mt-5 font-sans text-sm whitespace-nowrap text-white/90">
                Interested in joining the ADA Team?
              </p>
              <a
                href="mailto:Career@adapsychiatry.com"
                className="font-sans text-sm text-white/90 hover:text-white"
              >
                Career@adapsychiatry.com
              </a>
            </div>
          </div>

          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-icon.png"
                alt="Ada Psychiatry logo"
                width={40}
                height={40}
                className="h-9 w-9"
              />
              <span className="font-sans text-base font-bold tracking-[3px]">
                ADA PSYCHIATRY
              </span>
            </Link>

            <FooterHeading className="mt-8">Locate us</FooterHeading>
            <p className="mt-5 font-sans text-sm text-white/90">
              1820 E Ray Road, STE A107, Chandler, Arizona 85225
            </p>
            <p className="mt-1 font-sans text-sm text-white/90">
              Phone:{" "}
              <a href="tel:480-526-9292" className="hover:text-white">
                480-526-9292
              </a>
            </p>

            <FooterHeading className="mt-8">Follow us</FooterHeading>
            <div className="mt-4 flex items-center gap-4">
              {SOCIAL_ICONS.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/90 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full border-t border-white/20 pt-6 text-center">
        <p className="font-sans text-xs text-white/70">
          &copy; Ada Psychiatry. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
