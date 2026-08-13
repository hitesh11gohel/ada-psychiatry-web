import { useId, type ReactNode, type SVGProps } from "react";

const HEXAGON_POINTS = "8,1 14.06,4.5 14.06,11.5 8,15 1.94,11.5 1.94,4.5";
const STROKE_COLOR = "#C18C2C";

type HexagonIconProps = SVGProps<SVGSVGElement>;

const HexagonShape = ({
  fill,
  defs,
  ...props
}: HexagonIconProps & { fill: string; defs?: ReactNode }) => (
  <svg
    viewBox="0 0 16 16"
    width={16}
    height={16}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    shapeRendering="geometricPrecision"
    {...props}
  >
    {defs}
    <polygon
      points={HEXAGON_POINTS}
      fill={fill}
      stroke={STROKE_COLOR}
      strokeWidth={1}
      strokeLinejoin="round"
    />
  </svg>
);

export const InactiveHexagonIcon = (props: HexagonIconProps) => (
  <HexagonShape fill="transparent" {...props} />
);

export const SolidHexagonIcon = (props: HexagonIconProps) => (
  <HexagonShape fill={STROKE_COLOR} {...props} />
);

export const ActiveHexagonIcon = (props: HexagonIconProps) => {
  const gradientId = `hexagon-active-${useId()}`;
  return (
    <HexagonShape
      fill={`url(#${gradientId})`}
      defs={
        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="1"
            x2="8"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#FCF38A" />
            <stop offset="100%" stopColor="#C18C2C" />
          </linearGradient>
        </defs>
      }
      {...props}
    />
  );
};
