import { MessageSquareText, ArrowRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Banner with Deep Navy and Dot Matrix Background */}
        <div className="relative bg-[#00143d] rounded-3xl px-8 sm:px-12 py-10 overflow-hidden dot-pattern shadow-2xl border border-white/5">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-turquesa/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Speech Icon Box + Text */}
            <div className="flex items-center gap-6">
              {/* Rounded Dark Glass Icon Box */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center shrink-0 shadow-inner">
                <MessageSquareText className="w-7 h-7 sm:w-8 sm:h-8 text-turquesa stroke-[1.75]" />
              </div>

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-black tracking-tight leading-snug">
                  ¿Tenés una idea en mente?
                </h3>
                <p className="text-turquesa text-sm sm:text-base font-semibold mt-0.5">
                  Hablemos y llevémosla al siguiente nivel.
                </p>
              </div>
            </div>

            {/* Right: Solid Turquesa Button */}
            <a
              href="mailto:hola@ampersand.dev"
              className="inline-flex items-center gap-2.5 bg-turquesa hover:bg-turquesa-dark text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-turquesa/30 hover:-translate-y-0.5 shrink-0"
            >
              <span>Contáctanos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
