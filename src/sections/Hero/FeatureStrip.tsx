import { motion } from 'framer-motion';

// Editá esta lista con el stack real del equipo.
const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Next.js',
  'React Native',
  'Flutter',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Google Cloud',
  'Docker',
  'Python',
];

/** Franja navy al pie del hero con la cinta de tecnologías en movimiento. */
export const FeatureStrip: React.FC = () => {
  // La lista se duplica para que la cinta haga un loop continuo sin cortes.
  const loop = [...technologies, ...technologies];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="w-full bg-[#000e2e] border-t border-white/10 relative z-20 mt-auto"
    >
      <div className="tech-marquee group mx-auto max-w-7xl overflow-hidden py-5 sm:py-6">
        <ul className="tech-marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <li
              key={`${tech}-${i}`}
              aria-hidden={i >= technologies.length}
              className="flex items-center gap-8 pr-8 text-sm font-medium text-slate-400 whitespace-nowrap transition-colors hover:text-white"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-turquesa/60" />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
