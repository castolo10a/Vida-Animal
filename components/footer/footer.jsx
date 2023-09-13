import huesito from '../../assets/huesito.png'
import logo from '../../assets/logo.jpg'
import Link from 'next/link'
import Image from 'next/image'
import {FaInstagram, FaWhatsapp} from 'react-icons/fa'

export default function Footer(){
    return (
        <div>
        <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="border-t-2 border-gray-500 flex-grow"></div>
            <div>
            <Image src={huesito} alt="Logo" className="w-16 h-auto" />
            </div>
            <div className="border-t-2 border-gray-500 flex-grow"></div>
        </div>
        <footer className="lg:grid lg:grid-cols-5 py-12">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
            <Image
            src={logo}
            alt="logo"
            className="absolute inset-0 h-full w-full object-cover"
            />
            </div>

            <div className="px-4 py-4 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                <p>
                    <span className="text-xs uppercase tracking-wide text-gray-500">
                    Comunicate con Nosotros
                    </span>

                    <a
                        href="tel:+573124507294"
                        rel="noreferrer"
                        target="_blank"
                        className="block text-2xl text-gray-900 hover:opacity-75 sm:text-3xl"
                    >
                        +57 3124507294
                    </a>
                </p>

                <ul className="mt-8 space-y-1 text-sm text-gray-700">
                    <li>Lunes a Sábado: 8:30 am - 8:00 pm</li>
                    <li>Domingo y Festivos: 9:00 am - 5:00 pm</li>
                </ul>

                <ul className="mt-8 flex gap-6">
                    <li>
                    <a
                        href="http://wa.me/573124507294#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                    >
                        <FaWhatsapp size={30} />
                    </a>
                    </li>

                    <li>
                    <a
                        href="https://www.instagram.com/vidaanimal.vet_/?hl=es"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                    >
                        <FaInstagram size={30} />
                    </a>
                    </li>
                </ul>
                </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <p className=" text-gray-900">Menú</p>

                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <Link href="/" className="text-gray-700 transition hover:opacity-75">
                                Inicio
                                </Link>
                            </li>

                            <li>
                                <Link href="/AboutUs" className="text-gray-700 transition hover:opacity-75">
                                ¿Quiénes somos?
                                </Link>
                            </li>

                            <li>
                                <Link href="/Services" className="text-gray-700 transition hover:opacity-75">
                                Servicios
                                </Link>
                            </li>

                            <li>
                                <Link href="/Contact" className="text-gray-700 transition hover:opacity-75">
                                Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>

                        <div>
                            <p className=" text-gray-900">Visitanos</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                    <a 
                                        href="https://www.google.com/maps/place/Vida+Animal/@5.4503764,-74.6660511,17z/data=!3m1!4b1!4m6!3m5!1s0x8e40dfe344812909:0xa5ca1aef1b0f65f6!8m2!3d5.4503764!4d-74.6634762!16s%2Fg%2F11l1n9c_sn?entry=ttu"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-gray-700 transition hover:opacity-75 cursor-pointer"
                                    >
                                        Calle 11a # 4 - 23<br/>
                                        Barrio Centro<br/>
                                        La Dorada - Caldas
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            <div className="mt-12 border-t-2 border-gray-500 pt-12">
            <div className="flex flex-col items-center">
                <p className='mt-8 text-xs text-gray-500 sm:mt-0 pb-8'>
                Vida Animal - Centro Médico Veterinario <br/> © {new Date().getFullYear()} Todos los derechos reservados
                </p>

                <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                    <a 
                        href="https://fullstack-colombia.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='transition hover:opacity-75'
                    >
                    Creado por DaniDev FullStack
                    </a>
                </p>
            </div>
            </div>
            </div>
        </footer>
        </div>
    )
}