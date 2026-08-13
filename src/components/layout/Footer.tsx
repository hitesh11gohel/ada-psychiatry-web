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
  {
    label: "X",
    Icon: XIcon,
    href: "https://x.com/login",
  },
  {
    label: "TikTok",
    Icon: TikTokIcon,
    href: "https://www.tiktok.com/login",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/login",
  },
];

const HEADING_SIZE_CLASSES = {
  16: "text-[16px]",
  18: "text-[18px]",
} as const;

const FooterHeading = ({
  children,
  className = "",
  size = 18,
}: {
  children: string;
  className?: string;
  size?: 16 | 18;
}) => (
  <p
    className={`font-abhaya text-goldenrod leading-[30px] font-bold tracking-[0.2px] ${HEADING_SIZE_CLASSES[size]} ${className}`}
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

    <ul className="mt-[20px] flex flex-col gap-[14px]">
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
    <footer className="relative w-full bg-black text-white min-[1440px]:h-[421px]">
      {/* =========================
          DESKTOP
      ========================== */}
      <div className="hidden min-[1440px]:block">
        {/* Quick Links */}
        <div className="absolute top-[52px] left-[100px]">
          <FooterLinkGroup heading="Quick Links" links={QUICK_LINKS} />
        </div>

        {/* Resources */}
        <div className="absolute top-[52px] left-[310px]">
          <FooterLinkGroup heading="Resources" links={RESOURCE_LINKS} />
        </div>

        {/* Legal */}
        <div className="absolute top-[52px] left-[510px]">
          <FooterLinkGroup heading="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Business Hours */}
        <div className="absolute top-[52px] left-[710px]">
          <FooterHeading>Business Hours</FooterHeading>

          <div className="mt-[20px] flex flex-col gap-[14px]">
            <p className="font-sans text-sm text-white/90">Monday - Thursday</p>

            <p className="font-sans text-sm text-white/90">
              09:00 am - 4:00 pm
            </p>
          </div>

          <FooterHeading className="mt-[30px]">For Careers</FooterHeading>

          <div className="mt-[10px] flex flex-col gap-0">
            <p className="font-sans text-sm whitespace-nowrap text-white/90">
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

        {/* =========================
            LOGO / RIGHT CONTENT
        ========================== */}

        <div className="absolute top-[45px] left-[1043px]">
          <Link href="/" className="flex items-center gap-[14px]">
            <Image
              src="/images/logo-icon.png"
              alt="Ada Psychiatry logo"
              width={46}
              height={46}
              className="h-[46px] w-[46px]"
            />

            <span className="font-sans text-base font-bold tracking-[3px]">
              ADA PSYCHIATRY
            </span>
          </Link>
        </div>

        {/* Locate Us */}
        <div className="absolute top-[114px] left-[1043px] w-[357px]">
          <FooterHeading size={16}>Locate us</FooterHeading>

          <p className="mt-[6px] font-sans text-sm leading-[20px] text-white/90">
            1820 E Ray Road, STE A107, Chandler, Arizona 85225
          </p>

          <p className="mt-[4px] font-sans text-sm text-white/90">
            Phone:{" "}
            <a href="tel:480-526-9292" className="hover:text-white">
              480-526-9292
            </a>
          </p>
        </div>

        {/* Follow Us */}
        <div className="absolute top-[210px] left-[1043px]">
          <FooterHeading size={16}>Follow us</FooterHeading>

          <div className="mt-[10px] flex items-center gap-[16px]">
            {SOCIAL_ICONS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-[24px] w-[24px] items-center justify-center text-white/90 hover:text-white"
              >
                <Icon className="h-[24px] w-[24px]" />
              </a>
            ))}
          </div>
        </div>

        {/* =========================
            DIVIDER
        ========================== */}

        <div className="absolute top-[363px] left-0 h-px w-full bg-white/20" />

        {/* =========================
            COPYRIGHT
        ========================== */}

        <div className="absolute top-[377px] left-1/2 -translate-x-1/2">
          <p className="font-sans text-xs leading-[30px] whitespace-nowrap text-white/70">
            &copy; Ada Psychiatry. All rights reserved.
          </p>
        </div>
      </div>

      {/* =========================
          MOBILE / TABLET
      ========================== */}

      <div className="px-6 py-10 min-[1440px]:hidden">
        <div className="grid gap-10 sm:grid-cols-2">
          <FooterLinkGroup heading="Quick Links" links={QUICK_LINKS} />

          <FooterLinkGroup heading="Resources" links={RESOURCE_LINKS} />

          <FooterLinkGroup heading="Legal" links={LEGAL_LINKS} />

          <div>
            <FooterHeading>Business Hours</FooterHeading>

            <div className="mt-5 flex flex-col gap-[14px]">
              <p className="font-sans text-sm text-white/90">
                Monday - Thursday
              </p>

              <p className="font-sans text-sm text-white/90">
                09:00 am - 4:00 pm
              </p>
            </div>

            <FooterHeading className="mt-8">For Careers</FooterHeading>

            <div className="mt-5 flex flex-col gap-[14px]">
              <p className="font-sans text-sm text-white/90">
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
        </div>

        {/* Mobile Logo */}
        <div className="mt-10">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-icon.png"
              alt="Ada Psychiatry logo"
              width={46}
              height={46}
              className="h-[46px] w-[46px]"
            />

            <span className="font-sans text-base font-bold tracking-[3px]">
              ADA PSYCHIATRY
            </span>
          </Link>

          <FooterHeading size={16} className="mt-8">
            Locate us
          </FooterHeading>

          <p className="mt-5 font-sans text-sm text-white/90">
            1820 E Ray Road, STE A107, Chandler, Arizona 85225
          </p>

          <p className="mt-1 font-sans text-sm text-white/90">
            Phone:{" "}
            <a href="tel:480-526-9292" className="hover:text-white">
              480-526-9292
            </a>
          </p>

          <FooterHeading size={16} className="mt-8">
            Follow us
          </FooterHeading>

          <div className="mt-4 flex items-center gap-4">
            {SOCIAL_ICONS.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-6 w-6 items-center justify-center text-white/90 hover:text-white"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Divider + Copyright */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="font-sans text-xs text-white/70">
            &copy; Ada Psychiatry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
