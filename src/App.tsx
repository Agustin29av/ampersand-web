import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { Process } from './sections/Process/Process';
import { Projects } from './sections/Projects/Projects';
import { About } from './sections/About/About';
import { CtaBanner } from './sections/CtaBanner/CtaBanner';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-turquesa selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <CtaBanner />
      </main>

      {/* Footer */}
      <footer className="bg-[#001133] text-gray-400 pt-16 pb-10 border-t border-[#02C2B5]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 pb-12 border-b border-[#02C2B5]/20">

            {/* Column 1: Logo + Description + Social Icons (lg:col-span-4) */}
            <div className="lg:col-span-4 lg:pr-8 lg:border-r border-[#02C2B5]/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center shrink-0">
                  <img
                    src="/AMPERSAND-SINBG.png"
                    alt="Ampersand Logo"
                    className="w-full h-full object-contain scale-140"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-wider text-white leading-none">
                    AMPERSAND
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-turquesa uppercase mt-1">
                    DESARROLLO DE SOFTWARE A MEDIDA
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Creamos soluciones tecnológicas a medida para impulsar tu negocio y hacerlo crecer.
              </p>

              {/* Social Icons — Circular Teal Outline */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-turquesa/40 text-turquesa hover:border-turquesa hover:bg-turquesa/10 flex items-center justify-center transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-turquesa/40 text-turquesa hover:border-turquesa hover:bg-turquesa/10 flex items-center justify-center transition-all duration-200"
                  aria-label="GitHub"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-turquesa/40 text-turquesa hover:border-turquesa hover:bg-turquesa/10 flex items-center justify-center transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navegación (lg:col-span-2) */}
            <div className="lg:col-span-2 lg:px-8 lg:border-r border-[#02C2B5]/20 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Navegación
              </h4>
              <ul className="space-y-2 text-xs font-medium">
                <li><a href="#" className="text-gray-300 hover:text-turquesa transition-colors">Inicio</a></li>
                <li><a href="#servicios" className="text-gray-300 hover:text-turquesa transition-colors">Servicios</a></li>
                <li><a href="#proyectos" className="text-gray-300 hover:text-turquesa transition-colors">Proyectos</a></li>
                <li><a href="#nosotros" className="text-gray-300 hover:text-turquesa transition-colors">Sobre nosotros</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-turquesa transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Column 3: Contacto (lg:col-span-3) */}
            <div className="lg:col-span-3 lg:px-8 lg:border-r border-[#02C2B5]/20 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Contacto
              </h4>
              <ul className="space-y-2.5 text-xs font-medium">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-turquesa shrink-0" />
                  <a href="mailto:hola@ampersand.dev" className="text-gray-300 hover:text-turquesa transition-colors">hola@ampersand.dev</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-turquesa shrink-0" />
                  <span className="text-gray-300">+54 9 11 1234 5678</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-turquesa shrink-0" />
                  <span className="text-gray-300">Argentina</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-turquesa shrink-0" />
                  <a href="https://www.ampersand.dev" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-turquesa transition-colors">www.ampersand.dev</a>
                </li>
              </ul>
            </div>

            {/* Column 4: Closing Phrase (lg:col-span-3) - Perfectly Centered */}
            <div className="lg:col-span-3 lg:pl-8 flex items-center justify-start">
              <div className="py-2">
                <h3 className="text-lg sm:text-xl font-black text-white leading-tight uppercase tracking-wider">
                  TU IDEA,
                  <br />
                  NUESTRO CÓDIGO,
                  <br />
                  <span className="text-turquesa">GRANDES SOLUCIONES.</span>
                </h3>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 text-center text-xs text-gray-500">
            © {currentYear} Ampersand. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
