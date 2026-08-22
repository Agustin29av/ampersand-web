import { ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../../types';

export const Projects: React.FC = () => {
  const projects: ProjectItem[] = [
    {
      id: 'gestion',
      title: 'Plataforma de gestión',
      category: 'Plataforma Web',
      description: 'Sistema integral para gestión de usuarios, ventas y reportes.',
      imageBg: 'from-navy via-navy-light to-primary/30'
    },
    {
      id: 'logistica',
      title: 'App de logística',
      category: 'Aplicación Móvil',
      description: 'Seguimiento en tiempo real, notificaciones y geolocalización.',
      imageBg: 'from-turquesa-dark via-navy to-navy-dark'
    },
    {
      id: 'dashboard',
      title: 'Dashboard Analítico',
      category: 'Dashboard Web',
      description: 'Visualización de datos en tiempo real para la toma de decisiones.',
      imageBg: 'from-navy-dark via-primary/40 to-navy'
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight section-underline">
            PROYECTOS DESTACADOS
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image / Preview Area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.imageBg} overflow-hidden`}>
                {/* Decorative blurs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-turquesa/15 rounded-full blur-2xl" />

                {/* Category pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-turquesa text-white text-[11px] font-semibold tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Project title on overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Link with arrow micro-interaction */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-turquesa hover:text-turquesa-dark transition-colors group/link"
                >
                  <span>Ver proyecto</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-gray-300/90 text-navy text-sm font-semibold hover:border-navy hover:shadow-xs transition-all duration-200 bg-white"
          >
            <span>Ver todos los proyectos</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
