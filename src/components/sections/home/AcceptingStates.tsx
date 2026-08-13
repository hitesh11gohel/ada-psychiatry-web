import Image from "next/image";
import { SectionHeading } from "@/components/ui";

const STATES = [
  {
    name: "Arizona",
    note: "In-person and Virtual appointment",
    image: "/images/arizona.png",
  },
  {
    name: "Washington",
    note: "Virtual appointment",
    image: "/images/washington.png",
  },
  {
    name: "Oregon",
    note: "Virtual appointment",
    image: "/images/oregon.png",
  },
];

const AcceptingStates = () => {
  return (
    <section className="bg-bg px-4 py-20 sm:px-6 sm:py-24 lg:px-16">
      <SectionHeading>
        Now Accepting Patients In The
        <span className="block">Following States</span>
      </SectionHeading>

      <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-10 lg:gap-16">
        {STATES.map((state) => (
          <div
            key={state.name}
            className="mx-auto flex w-full max-w-sm flex-col items-center text-center"
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
