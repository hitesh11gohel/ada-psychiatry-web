import {
  Container,
  SectionHeading,
  Carousel,
  TestimonialCard,
} from "@/components/ui";

const TESTIMONIAL_QUOTE =
  "“ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”";

const TESTIMONIALS = Array.from({ length: 8 }, () => ({
  quote: TESTIMONIAL_QUOTE,
  name: "Carl Rowan",
  company: "Aglets Inc",
}));

const Testimonials = () => {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <Container>
        <SectionHeading>What Our Patients Are Saying</SectionHeading>
      </Container>
      <div className="mt-14">
        <Carousel>
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              avatarSrc="/images/avatar.png"
              {...testimonial}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
