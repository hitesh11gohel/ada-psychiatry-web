import Image from "next/image";
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
  return (
    <section className="bg-bg px-4 pt-20 pb-20 sm:px-6 sm:pt-24 sm:pb-24 lg:px-[80px] lg:pt-[73.6px] lg:pb-[74px]">
      <SectionHeading>
        Now Accepting Patients In
        <span className="block">The Following States</span>
      </SectionHeading>

      <div className="mt-[60px] grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-x-[30px] lg:gap-y-0">
        {STATES.map((state) => (
          <div
            key={state.name}
            className="mx-auto flex w-full max-w-sm flex-col items-center text-center lg:h-[420px] lg:w-[400px] lg:max-w-none"
          >
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-t-full">
              <Image
                src={state.image}
                alt={`${state.name} skyline`}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-ink mt-6 font-serif text-xl font-bold">
              {state.name}
            </p>
            <p className="text-ink/70 mt-1 font-sans text-sm">{state.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcceptingStates;
