import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo_sin_fondo.png';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-cream px-5 text-center">
      <div className="max-w-md">
        <Image src={logo} alt="Vida Animal" className="mx-auto h-14 w-auto" />
        <p className="mt-10 font-display text-7xl font-bold text-magenta">404</p>
        <h1 className="mt-2 text-3xl font-semibold">Esta página se escapó 🐾</h1>
        <p className="mt-3 text-ink-soft">No encontramos lo que buscabas, pero seguro te podemos ayudar desde el inicio.</p>
        <Link href="/" className="btn-primary mt-8">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
