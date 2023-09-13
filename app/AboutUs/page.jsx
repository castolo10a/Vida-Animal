import Galery from "../../components/galery/galery";
import infoSlide from "./infoSlide";
import { Amita } from 'next/font/google'

const amita = Amita({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})

export default function AboutUs(){
    return (
        <div>
        <div className={`${amita.className} bg-wallpaper flex flex-col justify-center items-center text-center mx-auto px-6 py-40 md:px-4`}>
            <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 text-xl md:text-2xl z-10">Nuestra Empresa</h2>
            <h2 className="animate-fade-left animate-duration-[5000ms] text-gray-500 text-4xl md:text-6xl px-8 md:pb-8">
            Somos Vida Animal
            </h2>
        </div>
        <div className="flex flex-col justify-center items-center mx-auto px-6 pt-40 pb-20 md:px-4">
            <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 font-bold text-2xl md:text-4xl text-center z-10 py-8">Vida Animal: <br /> Un Viaje de Compromiso y Cuidado</h2>
            <p className="animate-fade-left animate-duration-[5000ms] mt-8 text-gray-700 py-4 md:py-8 text-base md:text-xl px-8">
            Imagina un lugar donde el amor por las mascotas se convierte en una atención veterinaria excepcional. El Centro Veterinario Vida Animal nació de la visión de la médica veterinaria Zully Alexandra Pérez, quien transformó la forma en que cuidamos a nuestras queridas mascotas en La Dorada, Caldas. Comenzando con consultas y vacunaciones a domicilio, nuestra historia se ha convertido en un compromiso con la excelencia, ofreciendo hospitalización 24 horas y atención de urgencias las 24 horas del día. En nuestro centro, las mascotas son más que pacientes; son parte de nuestra familia. Bienvenidos a un lugar donde el cuidado y el amor se unen para garantizar el bienestar de tus compañeros peludos.
            </p>
        </div>

        <div className="bg-wallpaper flex flex-col justify-center items-center mx-auto px-6 md:px-4 py-4 md:py-8">
            <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 font-bold text-2xl md:text-4xl text-center z-10 pt-4 md:pt-8">Misión</h2>
            <p className="animate-fade-left animate-duration-[5000ms] mt-8 text-gray-700 text-base md:text-xl px-8">
            Ofrecer servicios veterinarios altamente confiables con un enfoque dedicado en la integridad y el respeto tanto hacia los propietarios como hacia nuestros pacientes peludos. Priorizamos la comunicación abierta y efectiva mientras brindamos una atención médica preventiva y especializada de alta calidad. Estamos comprometidos en garantizar el bienestar y la salud de las mascotas, promoviendo una relación de confianza y cuidado a largo plazo con nuestros clientes.
            </p>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto px-6 md:px-4 py-4 md:py-8">
            <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 font-bold text-2xl md:text-4xl text-center z-10 pt-4 md:pt-8">Visión</h2>
            <p className="animate-fade-left animate-duration-[5000ms] mt-8 text-gray-700 text-base md:text-xl px-8">
            Consolidarnos como una empresa altamente reconocida en el sector de La Dorada, Caldas, y sus alrededores para el año 2028. Nos esforzamos por contar con un equipo médico altamente capacitado y aprovechar la última tecnología veterinaria para ofrecer un servicio excepcionalmente especializado. Aspiramos a ser líderes en la atención médica y el bienestar de las mascotas, estableciendo un estándar de excelencia en la industria y contribuyendo al cuidado y la salud de las mascotas en nuestra comunidad en el plazo establecido.
            </p>
        </div>
        
        <div className="mx-auto max-w-5xl text-center py-8 md:py-12">
            <div className="py-4 md:py-8">
                <h2 className="text-2xl font-bold md:text-4xl text-gray-500 pt-4 md:pt-8">Mirando a Través de Nuestro Lente: <br /> La Galería de Vida Animal</h2>
                <p className="mt-8 text-gray-700 text-base md:text-xl">
                Conoce nuestras instalaciones, nuestros pacientes y nuestro equipo de trabajo.
                </p>
            </div>
        </div>
        <div className="md:pb-4">
            {infoSlide ? 
                <Galery infoSlide={infoSlide}/> : 'Loading...'
            }
        </div>

        </div>
    )
}