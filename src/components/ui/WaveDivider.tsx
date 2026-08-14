const BUMP_WIDTH = 40;
const BASELINE = 10;

const buildWavePath = (bumps: number, direction: "up" | "down") => {
  const width = bumps * BUMP_WIDTH;
  const flatY = direction === "down" ? 0 : 20;
  const crestY = direction === "down" ? 20 : 0;
  const troughY = direction === "down" ? 0 : 20;

  let d = `M0 ${flatY}H${width}V${BASELINE}`;
  let x = width;
  for (let i = 0; i < bumps; i++) {
    d += `Q${x - 10} ${crestY} ${x - 20} ${BASELINE}`;
    d += `Q${x - 30} ${troughY} ${x - 40} ${BASELINE}`;
    x -= BUMP_WIDTH;
  }
  d += "Z";

  return { d, width };
};

type WaveDividerProps = {
  direction?: "up" | "down";
  bumps?: number;
  className?: string;
};

const MOBILE_BUMPS = 3;
const TABLET_BUMPS = 5;

const WavePath = ({
  bumps,
  direction,
  className,
}: {
  bumps: number;
  direction: "up" | "down";
  className: string;
}) => {
  const { d, width } = buildWavePath(bumps, direction);

  return (
    <svg
      viewBox={`0 0 ${width} 20`}
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
};

const WaveDivider = ({
  direction = "down",
  bumps = 7,
  className = "",
}: WaveDividerProps) => {
  return (
    <>
      <WavePath
        bumps={MOBILE_BUMPS}
        direction={direction}
        className={`block sm:hidden ${className}`}
      />
      <WavePath
        bumps={TABLET_BUMPS}
        direction={direction}
        className={`hidden sm:block lg:hidden ${className}`}
      />
      <WavePath
        bumps={bumps}
        direction={direction}
        className={`hidden lg:block ${className}`}
      />
    </>
  );
};

export default WaveDivider;
