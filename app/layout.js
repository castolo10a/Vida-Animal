import { Fredoka, Nunito } from 'next/font/google';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://vida-animal.netlify.app'),
  title: 'Vida Animal · Centro Médico Veterinario en La Dorada, Caldas',
  description:
    'Centro médico veterinario en La Dorada, Caldas. Consulta general, vacunación, cirugía, hospitalización, laboratorio, profilaxis dental, baño y tienda para tu mascota. Agenda por WhatsApp.',
  keywords: ['Veterinaria', 'veterinaria La Dorada', 'mascotas', 'perros', 'gatos', 'vacunación', 'cirugía', 'Caldas'],
  openGraph: {
    title: 'Vida Animal · Centro Médico Veterinario',
    description: 'Amor infinito por quienes nos enseñan a amar sin palabras. La Dorada, Caldas.',
    locale: 'es_CO',
    type: 'website',
  },
  themeColor: '#e00d86',
};

const display = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" href="/favicon.jpg" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
