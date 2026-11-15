import { FiClock, FiMapPin, FiPhone } from 'react-icons/fi';
import { ADDRESS, hours, MAPS_EMBED, MAPS_URL, PHONE, PHONE_DISPLAY } from '@/app/data';

export default function Visit() {
  return (
    <section id="visitanos" className="section">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Visítanos</span>
          <h2 className="section-title">Estamos en el centro de La Dorada</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl bg-magenta-soft p-7">
              <div className="flex items-center gap-3 text-magenta-dark">
                <FiMapPin size={22} aria-hidden />
                <h3 className="text-xl font-semibold !text-magenta-dark">Dirección</h3>
              </div>
              <p className="mt-3 text-lg">{ADDRESS}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-bold text-magenta hover:underline">
                Cómo llegar →
              </a>
            </div>

            <div className="rounded-3xl bg-lime-soft p-7">
              <div className="flex items-center gap-3 text-lime-dark">
                <FiClock size={22} aria-hidden />
                <h3 className="text-xl font-semibold !text-lime-dark">Horarios</h3>
              </div>
              <dl className="mt-4 space-y-3">
                {hours.map((h) => (
                  <div key={h.days} className="flex flex-wrap justify-between gap-x-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0">
                    <dt className="font-bold">{h.days}</dt>
                    <dd className={h.highlight ? 'font-bold text-magenta' : 'text-ink-soft'}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl bg-cyan-soft p-7">
              <div className="flex items-center gap-3 text-cyan-dark">
                <FiPhone size={22} aria-hidden />
                <h3 className="text-xl font-semibold !text-cyan-dark">Teléfono</h3>
              </div>
              <a href={`tel:+${PHONE}`} className="mt-3 block font-display text-3xl font-semibold hover:text-magenta">
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-ink/5 bg-cream shadow-soft">
            <iframe
              title="Mapa de Vida Animal en La Dorada, Caldas"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
