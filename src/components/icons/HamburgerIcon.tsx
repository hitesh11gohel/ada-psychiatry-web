import type { SVGProps } from "react";

const HamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M0 1H24M0 9H24M0 17H24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default HamburgerIcon;
