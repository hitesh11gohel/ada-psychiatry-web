import {
  Container,
  SectionHeading,
  ServiceBadge,
  Button,
} from "@/components/ui";
import {
  ArrowRightIcon,
  HumanBrainIcon,
  HospitalIcon,
  MentalHealthIcon,
  BrainIcon,
} from "@/components/icons";

const SERVICES = [
  { label: "Psychiatric Evaluation", Icon: HumanBrainIcon },
  { label: "Medication Management", Icon: HospitalIcon },
  { label: "Supportive Psychotherapy", Icon: MentalHealthIcon },
  { label: "ADHD Screening", Icon: BrainIcon },
  { label: "MAT Treatment", Icon: HumanBrainIcon },
  { label: "Gene Sight Testing", Icon: HospitalIcon },
];

const OurServices = () => {
  return (
    <section className="bg-bg py-20 sm:pb-24">
      <Container>
        <SectionHeading>Our Services</SectionHeading>
        <div className="mt-14 grid grid-cols-3 gap-x-6 gap-y-12 lg:grid-cols-6">
          {SERVICES.map(({ label, Icon }, index) => (
            <ServiceBadge
              key={`${label}-${index}`}
              label={label}
              icon={<Icon className="h-[55px] w-[55px]" />}
            />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/services">
            View our services
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default OurServices;
