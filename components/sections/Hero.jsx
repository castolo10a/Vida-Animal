import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowDown, FiClock, FiHeart, FiMapPin } from 'react-icons/fi';
import { doctor, whatsapp } from '@/app/data';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream pt-28 md:pt-32">
      {/* Fondos suaves con los colores del logo */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-cyan-soft blur-2xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-16 h-96 w-96 rounded-full bg-magenta-soft blur-2xl" />

      <div className="container-page relative grid items-center gap-14 pb-20 md:pb-28 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="eyebrow">
            <FiMapPin aria-hidden /> <span className="hidden sm:inline">Centro Médico Veterinario ·</span> La Dorada, Caldas
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Amor infinito por quienes nos enseñan a{' '}
            <span className="relative whitespace-nowrap text-magenta">
              amar sin palabras
              <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
                <path d="M2 9C80 2 220 2 298 7" stroke="#b9d700" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
          <p className="section-lead mt-6 max-w-xl">
            Consulta, vacunas, cirugía, hospitalización y todo lo que tu perro o gato necesita, en un lugar donde
            lo atendemos como parte de nuestra familia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaWhatsapp size={20} aria-hidden /> Agendar por WhatsApp
            </a>
            <a href="#servicios" className="btn-secondary">
              Ver servicios <FiArrowDown aria-hidden />
            </a>
          </div>

          <ul className="mt-10 grid max-w-lg grid-cols-1 gap-3 text-sm font-bold text-ink-soft sm:grid-cols-2">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-lime-soft text-lime-dark">
                <FiClock size={18} aria-hidden />
              </span>
              Urgencias y hospitalización 24 h
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cyan-soft text-cyan-dark">
                <FiHeart size={18} aria-hidden />
              </span>
              Atención con calma y cariño
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Formas inclinadas como la "V" del logo */}
          <div aria-hidden className="slant absolute -left-4 top-6 h-[85%] w-1/2 bg-magenta" />
          <div aria-hidden className="slant absolute -right-2 -top-4 h-[85%] w-1/2 bg-lime" />

          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-soft">
            <Image
              src={doctor.photo}
              alt="La Dra. Zully Pérez sosteniendo a una paciente en el consultorio de Vida Animal"
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, 90vw"
              className="aspect-[4/5] w-full object-cover object-[60%_20%]"
            />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft sm:left-auto sm:right-4 sm:max-w-sm lg:-left-8 lg:right-auto">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-magenta text-xl text-white" aria-hidden>
              🐾
            </span>
            <div>
              <p className="font-display text-lg font-semibold leading-tight">{doctor.name.replace(' González', '')}</p>
              <p className="text-sm text-ink-muted">{doctor.role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
