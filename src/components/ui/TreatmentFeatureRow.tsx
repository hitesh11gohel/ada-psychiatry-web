import Image from "next/image";
import Button from "./Button";
import { ArrowRightIcon } from "@/components/icons";

type TreatmentFeatureRowProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  className?: string;
};

const TreatmentFeatureRow = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  className = "",
}: TreatmentFeatureRowProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-8 min-[1440px]:mx-auto min-[1440px]:w-[1125px] min-[1440px]:gap-[18.75px] sm:gap-20 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} ${className}`}
    >
      <div className="w-full max-w-[260px] shrink-0 min-[1440px]:w-[553.125px] min-[1440px]:max-w-none min-[1440px]:px-[56.625px] min-[1440px]:py-[46.88px]">
        <div className="relative aspect-square w-full min-[1440px]:h-[421.875px] min-[1440px]:w-[421.875px]">
          <div
            className="border-goldenrod absolute -right-3 -bottom-3 h-full w-full rounded-full border-2 min-[1440px]:-right-[18.75px] min-[1440px]:-bottom-[18.75px]"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1440px) 422px, 260px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="min-[1440px]:w-[553.125px] sm:w-[350px] sm:shrink-0">
        <h3 className="font-abhaya text-[33.75px] leading-[32.813px] font-bold text-black">
          {title}
        </h3>
        <p className="font-abhaya mt-4 text-[18.75px] leading-[33.75px] font-normal text-black">
          {description}
        </p>
        <Button
          href={`/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-6 font-normal!"
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TreatmentFeatureRow;
