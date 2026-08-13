"use client";

import {
  ActiveHexagonIcon,
  ArrowRightIcon,
  InactiveHexagonIcon,
} from "@/components/icons";
import { Button } from "@/components/ui";
import useAutoplay from "@/hooks/useAutoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SLIDE_COUNT = 5;

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { onMouseEnter, onMouseLeave } = useAutoplay(emblaApi, 5000);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      className="relative flex min-h-[420px] items-center overflow-hidden bg-black lg:min-h-[565px]"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <div
              key={index}
              className="relative h-full min-w-0 flex-[0_0_100%]"
            >
              <Image
                src="/images/carousel-image.png"
                alt="Provider speaking with a patient in a warm, comfortable setting"
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover object-[25%_25%]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

      <div className="relative px-6 py-14 sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <div className="max-w-xl">
          <h1 className="font-serif text-3xl leading-[1.15] font-normal tracking-wide text-white uppercase sm:text-4xl sm:leading-tight lg:text-5xl">
            {/* <h1 className="font-serif text-[48px] leading-[56.5px] font-normal tracking-normal text-white uppercase"> */}
            Need A Mental Health Provider?
          </h1>
          <p className="mt-3 font-serif text-xl text-white">No Look Further</p>
          <p className="mt-3 max-w-md font-sans text-lg text-white/90">
            Our goal is to provide a safe, comfortable, and warm environment so
            that you can openly discuss your mental health needs.
          </p>
          <Button href="/learn-more" className="mt-10">
            Learn More
            <ArrowRightIcon className="h-4 w-4" />
          </Button>

          <div
            role="tablist"
            aria-label="Hero slides"
            className="mt-10 flex items-center gap-2"
          >
            {Array.from({ length: SLIDE_COUNT }).map((_, index) => {
              const HexagonIcon =
                index === selectedIndex
                  ? ActiveHexagonIcon
                  : InactiveHexagonIcon;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className="h-4 w-4 shrink-0 transition-transform hover:scale-110"
                >
                  <HexagonIcon className="h-full w-full" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
