import { FaWhatsapp } from 'react-icons/fa';
import { whatsapp } from '@/app/data';

export default function WhatsAppButton() {
  return (
    <a
      href={whatsapp()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_25px_-8px_rgba(37,211,102,0.7)] transition hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      <FaWhatsapp size={30} />
    </a>
  );
}
