import ButtonPath from "@/components/buttons/buttonpath";
import CardService from "@/components/cardService/cardService";
import CardInfo from "@/components/cardInfo/cardInfo";
import { FaInstagram } from "react-icons/fa";
import { infoServices } from "./infoServices";
import { Amita } from 'next/font/google'
import home from '@/assets/principal2.png';

const amita = Amita({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})

export default function Home(){
    return(
        <div>

            <div className='bg-wallpaper flex flex-col justify-center text-center items-center mx-auto px-6 py-40 md:px-4'>
                <div className="pb-40">
                    <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 text-4xl md:text-6xl z-10">Centro Médico Veterinario</h2>
                    <h2 className="animate-fade-left animate-duration-[5000ms] text-gray-500 text-xl md:text-2xl px-8 md:pb-30">
                    Donde la salud y la felicidad de tus mascotas son nuestra prioridad
                    </h2>
                </div>
                <ButtonPath path='/Services' textButton='Ver Servicios' />
            </div>
                

            <div className="mx-auto px-6 py-4 md:py-12 md:px-4">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl font-bold md:text-4xl text-gray-500 py-4 md:py-8">Cuidado Completo para Tus Mascotas</h2>
                    <p className="mt-8 text-gray-700 py-4 md:py-8 text-base md:text-xl">
                    Ofrecemos una amplia gama de servicios para mantener a tus peludos amigos felices y saludables, desde baños y vacunas hasta cirugías y emergencias. ¡Tu veterinaria de confianza!
                    </p>
                </div>
                <div className="py-8 md:py-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {infoServices.map((infoService, key) => {
                    return <CardService 
                        key={key}
                        title={infoService.title}
                        description={infoService.description}
                        path={infoService.path}
                        icon={infoService.icon}
                    />
                })}
                </div>
            </div>

            <div>
                <CardInfo 
                    image={home}
                    id='#cardHome'
                    title='El Cariño y la Profesionalidad que Tu Mascota Merece'
                    description='En Vida Animal, en La Dorada, Caldas, estamos impulsados por un amor profundo hacia los animales. Nuestra misión es asegurarnos de que tus adoradas mascotas reciban la atención más apasionada y comprometida posible. 
                    En Vida Animal, no solo ofrecemos atención veterinaria de alta calidad, sino que también brindamos un ambiente donde cada mascota se siente parte de nuestra familia. Descubre la diferencia en Vida Animal, donde el cariño y el cuidado son nuestra razón de ser.'
                    index={4}
                />
            </div>

            <div className="mx-auto px-6 py-4 md:py-8 md:px-4">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl font-bold md:text-4xl text-gray-500 py-2 md:py-4">Cuidando a Tus Mascotas con Amor y Profesionalismo</h2>
                    <p className="mt-8 text-gray-700 py-2 md:py-4 text-base md:text-xl">
                    En Vida Animal, nuestro centro medico veterinario es más que un lugar de trabajo, es un lugar donde el amor por los animales cobra vida. Zully Alexandra Perez, nuestra carismática propietaria, es una Médica Veterinaria y Zootecnista apasionada por el bienestar de tus adoradas mascotas. Su dedicación y conocimiento hacen de Vida Animal el lugar perfecto para el cuidado de tus peludos amigos. ¡Únete a nuestra familia en Vida Animal y descubre el cariño y cuidado que tu mascota merece!
                    </p>
                </div>
                <div className="flex flex-col items-center py-4 md:py-8">
                    <div className="relative w-64 h-64 pb-4">
                        <div className="bg-perfil bg-cover rounded-full w-full h-full cursor-pointer group">
                            <a  
                                href="https://www.instagram.com/zully.perez31/?hl=es"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <div className="hover:bg-gray-500 border border-solid rounded-full opacity-0 group-hover:opacity-75 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="text-gray-200">
                                        <FaInstagram size={30} className="text-center p-1" />
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <h2 className="text-gray-700">Zully Alexandra Pérez González</h2>
                    <h2 className="text-gray-700">Médico Veterinaria Zootecnista</h2>
                    <h2 className="text-gray-700">Universidad Cooperativa de Colombia</h2>
                </div>
            </div>

        </div>
    )
}