import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { FiAward, FiMessageCircle, FiShield } from 'react-icons/fi';
import fachada from '@/assets/entrada_almacen.jpg';
import { doctor } from '@/app/data';

const values = [
  {
    icon: FiMessageCircle,
    title: 'Te explicamos todo',
    text: 'Comunicación clara y honesta en cada diagnóstico y tratamiento.',
    color: 'bg-magenta-soft text-magenta-dark',
  },
  {
    icon: FiShield,
    title: 'Medicina preventiva',
    text: 'Vacunas, controles y chequeos para evitar problemas antes de que lleguen.',
    color: 'bg-lime-soft text-lime-dark',
  },
  {
    icon: FiAward,
    title: 'Respeto por cada paciente',
    text: 'Integridad con las familias y paciencia con los peludos más nerviosos.',
    color: 'bg-cyan-soft text-cyan-dark',
  },
];

export default function About() {
  return (
    <section id="nosotros" className="section bg-cream">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div aria-hidden className="slant absolute -bottom-4 -left-2 h-2/3 w-2/5 bg-cyan" />
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-white shadow-soft">
            <Image
              src={fachada}
              alt="Fachada de Vida Animal en la Carrera 5 de La Dorada, con la tienda y el consultorio"
              placeholder="blur"
              sizes="(min-width: 1024px) 540px, 90vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="eyebrow">Nosotros</span>
          <h2 className="section-title">Empezamos tocando puertas. Hoy te abrimos las nuestras.</h2>
          <p className="section-lead">
            Vida Animal nació de la vocación de la {doctor.name.split(' ').slice(0, 3).join(' ')}, que empezó atendiendo
            consultas y vacunas a domicilio en La Dorada. Ese mismo cariño es hoy un centro médico con consultorio,
            hospitalización y atención de urgencias, donde cada mascota es parte de la familia.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft">
            <Image
              src={doctor.photo}
              alt=""
              placeholder="blur"
              sizes="64px"
              className="h-16 w-16 shrink-0 rounded-full object-cover object-[60%_15%]"
            />
            <div className="flex-1">
              <p className="font-display text-lg font-semibold leading-tight">{doctor.name}</p>
              <p className="text-sm text-ink-muted">
                {doctor.role} · {doctor.school}
              </p>
            </div>
            <a
              href="https://www.instagram.com/zully.perez31/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de la Dra. Zully Pérez"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-magenta-soft text-magenta transition hover:bg-magenta hover:text-white"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <ul className="container-page mt-16 grid gap-5 md:grid-cols-3">
        {values.map(({ icon: Icon, title, text, color }) => (
          <li key={title} className="rounded-3xl bg-white p-7 shadow-soft">
            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}>
              <Icon size={22} aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
