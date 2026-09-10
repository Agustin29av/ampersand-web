import { ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#00143d] relative overflow-hidden dot-pattern">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turquesa/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Horizontal Layout: text left, button right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Left: Headline + Subtitle */}
          <div className="text-center sm:text-left">
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-snug mb-2">
              ¿Tenés una idea en mente?
            </h3>
            <p className="text-turquesa text-base sm:text-lg font-semibold">
              Hablemos y llevémosla al siguiente nivel.
            </p>
          </div>

          {/* Right: CTA Button */}
          <a
            href="mailto:hola@ampersand.dev"
            className="inline-flex items-center gap-2.5 bg-turquesa hover:bg-turquesa-dark text-white font-bold text-sm sm:text-base px-10 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-turquesa/30 hover:-translate-y-0.5 shrink-0"
          >
            <span>Contáctanos</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </a>

        </div>
      </div>
    </section>
  );
};
