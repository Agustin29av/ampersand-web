import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../../components/ui/Reveal';
import { Accent, SectionHeading } from '../../components/ui/SectionHeading';
import { projects } from '../../data/site';
import type { Project } from '../../types';
import { AnalyticsVisual, LogisticsVisual, ManagementVisual } from './ProjectVisuals';

const visuals: Record<Project['id'], ReactNode> = {
  gestion: <ManagementVisual />,
  logistica: <LogisticsVisual />,
  dashboard: <AnalyticsVisual />,
};

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <a
      href="#contacto"
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-turquesa/40 hover:shadow-[0_28px_56px_-28px_rgba(0,23,72,0.3)] ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden bg-gradient-to-br from-[#eef3f9] to-[#f8fafc] ${
          featured ? 'h-72 sm:h-96 lg:order-2 lg:h-auto lg:min-h-[26rem] lg:flex-1' : 'h-64 sm:h-72'
        }`}
      >
        <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-[1.03]">
          {visuals[project.id]}
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? 'lg:max-w-md lg:p-10' : ''}`}>
        <span className="w-fit rounded-full bg-turquesa/10 px-3 py-1 text-xs font-semibold text-turquesa-dark">
          {project.category}
        </span>
        <h3 className={`mt-4 font-bold tracking-tight text-navy ${featured ? 'text-3xl' : 'text-2xl'}`}>
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
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 text-navy transition-all duration-500 group-hover:rotate-45 group-hover:border-turquesa group-hover:bg-turquesa group-hover:text-white">
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
          eyebrow="Proyectos destacados"
          title={
            <>
              Soluciones reales, <Accent>hechas a medida.</Accent>
            </>
          }
          description="Una selección de productos que diseñamos y desarrollamos. ¿Necesitás algo parecido? Hagamos que tu proyecto sea el próximo."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <ProjectCard project={featured} featured />
          </Reveal>
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
