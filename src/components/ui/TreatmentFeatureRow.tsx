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
      className={`flex flex-col items-center justify-center gap-8 sm:gap-20 lg:mx-auto lg:w-[1125px] lg:gap-[18.75px] ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} ${className}`}
    >
      <div className="w-full max-w-[260px] shrink-0 lg:w-[553.125px] lg:max-w-none lg:px-[56.625px] lg:py-[46.88px]">
        <div className="relative aspect-square w-full lg:h-[421.875px] lg:w-[421.875px]">
          <div
            className="border-goldenrod absolute -right-3 -bottom-3 h-full w-full rounded-full border-2 lg:-right-[18.75px] lg:-bottom-[18.75px]"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 422px, 260px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-[350px] sm:shrink-0 lg:w-[553.125px]">
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
