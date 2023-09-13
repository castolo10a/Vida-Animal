import Image from 'next/image';
import wpp from '@/assets/wpp.png';

const Wpp = () => {
  return (
    <div className='fixed bottom-0 right-0 z-50 md:p-12 p-4 hover:animate-jump hover:animate-infinite hover:animate-duration-[3000ms]'>
        <a
            href="http://wa.me/573124507294#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Click to contact me by Whatsapp"
        >
            <Image src={wpp} alt="wppImg" className='w-12 h-12 md:w-16 md:h-16' />
        </a>
    </div>
  );
};

export default Wpp;
