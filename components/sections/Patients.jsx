import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';
import { gallery, INSTAGRAM } from '@/app/data';

export default function Patients() {
  return (
    <section id="pacientes" className="section">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">♡ Pacientes ♡</span>
            <h2 className="section-title">Los que nos enseñan a amar sin palabras</h2>
            <p className="section-lead">Algunos de los peludos que nos han visitado. Su bienestar es nuestra mejor carta de presentación.</p>
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-secondary shrink-0">
            <FaInstagram size={20} aria-hidden /> @vida_animal_ladorada
          </a>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((g, i) => (
            <li
              key={i}
              className={`group relative overflow-hidden rounded-3xl ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
            >
              <Image
                src={g.image}
                alt={g.alt}
                placeholder="blur"
                sizes="(min-width: 768px) 33vw, 50vw"
                className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${
                  i === 0 ? 'aspect-square md:aspect-auto' : 'aspect-square'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
