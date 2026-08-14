"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/ui";

const STATES = [
  {
    name: "Arizona",
    note: "In-person and Virtual appointment",
    image: "/images/states/arizona.png",
  },
  {
    name: "Washington",
    note: "Virtual appointment",
    image: "/images/states/washington.png",
  },
  {
    name: "Oregon",
    note: "Virtual appointment",
    image: "/images/states/oregon.png",
  },
  {
    name: "New Mexico",
    note: "Virtual Appointment",
    image: "/images/states/new-mexico.png",
  },
  {
    name: "Colorado",
    note: "Virtual Appointment",
    image: "/images/states/colorado.png",
  },
  {
    name: "Kansas",
    note: "Virtual Appointment",
    image: "/images/states/kansas.png",
  },
];

const AcceptingStates = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="bg-bg pt-20 sm:px-6 sm:pt-24 sm:pb-24 lg:px-[80px] lg:pt-[73.6px] lg:pb-[74px]">
      <SectionHeading>
        Now Accepting Patients In
        <span className="block">The Following States</span>
      </SectionHeading>

      <div className="mt-[60px] grid grid-cols-1 gap-[20px] min-[1440px]:gap-x-[30px] min-[1440px]:gap-y-0 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {STATES.map((state, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              key={state.name}
              type="button"
              aria-pressed={isActive}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() =>
                setActiveIndex((prev) => (prev === index ? null : prev))
              }
              onClick={() =>
                setActiveIndex((prev) => (prev === index ? null : index))
              }
              className="mx-auto w-[300px] min-[1440px]:w-[400px] min-[1440px]:max-w-none sm:w-full sm:max-w-sm"
            >
              {/* Square footprint reserved at every breakpoint so expanding
                  to a full circle never overlaps the row below or reflows
                  sibling cards. */}
              <div className="relative aspect-square w-full">
                <div
                  className={`absolute inset-x-0 top-0 w-full overflow-hidden transition-[aspect-ratio] duration-500 ease-in-out ${
                    isActive ? "z-10 aspect-square" : "aspect-[2/1]"
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 aspect-square w-full overflow-hidden rounded-full">
                    <Image
                      src={state.image}
                      alt={`${state.name} skyline`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-8 text-center">
                  <div
                    className={`transition-all duration-500 ease-in-out ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <p className="font-abhaya text-[32px] leading-[normal] font-bold text-white sm:text-[44px]">
                      {state.name}
                    </p>
                    <p className="mt-1 font-sans [font-feature-settings:'liga'_off,'clig'_off] text-[14px] leading-[38.5px] font-normal text-white/90 sm:text-[18px]">
                      {state.note}
                    </p>
                  </div>
                </div>

                <div
                  className={`pointer-events-none absolute inset-x-0 top-1/2 z-20 px-[25px] pt-[25px] pb-0 text-center transition-opacity duration-300 ease-in-out ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <p className="font-abhaya text-[32px] leading-[normal] font-bold text-black sm:text-[44px]">
                    {state.name}
                  </p>
                  <p className="mt-1 font-sans [font-feature-settings:'liga'_off,'clig'_off] text-[14px] leading-[38.5px] font-normal text-[#1B1B1B] sm:text-[18px]">
                    {state.note}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default AcceptingStates;
