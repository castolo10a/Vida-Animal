'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '@/assets/logo_sin_fondo.png';
import { navLinks, whatsapp } from '@/app/data';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <a href="#inicio" onClick={close} aria-label="Vida Animal, ir al inicio" className="shrink-0">
          <Image src={logo} alt="Vida Animal · Centro Médico Veterinario" priority className="h-11 w-auto md:h-12" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-2 font-bold text-ink-soft transition hover:bg-magenta-soft hover:text-magenta-dark"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2.5 sm:inline-flex">
            <FaWhatsapp size={18} aria-hidden />
            Agendar cita
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full text-ink hover:bg-magenta-soft lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={`lg:hidden ${open ? 'block' : 'hidden'} h-[calc(100dvh-5rem)] overflow-y-auto border-t border-ink/5 bg-white`}
      >
        <ul className="container-page flex flex-col gap-1 py-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={close}
                className="block rounded-2xl px-4 py-4 font-display text-2xl font-semibold text-ink hover:bg-magenta-soft hover:text-magenta-dark"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={close}
              className="block rounded-2xl px-4 py-4 font-display text-2xl font-semibold text-ink hover:bg-magenta-soft hover:text-magenta-dark"
            >
              Contacto
            </a>
          </li>
          <li className="mt-4 px-1">
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
              <FaWhatsapp size={20} aria-hidden />
              Agendar cita por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
