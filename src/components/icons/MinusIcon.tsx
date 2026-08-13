import type { SVGProps } from "react";

const MinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <line x1="1.5" y1="11.5" x2="22.5" y2="11.5" stroke="currentColor" />
  </svg>
);

export default MinusIcon;
