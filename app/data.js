import cirugia from '@/assets/hospitalizacion_y_cirugia.jpg';
import consulta from '@/assets/consulta_general.jpg';
import bano from '@/assets/baño.jpg';
import bano2 from '@/assets/baño2.jpg';
import muestras from '@/assets/toma_de_muestras.jpg';
import profilaxis from '@/assets/profilaxis_dental.jpg';
import vacunas from '@/assets/plan_vacunacion.jpg';
import fluidoterapia from '@/assets/fluidoterapia.jpg';
import perfil from '@/assets/perfil.jpg';
import productos from '@/assets/productos.jpg';
import productos2 from '@/assets/productos2.jpg';
import fachada from '@/assets/entrada_almacen.jpg';

export const PHONE = '573124507294';
export const PHONE_DISPLAY = '312 450 7294';
export const INSTAGRAM = 'https://www.instagram.com/vida_animal_ladorada/';
export const ADDRESS = 'Carrera 5 # 16-73, Barrio Centro, La Dorada, Caldas';
export const MAPS_URL =
  'https://www.google.com/maps/place/Vida+Animal+-+Centro+M%C3%A9dico+Veterinario/@5.4546567,-74.6658299,17z';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=Vida+Animal+Centro+M%C3%A9dico+Veterinario,+Carrera+5+16-73,+La+Dorada,+Caldas&z=17&output=embed';

export const whatsapp = (text = 'Hola Vida Animal, quisiera agendar una cita para mi mascota 🐾') =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#pacientes', label: 'Pacientes' },
  { href: '#tienda', label: 'Tienda' },
  { href: '#visitanos', label: 'Visítanos' },
];

export const hours = [
  { days: 'Lunes a sábado', time: '8:30 a.m. – 8:00 p.m.' },
  { days: 'Domingos y festivos', time: '9:00 a.m. – 5:00 p.m.' },
  { days: 'Urgencias', time: 'Llámanos 24 horas', highlight: true },
];

export const services = [
  {
    id: 'consulta',
    title: 'Consulta general',
    description:
      'Revisamos a tu mascota con calma, te escuchamos y te explicamos cada paso del diagnóstico y tratamiento.',
    image: consulta,
    accent: 'magenta',
    message: 'Hola, me gustaría agendar una consulta general para mi mascota',
  },
  {
    id: 'vacunacion',
    title: 'Plan de vacunación',
    description:
      'Esquemas de vacunas y desparasitación a la medida de su edad, con carné al día para que nada se te pase.',
    image: vacunas,
    accent: 'lime',
    message: 'Hola, quisiera información sobre el plan de vacunación para mi mascota',
  },
  {
    id: 'cirugia',
    title: 'Cirugía y hospitalización',
    description:
      'Procedimientos quirúrgicos, esterilizaciones y hospitalización con seguimiento cercano, también en urgencias.',
    image: cirugia,
    accent: 'cyan',
    message: 'Hola, necesito información sobre cirugías / hospitalización',
  },
  {
    id: 'laboratorio',
    title: 'Toma de muestras',
    description:
      'Pruebas rápidas y toma de muestras para laboratorio. Diagnósticos confiables para decidir a tiempo.',
    image: muestras,
    accent: 'magenta',
    message: 'Hola, quisiera agendar una toma de muestras para mi mascota',
  },
  {
    id: 'dental',
    title: 'Profilaxis dental',
    description:
      'Limpieza dental profesional para prevenir el sarro, el mal aliento y las infecciones en la boca.',
    image: profilaxis,
    imagePosition: 'object-bottom',
    accent: 'lime',
    message: 'Hola, quisiera programar una profilaxis dental para mi mascota',
  },
  {
    id: 'bano',
    title: 'Baño higiénico',
    description:
      'Baño, corte de uñas y limpieza de oídos con productos adecuados. Sale limpio, cómodo y feliz.',
    image: bano,
    accent: 'cyan',
    message: 'Hola, me gustaría programar un baño para mi mascota',
  },
];

export const gallery = [
  { image: bano2, alt: 'Bulldog francés con moño naranja después de su baño' },
  { image: fluidoterapia, alt: 'Pinscher recibiendo fluidoterapia en brazos de su familia' },
  { image: vacunas, alt: 'Pomerania feliz con su carné de vacunas al día' },
  { image: bano, alt: 'Perro sonriente con la pañoleta de Vida Animal' },
  { image: consulta, alt: 'Revisión dental durante una consulta' },
];

export const store = {
  images: [productos2, productos, fachada],
};

export const doctor = {
  name: 'Dra. Zully Alexandra Pérez González',
  role: 'Médica Veterinaria Zootecnista',
  school: 'Universidad Cooperativa de Colombia',
  photo: perfil,
};
