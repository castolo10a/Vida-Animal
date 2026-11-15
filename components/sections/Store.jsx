import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import productos from '@/assets/productos.jpg';
import productos2 from '@/assets/productos2.jpg';
import { whatsapp } from '@/app/data';

const items = [
  'Alimentos para perros y gatos de todas las etapas',
  'Snacks, arena y accesorios',
  'Camas, guacales y juguetes',
  'Medicamentos formulados por la doctora',
];

export default function Store() {
  return (
    <section id="tienda" className="section overflow-hidden bg-ink text-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow !bg-white/10 !text-lime">Tienda</span>
          <h2 className="section-title !text-white">Su comida y sus antojos también los encuentras aquí</h2>
          <p className="section-lead !text-white/75">
            Aprovecha la visita y llévate lo que necesita. Si no sabes cuál alimento elegir, te asesoramos según su
            edad, tamaño y salud.
          </p>
          <ul className="mt-8 space-y-3">
            {items.map((t) => (
              <li key={t} className="flex items-start gap-3 text-white/90">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime text-ink">
                  <FiCheck size={14} aria-hidden />
                </span>
                {t}
              </li>
            ))}
          </ul>
          <a
            href={whatsapp('Hola, quisiera preguntar por un producto de la tienda')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-10 bg-lime text-ink hover:-translate-y-0.5 hover:bg-white"
          >
            <FaWhatsapp size={20} aria-hidden /> Pregunta por un producto
          </a>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-3 overflow-hidden rounded-[2rem]">
            <Image
              src={productos2}
              alt="Estantería de alimentos para perros en la tienda de Vida Animal"
              placeholder="blur"
              sizes="(min-width: 1024px) 320px, 55vw"
              className="aspect-[3/4] h-full w-full object-cover"
            />
          </div>
          <div className="col-span-2 mt-12 overflow-hidden rounded-[2rem]">
            <Image
              src={productos}
              alt="Alimentos y accesorios para gatos en la tienda"
              placeholder="blur"
              sizes="(min-width: 1024px) 220px, 35vw"
              className="aspect-[3/5] h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
