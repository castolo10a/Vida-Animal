import NavBar from "../components/header/navBar";
import Footer from "@/components/footer/footer";
import Wpp from "@/components/wpp/wpp";
import { Nunito } from 'next/font/google';
import "./globals.css"

export const metadata = {
  title: 'Vida Animal - Centro Médico Veterinario en la Dorada, Caldas',
  description: 'En Vida Animal, cuidamos de tus mascotas. Ofrecemos vacunación, baños, consultas, exámenes, y productos de alta calidad. Tu confianza, nuestra pasión.',
  keywords: ['Veterianaria', 'mascotas', 'perros', 'gatos', 'caninos', 'felinos', 'tienda para mascotas'],
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
