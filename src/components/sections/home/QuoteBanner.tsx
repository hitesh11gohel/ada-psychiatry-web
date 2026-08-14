import { Container, WaveDivider } from "@/components/ui";

const QuoteBanner = () => {
  return (
    <section className="bg-bg">
      <WaveDivider direction="up" className="-mb-px h-6 w-full text-black" />
      <div className="bg-black py-8">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <span
              aria-hidden="true"
              className="text-gold font-serif text-8xl leading-none font-bold"
            >
              &ldquo;
            </span>
            <p className="font-abhaya -mt-6 mb-2 [font-feature-settings:'liga'_off,'clig'_off] text-[32px] leading-[29px] font-bold text-white">
              “We help people living with and experiencing difficult times”
            </p>
          </div>
        </Container>
      </div>
      <WaveDivider direction="down" className="-mt-px h-6 w-full text-black" />
    </section>
  );
};

export default QuoteBanner;
