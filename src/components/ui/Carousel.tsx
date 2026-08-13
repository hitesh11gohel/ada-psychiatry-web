"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { InactiveHexagonIcon, SolidHexagonIcon } from "@/components/icons";
import useAutoplay from "@/hooks/useAutoplay";

type CarouselProps = {
  children: ReactNode[];
  options?: EmblaOptionsType;
  className?: string;
  slideClassName?: string;
  autoplayIntervalMs?: number;
};

const Carousel = ({
  children,
  options,
  className = "",
  slideClassName = "",
  autoplayIntervalMs = 5000,
}: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    ...options,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const { onMouseEnter, onMouseLeave } = useAutoplay(
    emblaApi,
    autoplayIntervalMs,
  );

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Prime the initial selection/snap state; embla has no "ready" event to
    // hook this off of, so this has to run once eagerly before subscribing.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div
              key={index}
              className={`min-w-0 flex-[0_0_88%] sm:flex-[0_0_70%] lg:flex-[0_0_754px] ${slideClassName}`}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {scrollSnaps.length > 1 && (
        <div
          role="tablist"
          aria-label="Slides"
          className="mt-6 flex items-center justify-center gap-2"
        >
          {scrollSnaps.map((_, index) => {
            const HexagonIcon =
              index === selectedIndex ? SolidHexagonIcon : InactiveHexagonIcon;
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
      )}
    </div>
  );
};

export default Carousel;
