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
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
        <div className="relative order-2 mx-auto w-full max-w-[560px] lg:order-1">
          <div
            className="border-goldenrod absolute -right-6 -bottom-6 hidden h-full w-full border-2 lg:block"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden">
            <Image
              src="/images/why-choose-us.png"
              alt="Ada Psychiatry care team"
              width={627}
              height={441}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading as="h2" align="left">
            Why Should You Choose Ada Psychiatry?
          </SectionHeading>
          <Accordion className="divide-goldenrod mt-8">
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
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
