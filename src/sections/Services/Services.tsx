import { SectionHeading } from '../../components/ui/SectionHeading';
import { services } from '../../data/site';
import type { Service } from '../../types';

function ServiceItem({ service }: { service: Service }) {
  return (
    <article className="border-t border-slate-200 pt-7">
      <h3 className="text-2xl font-bold tracking-tight text-navy">{service.title}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-600">{service.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-turquesa-light px-3 py-1 text-xs font-medium text-turquesa-dark">
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Tres cosas, bien hechas."
          description="No hacemos apps para la tienda ni infraestructura para empresas grandes. Hacemos lo que un negocio necesita para vender y ordenarse, esté donde esté."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
