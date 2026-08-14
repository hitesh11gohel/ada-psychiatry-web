import {
  Container,
  SectionHeading,
  Accordion,
  AccordionItem,
  Button,
} from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

const FAQS = [
  {
    question: "Is Ada psychiatry confidential?",
    answer:
      "We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.",
  },
  {
    question: "What is the best way to schedule a appointment?",
    answer:
      "The easiest way is to book online through our patient portal, where you can see real-time availability and pick the provider and time that works best for you. You're also welcome to call our office directly and our team will help match you with the next available provider.",
  },
  {
    question: "Do you prescribe controlled substance medication?",
    answer:
      "Yes, when it's clinically appropriate. Our providers follow strict prescribing guidelines and closely monitor patients on controlled substances, including regular check-ins, to make sure medication remains safe and effective as part of your overall treatment plan.",
  },
  {
    question: "How long does the initial appointment take?",
    answer:
      "Initial evaluation appointments typically run 45 to 60 minutes so your provider has time to fully understand your history, symptoms, and goals. Follow-up appointments are usually shorter, ranging from 15 to 30 minutes depending on your treatment plan.",
  },
];

const Faq = () => {
  return (
    <section className="bg-bg py-[20px] sm:pt-0 sm:pb-24">
      <Container>
        <SectionHeading className="font-abhaya! [font-feature-settings:'liga'_off,'clig'_off] font-bold! text-black! sm:text-[40px]! sm:leading-[56px]!">
          Frequently asked questions
        </SectionHeading>
        <div className="mt-[20px] max-w-5xl sm:mt-12">
          <Accordion className="divide-[#C18C2C]/20 px-[20px] sm:px-0">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                title={
                  <span className="font-abhaya text-ink text-xl leading-normal font-bold tracking-normal sm:text-[24px]">
                    {faq.question}
                  </span>
                }
                defaultOpen={index === 0}
              >
                <span className="font-sans text-sm leading-[134.4%] font-normal tracking-normal text-black sm:text-[24px]">
                  {faq.answer}
                </span>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="mt-12 flex justify-center">
          <Button
            href="/faqs"
            variant="soft"
            size="lg"
            className="w-full! sm:w-[335px]!"
          >
            See all FAQ
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
