import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiArrowUpRight, FiPhone } from 'react-icons/fi';
import { INSTAGRAM, PHONE, PHONE_DISPLAY, whatsapp } from '@/app/data';

export default function Contact() {
  return (
    <section id="contacto" className="section relative overflow-hidden bg-magenta">
      <div aria-hidden className="slant pointer-events-none absolute -right-20 -top-10 h-[120%] w-64 bg-lime/90" />
      <div aria-hidden className="slant pointer-events-none absolute -right-56 top-10 h-[110%] w-48 bg-cyan/80" />

      <div className="container-page relative">
        <div className="max-w-2xl text-white">
          <span className="eyebrow !bg-white !text-magenta-dark">Contacto</span>
          <h2 className="section-title !text-white">¿Tu mascota necesita atención?</h2>
          <p className="section-lead !text-white/90">
            Escríbenos por WhatsApp para agendar o resolver dudas. Si es una urgencia, llámanos directamente.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:max-w-4xl">
          <a
            href={whatsapp()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-[2rem] bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 sm:p-8"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#25d366] text-white">
              <FaWhatsapp size={30} aria-hidden />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">Escríbenos por WhatsApp</h3>
            <p className="mt-2 flex-1 text-ink-soft">La forma más rápida de agendar una cita o preguntar por un servicio.</p>
            <span className="btn mt-6 w-full bg-[#25d366] text-white group-hover:bg-[#1ebe5a]">
              <FaWhatsapp size={20} aria-hidden /> Abrir WhatsApp
            </span>
          </a>

          <a
            href={`tel:+${PHONE}`}
            className="group flex flex-col rounded-[2rem] bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 sm:p-8"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-magenta text-white">
              <FiPhone size={26} aria-hidden />
            </span>
            <h3 className="mt-6 text-2xl font-semibold">Llámanos</h3>
            <p className="mt-2 flex-1 text-ink-soft">Para urgencias o si prefieres hablar con nosotros directamente.</p>
            <span className="btn-primary mt-6 w-full">
              <FiPhone aria-hidden /> {PHONE_DISPLAY}
            </span>
          </a>
        </div>

        <a
          href={INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 font-bold text-white hover:underline"
        >
          <FaInstagram size={20} aria-hidden /> También nos encuentras en @vida_animal_ladorada
          <FiArrowUpRight aria-hidden />
        </a>
      </div>
    </section>
  );
}
