import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { contact, whatsappUrl } from '../../data/site';

/** Botón fijo en el celular: aparece al dejar la portada y se esconde en la sección de contacto. */
export function StickyWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    const contacto = document.getElementById('contacto');
    if (!hero || !contacto) return;
    let pastHero = false;
    let atContact = false;
    const update = () => setShow(pastHero && !atContact);
    const ioHero = new IntersectionObserver(([e]) => {
      pastHero = !e.isIntersecting;
      update();
    });
    const ioContact = new IntersectionObserver(([e]) => {
      atContact = e.isIntersecting;
      update();
    });
    ioHero.observe(hero);
    ioContact.observe(contacto);
    return () => {
      ioHero.disconnect();
      ioContact.disconnect();
    };
  }, []);

  return (
    <a
      href={whatsappUrl(contact.whatsappGreeting)}
      target="_blank"
      rel="noopener noreferrer"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-40 flex min-h-13 items-center justify-center gap-2.5 rounded-full bg-navy text-base font-semibold text-white shadow-[0_18px_40px_-12px_rgba(0,23,72,0.55)] transition-[translate,opacity] duration-300 lg:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-24 opacity-0'
      }`}
    >
      <MessageCircle className="h-5 w-5 text-turquesa" />
      Escribinos por WhatsApp
    </a>
  );
}
