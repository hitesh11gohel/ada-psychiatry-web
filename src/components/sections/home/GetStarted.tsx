import { Container, StepCard, Button } from "@/components/ui";
import {
  ArrowRightIcon,
  CalendarIcon,
  HandsIcon,
  DiscussionIcon,
  NotesIcon,
} from "@/components/icons";

const STEPS = [
  {
    number: "01",
    title: "Schedule an appointment",
    Icon: CalendarIcon,
  },
  {
    number: "02",
    title: "Connect with your provider",
    Icon: HandsIcon,
  },
  {
    number: "03",
    title: "Discuss your comprehensive assessment",
    Icon: DiscussionIcon,
  },
  {
    number: "04",
    title: "Receive your individualized treatment plan",
    Icon: NotesIcon,
  },
];

const GetStarted = () => {
  return (
    <section className="relative bg-black py-20 sm:py-24">
      <div className="bg-gradient-gold absolute inset-x-0 top-0 h-[3px]" />
      <div className="bg-gradient-gold absolute inset-x-0 bottom-0 h-[3px]" />

      <Container>
        <h2 className="text-gradient-gold text-center font-serif text-3xl font-semibold sm:text-4xl">
          Four Simple Steps To
          <span className="block">Get Started</span>
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:flex md:flex-row md:items-start md:justify-between md:gap-4">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="flex w-full items-start md:flex-1"
            >
              <StepCard
                number={step.number}
                title={step.title}
                icon={<step.Icon className="h-full w-full" />}
              />
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="mt-6 hidden h-px flex-1 border-t border-dashed border-white/80 md:block"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button href="/schedule-a-call">
            Schedule a Call
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
