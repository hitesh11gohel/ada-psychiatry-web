import {
  Container,
  SectionHeading,
  TreatmentFeatureRow,
} from "@/components/ui";

const TREATMENT_FEATURES = [
  {
    title: "Mental Health",
    description:
      "Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.",
    imageAlt: "A patient reflecting during a quiet moment at home",
    reverse: false,
  },
  {
    title: "Addiction And Recovery",
    description:
      "Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.",
    imageAlt: "A patient discussing their recovery journey",
    reverse: true,
  },
  {
    title: "Supervised Medical Weight Loss",
    description:
      "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
    imageAlt: "A patient in the middle of a fitness routine",
    reverse: false,
  },
];

const TreatmentFocus = () => {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <Container>
        <SectionHeading>Our Treatment Focus</SectionHeading>
        <div className="mt-16 flex flex-col gap-16 sm:gap-20">
          {TREATMENT_FEATURES.map((feature) => (
            <TreatmentFeatureRow
              key={feature.title}
              title={feature.title}
              description={feature.description}
              imageSrc="/images/avatar.png"
              imageAlt={feature.imageAlt}
              reverse={feature.reverse}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TreatmentFocus;
