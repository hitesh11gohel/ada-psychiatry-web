import Image from "next/image";

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
  avatarSrc: string;
  className?: string;
};

const TestimonialCard = ({
  quote,
  name,
  company,
  avatarSrc,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div
      className={`bg-cream border-gold/20 mx-[18px] flex h-full max-w-[718px] flex-col overflow-hidden rounded-3xl shadow-lg sm:h-[457px] ${className}`}
    >
      <div className="flex-1 overflow-hidden p-8 sm:p-10">
        <span className="font-serif text-9xl leading-none">&ldquo;</span>
        <p className="text-ink -mt-10 w-full font-sans text-lg sm:text-xl md:w-3/4 lg:w-5/6">
          {quote}
        </p>
      </div>
      <div className="bg-gold flex items-center justify-center gap-4 px-8 py-5 sm:px-10">
        <Image
          src={avatarSrc}
          alt={name}
          width={60}
          height={60}
          className="h-[60px] w-[60px] rounded-full border-2 border-white object-cover"
        />
        <div>
          <p className="font-sans text-lg font-semibold text-white">{name}</p>
          <p className="font-sans text-sm text-white/80">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
