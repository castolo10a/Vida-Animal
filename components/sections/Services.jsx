import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { services, whatsapp } from '@/app/data';

const accents = {
  magenta: 'bg-magenta',
  lime: 'bg-lime',
  cyan: 'bg-cyan',
};

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="section-title">Todo el cuidado que tu mascota necesita, en un solo lugar</h2>
          <p className="section-lead">
            Desde la primera vacuna hasta una cirugía. Escríbenos y te ayudamos a agendar el servicio que necesitas.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.id}
              id={s.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt=""
                  placeholder="blur"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                  className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${s.imagePosition || ''}`}
                />
                <span aria-hidden className={`absolute left-5 top-0 h-10 w-3 rounded-b-full ${accents[s.accent]}`} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-ink-soft">{s.description}</p>
                <a
                  href={whatsapp(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 self-start font-bold text-magenta hover:text-magenta-dark"
                >
                  <FaWhatsapp aria-hidden /> Agendar {s.title.toLowerCase()}
                  <span aria-hidden className="transition group-hover:translate-x-1">→</span>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
