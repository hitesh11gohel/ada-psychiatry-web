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
      <div className="bg-gradient-gold absolute inset-x-0 top-0 h-[6px]" />
      <div className="bg-gradient-gold absolute inset-x-0 bottom-0 h-[6px]" />

      <Container>
        <h2 className="text-gradient-gold font-abhaya text-center text-3xl font-bold sm:text-4xl lg:text-[40px] lg:leading-[60px]">
          Four Simple Steps To
          <span className="block">Get Started</span>
        </h2>

        <div className="mt-16 flex flex-col items-center min-[1025px]:flex-row min-[1025px]:items-start min-[1025px]:justify-between min-[1025px]:gap-4">
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="flex w-full flex-col items-center min-[1025px]:flex-1 min-[1025px]:flex-row min-[1025px]:items-start"
            >
              <StepCard
                number={step.number}
                title={step.title}
                icon={<step.Icon className="h-full w-full" />}
              />
              {index < STEPS.length - 1 && (
                <>
                  <div
                    aria-hidden="true"
                    className="my-4 h-16 w-px border-l border-dashed border-white/80 min-[1025px]:hidden"
                  />
                  <div
                    aria-hidden="true"
                    className="mt-6 hidden h-px flex-1 border-t border-dashed border-white/80 min-[1025px]:block"
                  />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button
            href="/schedule-a-call"
            className="lg:h-[60px]! lg:w-[299px]!"
          >
            Schedule a Call
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default GetStarted;
