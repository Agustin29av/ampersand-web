import { Plus } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { faqs } from '../../data/site';

/** Las dudas que frenan a alguien antes de escribir, respondidas sin vueltas. */
export function FAQ() {
  return (
    <section id="preguntas" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Lo que nos preguntan antes de escribir."
          description="Si tu duda no está acá, preguntala por WhatsApp. Contestamos nosotros, no un bot."
        />
        <div className="mt-12 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-5 w-5 shrink-0 text-turquesa-dark transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
