import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { easeOut } from '../../lib/motion';

const navLinks = [
  { name: 'Inicio', href: '#', id: 'inicio' },
  { name: 'Servicios', href: '#servicios', id: 'servicios' },
  { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { name: 'Sobre nosotros', href: '#nosotros', id: 'nosotros' },
  { name: 'Contacto', href: '#contacto', id: 'contacto' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ['contacto', 'nosotros', 'proyectos', 'proceso', 'servicios'];
      let current = 'inicio';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: easeOut }}
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500 ${isScrolled ? 'lg:px-6' : ''}`}
    >
      {/* Barra: a lo ancho arriba de todo; en escritorio se vuelve una píldora flotante al scrollear */}
      <div
        className={`relative mx-auto w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isScrolled
            ? 'bg-[#000e2e]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl lg:mt-3 lg:max-w-6xl lg:rounded-full lg:border lg:py-2'
            : 'bg-[#000e2e] py-4.5 border-b border-white/5 lg:mt-0 lg:max-w-full'
        }`}
      >
        {/* Texture Layer: Ambient Glow + Dot Matrix Pattern aligned with the Hero Graphic */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none overflow-hidden select-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#026BF3]/08 to-[#02C2B5]/05" />
          <div className="absolute inset-0 dot-pattern opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: Official Brand Icon + Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img
                src="/AMPERSAND-SINBG.png"
                alt="Ampersand Logo"
                className="w-full h-full object-contain scale-140 group-hover:scale-150 transition-transform"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider leading-none text-white transition-colors">
                AMPERSAND
              </span>
              <span className="text-[9.5px] font-bold tracking-widest text-turquesa uppercase mt-1">
                DESARROLLO DE SOFTWARE A MEDIDA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — Right aligned, next to the CTA */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 ml-auto mr-8 xl:mr-10">
            {navLinks
              .filter((link) => link.id !== 'contacto')
              .map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors relative py-1.5 ${
                    activeSection === link.id ? 'text-white font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Subrayado activo: se desliza de un link al otro */}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-turquesa rounded-full"
                    />
                  )}
                </a>
              ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contacto"
            className="hidden lg:inline-flex items-center gap-2 shrink-0 bg-turquesa hover:bg-turquesa-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-turquesa/25 group"
          >
            <span>Contactanos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="relative z-10 lg:hidden overflow-hidden"
            >
              <div className="border-t border-white/10 mt-4 px-5 pt-3 pb-6 space-y-4">
                <nav className="flex flex-col space-y-1 pt-2">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, ease: easeOut, delay: 0.05 + i * 0.05 }}
                      className={`text-base font-medium px-3.5 py-3 rounded-xl transition-colors ${
                        activeSection === link.id
                          ? 'text-turquesa bg-white/10 font-semibold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: easeOut, delay: 0.3 }}
                  className="pt-2 border-t border-white/10"
                >
                  <a
                    href="#contacto"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-turquesa hover:bg-turquesa-dark text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-md"
                  >
                    <span>Hablemos de tu proyecto</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
