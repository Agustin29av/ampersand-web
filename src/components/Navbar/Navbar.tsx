import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  const navLinks = [
    { name: 'Inicio', href: '#', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Sobre nosotros', href: '#nosotros', id: 'nosotros' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? 'bg-[#000e2e]/95 shadow-2xl py-3.5 backdrop-blur-md border-b border-white/10'
          : 'bg-[#000e2e] py-4.5 border-b border-white/5'
      }`}
    >
      {/* Texture Layer: Ambient Glow + Dot Matrix Pattern aligned with the Hero Graphic */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none overflow-hidden select-none">
        {/* Deeper subtle blue ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#026BF3]/08 to-[#02C2B5]/05" />
        {/* Dot pattern exactly matching the workstation background texture */}
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

        {/* Desktop Navigation Links — Centered */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[15px] font-medium transition-colors relative py-1.5 ${
                activeSection === link.id
                  ? 'text-white font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              {/* Active underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-turquesa rounded-full transition-all duration-300 ${
                  activeSection === link.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </a>
          ))}
        </nav>



        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 focus:outline-none transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000e2e] border-t border-white/10 px-5 pt-3 pb-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-medium px-3.5 py-3 rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'text-turquesa bg-white/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-turquesa hover:bg-turquesa-dark text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-md"
            >
              <span>Hablemos de tu proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
