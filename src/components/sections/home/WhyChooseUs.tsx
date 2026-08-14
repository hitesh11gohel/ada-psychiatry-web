import Image from "next/image";
import {
  Container,
  SectionHeading,
  Accordion,
  AccordionItem,
} from "@/components/ui";

// TODO: only "Convenient access" had body copy authored in the Figma file —
// the other three are placeholders and should be replaced with real answers.
const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Convenient access",
    description:
      "We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home.",
  },
  {
    title: "Concierge approach",
    description:
      "TODO: replace with real copy describing the concierge approach to care.",
  },
  {
    title: "High quality service",
    description:
      "TODO: replace with real copy describing what makes the service high quality.",
  },
  {
    title: "Trusted and empathic providers",
    description:
      "TODO: replace with real copy describing the providers' trustworthiness and empathy.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-x-16 lg:gap-y-0">
        <SectionHeading
          as="h2"
          align="left"
          className="text-center lg:col-start-2 lg:row-start-1 lg:text-left"
        >
          Why Should You Choose Ada Psychiatry?
        </SectionHeading>

        <div className="relative mx-auto w-[315px] sm:w-full sm:max-w-[560px] lg:col-start-1 lg:row-span-2 lg:row-start-1">
          <div
            className="border-goldenrod absolute -right-4 -bottom-4 h-full w-full border-2 sm:-right-6 sm:-bottom-6"
            aria-hidden="true"
          />
          <div className="relative h-[240px] w-[315px] overflow-hidden sm:aspect-[627/441] sm:h-auto sm:w-full">
            <Image
              src="/images/why-choose-us.png"
              alt="Ada Psychiatry care team"
              fill
              sizes="(min-width: 640px) 560px, 315px"
              className="object-cover"
            />
          </div>
        </div>

        <Accordion className="divide-goldenrod px-[20px] sm:px-0 lg:col-start-2 lg:row-start-2 lg:mt-[24px]">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.title}
              title={
                <span className="font-serif text-xl font-semibold sm:text-2xl">
                  {item.title}
                </span>
              }
              defaultOpen={index === 0}
            >
              {item.description}
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
