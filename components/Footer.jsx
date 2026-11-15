import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/logo_sin_fondo.png';
import { ADDRESS, hours, INSTAGRAM, MAPS_URL, navLinks, PHONE, PHONE_DISPLAY, whatsapp } from '@/app/data';

export default function Footer() {
  return (
    <footer className="bg-cream pt-16">
      <div className="container-page grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Image src={logo} alt="Vida Animal · Centro Médico Veterinario" className="h-14 w-auto" />
          <p className="mt-4 text-ink-soft">🐾 Amor infinito por quienes nos enseñan a amar sin palabras 💚</p>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Vida Animal"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-magenta shadow-soft transition hover:bg-magenta hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de Vida Animal"
              className="grid h-11 w-11 place-items-center rounded-full bg-white text-magenta shadow-soft transition hover:bg-magenta hover:text-white"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-lg font-semibold">Navegación</h2>
          <ul className="mt-4 space-y-2.5 text-ink-soft">
            {[...navLinks, { href: '#contacto', label: 'Contacto' }].map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-magenta">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg font-semibold">Horarios</h2>
          <ul className="mt-4 space-y-2.5 text-ink-soft">
            {hours.map((h) => (
              <li key={h.days}>
                <span className="font-bold text-ink">{h.days}:</span> {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-ink-soft">
            <li>
              <a href={`tel:+${PHONE}`} className="hover:text-magenta">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-magenta">
                {ADDRESS}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-ink-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Vida Animal · Centro Médico Veterinario</p>
          <a href="https://castillocoder.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-magenta">
            Creado por CastilloCoder
          </a>
        </div>
      </div>
    </footer>
  );
}
