import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './sections/Hero/Hero';
import { Services } from './sections/Services/Services';
import { Process } from './sections/Process/Process';
import { Projects } from './sections/Projects/Projects';
import { About } from './sections/About/About';
import { Contact } from './sections/Contact/Contact';
import { FAQ } from './sections/FAQ/FAQ';
import { StickyWhatsApp } from './components/ui/StickyWhatsApp';
import { MotionConfig } from 'framer-motion';
import { MapPin, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './components/ui/InstagramIcon';
import { contact, whatsappUrl } from './data/site';

export function App() {
  const currentYear = new Date().getFullYear();

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-turquesa selection:text-white">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <StickyWhatsApp />

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
                    Concepción del Uruguay
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                Páginas y sistemas para negocios de cualquier lugar. Hechos por gente que atiende el teléfono.
              </p>

              {/* Redes */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-turquesa/40 px-3.5 text-xs font-medium text-turquesa transition-colors hover:border-turquesa hover:bg-turquesa/10"
                >
                  <InstagramIcon className="h-3.5 w-3.5" /> @{contact.instagram}
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
                  <MessageCircle className="w-4 h-4 text-turquesa shrink-0" />
                  <a href={whatsappUrl(contact.whatsappGreeting)} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-turquesa transition-colors">WhatsApp</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <InstagramIcon className="w-4 h-4 text-turquesa shrink-0" />
                  <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-turquesa transition-colors">@{contact.instagram}</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-turquesa shrink-0" />
                  <span className="text-gray-300">{contact.location}</span>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="lg:col-span-3 lg:pl-8 flex items-center justify-start">
              <p className="text-base leading-snug text-gray-300">
                Estés donde estés, si algo de tu negocio te hace perder tiempo, escribinos. Lo miramos sin compromiso.
              </p>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-6 text-center text-xs text-gray-500">
            © {currentYear} Ampersand. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
    </MotionConfig>
  );
}

export default App;
