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
      className={`flex flex-col items-center justify-center gap-8 sm:gap-20 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} ${className}`}
    >
      <div className="relative aspect-square w-full max-w-[260px] shrink-0">
        <div
          className="border-goldenrod absolute -right-3 -bottom-3 h-full w-full rounded-full border-2"
          aria-hidden="true"
        />
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
      </div>
      <div className="sm:w-[350px] sm:shrink-0">
        <h3 className="text-ink font-serif text-2xl font-bold">{title}</h3>
        <p className="text-ink/80 mt-4 font-sans text-base leading-relaxed">
          {description}
        </p>
        <Button
          href={`/${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-6"
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TreatmentFeatureRow;
