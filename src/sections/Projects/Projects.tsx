import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../../components/ui/SectionHeading';
import { projects } from '../../data/site';
import type { Project } from '../../types';

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-turquesa/40 hover:shadow-[0_28px_56px_-28px_rgba(0,23,72,0.3)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? 'lg:order-2 lg:flex-1' : ''}`}>
        <img
          src={project.image}
          alt={project.imageAlt}
          width={1440}
          height={900}
          loading="lazy"
          className={`w-full object-cover object-top ${featured ? 'aspect-[16/10] lg:h-full' : 'aspect-[16/10]'}`}
        />
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? 'lg:max-w-md lg:p-10' : ''}`}>
        <span className="text-sm font-medium text-turquesa-dark">{project.category}</span>
        <h3 className={`mt-3 font-bold tracking-tight text-navy ${featured ? 'text-3xl' : 'text-2xl'}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{project.description}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600">
                {tag}
              </li>
            ))}
          </ul>
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-navy transition-[background-color,border-color,color] duration-300 group-hover:border-turquesa group-hover:bg-turquesa group-hover:text-white">
            <ArrowUpRight className="h-5 w-5" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="proyectos" className="bg-[#f5f7fa] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="No te contamos lo que hacemos. Te lo mostramos."
          description="Somos un estudio nuevo, así que en vez de logos de clientes te mostramos lo que construimos: un producto en producción y dos demos con datos de ejemplo. Son links reales, tocalos."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <ProjectCard project={featured} featured />
          </div>
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
