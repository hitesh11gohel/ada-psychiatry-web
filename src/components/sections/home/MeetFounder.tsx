import Image from "next/image";
import {
  Container,
  SectionHeading,
  Button,
  WaveDivider,
} from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

const FounderPhoto = ({ className = "" }: { className?: string }) => (
  <div
    className={`relative h-full w-full overflow-hidden rounded-[20px] shadow-xl ${className}`}
  >
    <Image
      src="/images/founder-lady.png"
      alt="Lakeisha Appleton, founder of Ada Psychiatry"
      fill
      sizes="(max-width: 1023px) 420px, 509px"
      className="object-cover"
    />
  </div>
);

const FounderContent = () => (
  <>
    <SectionHeading as="h2" align="left">
      Meet The Founder
    </SectionHeading>
    <p className="text-ink mt-6 font-serif text-2xl font-semibold">
      Lakeisha Appleton
    </p>
    <p className="text-ink mt-1 font-sans text-base font-semibold">
      FNP-C, PMHNP-BC
    </p>
    <p className="text-ink mt-4 font-sans text-lg leading-relaxed">
      &ldquo;Mental health problems don&rsquo;t define who you are. They are
      something you experience. You walk in the rain and you feel the rain, but,
      importantly, YOU ARE NOT THE RAIN.&rdquo; &mdash; Matt Haig
    </p>
    <Button href="/learn-more" className="mt-8">
      Learn More
      <ArrowRightIcon className="h-4 w-4" />
    </Button>
  </>
);

const MeetFounder = () => {
  return (
    <section className="bg-cream relative">
      {/* Mobile / tablet: simple stacked layout */}
      <Container className="py-20 sm:py-24 lg:hidden">
        <div className="relative mx-auto aspect-[509/330] w-full max-w-[420px]">
          <FounderPhoto />
        </div>
        <div className="border-goldenrod mt-10 rounded-[20px] border-2 px-6 py-10 sm:px-10">
          <FounderContent />
        </div>
      </Container>

      {/* Desktop: pixel-exact composition matching the design (photo + card overlap) */}
      <div className="hidden pt-6 pb-20 lg:block">
        <div className="relative mx-auto h-[500px] max-w-[1440px] overflow-hidden">
          <div
            className="absolute z-10"
            style={{ width: 509, height: 330, top: 130, left: 154 }}
          >
            <FounderPhoto />
          </div>
          <div
            className="border-goldenrod absolute rounded-[20px] border-2 pt-8 pr-14 pb-10 pl-[138px]"
            style={{ width: 722, height: 410, top: 90, left: 565 }}
          >
            <FounderContent />
          </div>
        </div>
      </div>

      <WaveDivider
        direction="up"
        className="text-bg h-10 w-full sm:h-14 lg:h-16"
      />
    </section>
  );
};

export default MeetFounder;
