import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Patients from '@/components/sections/Patients';
import Store from '@/components/sections/Store';
import Visit from '@/components/sections/Visit';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Patients />
        <Store />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
