"use client";

import { useEffect, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined,
  intervalMs = 5000,
) => {
  const isPausedRef = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (isPausedRef.current) return;
      emblaApi.scrollNext();
    }, intervalMs);
    return () => clearInterval(id);
  }, [emblaApi, intervalMs]);

  return {
    onMouseEnter: () => {
      isPausedRef.current = true;
    },
    onMouseLeave: () => {
      isPausedRef.current = false;
    },
  };
};

export default useAutoplay;
