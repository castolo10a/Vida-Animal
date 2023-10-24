import NavBar from "../components/header/navBar";
import Footer from "@/components/footer/footer";
import Wpp from "@/components/wpp/wpp";
import { Nunito } from 'next/font/google';
import "./globals.css"

export const metadata = {
  title: 'Vida Animal - Centro Médico Veterinario en La Dorada, Caldas',
  description: 'Bienvenido a Vida Animal, tu centro médico veterinario en La Dorada, Caldas. Cuidamos de la salud y bienestar de tus mascotas con servicios de vacunación, baños, consultas, exámenes y productos de alta calidad. ¡Tu confianza es nuestra pasión!',
  keywords: ['Veterinaria', 'mascotas', 'perros', 'gatos', 'salud animal', 'Caldas', 'La Dorada'],
}

const nunito = Nunito({
  weight: ['300', '400', '500'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
      </head>
      <body className={nunito.className}>
        <NavBar />
        {children}
        <Wpp />
        <Footer />
      </body>
    </html>
  )
}
