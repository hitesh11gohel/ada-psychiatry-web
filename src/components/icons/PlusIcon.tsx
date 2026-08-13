import type { SVGProps } from "react";

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12.6148 11.2377V1.5H11.2377V11.2377H1.5V12.6148H11.2377V22.5H12.6148V12.6148H22.5V11.2377H12.6148Z"
      fill="currentColor"
    />
  </svg>
);

export default PlusIcon;
