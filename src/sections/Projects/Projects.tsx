import { ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types';

export const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 'gestion',
      title: 'Plataforma de gestión',
      category: 'Plataforma Web',
      description: 'Sistema integral para gestión de usuarios, ventas y reportes en tiempo real.',
      imageBg: 'from-navy via-navy-light to-primary/40'
    },
    {
      id: 'logistica',
      title: 'App de logística',
      category: 'Aplicación Móvil',
      description: 'Seguimiento en tiempo real, notificaciones push y geolocalización avanzada.',
      imageBg: 'from-turquesa-dark via-navy to-navy-dark'
    },
    {
      id: 'dashboard',
      title: 'Dashboard Analítico',
      category: 'Dashboard Web',
      description: 'Visualización de datos en tiempo real para la toma de decisiones estratégicas.',
      imageBg: 'from-navy-dark via-primary/50 to-navy'
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-[#001133] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-turquesa/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight section-underline">
            PROYECTOS DESTACADOS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/[0.03] backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.08] group hover:border-turquesa/40 hover:shadow-[0_16px_40px_rgba(2,194,181,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Gradient Preview Area */}
              <div className={`relative h-52 bg-gradient-to-br ${project.imageBg} overflow-hidden border-b border-white/[0.06]`}>
                {/* Decorative glowing blurs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-turquesa/20 rounded-full blur-2xl group-hover:scale-125 group-hover:bg-turquesa/30 transition-all duration-500" />
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-white/5 rounded-full blur-xl" />

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-turquesa/90 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide shadow-lg shadow-turquesa/20">
                    {project.category}
                  </span>
                </div>

                {/* Project title on overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Link with arrow micro-interaction */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-turquesa hover:text-white transition-colors group/link"
                >
                  <span>Ver proyecto</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:border-turquesa hover:bg-turquesa/10 hover:shadow-lg hover:shadow-turquesa/10 transition-all duration-200"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
