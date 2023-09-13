import Image from "next/image"
import Link from "next/link"
import imageNot from '@/assets/notFound.jpeg'

export default function Services(){
    return (
        <div className="pt-40 pb-20 flex flex-col bg-white">
            <Image
                src={imageNot}
                alt="not-found"
                className="w-screen"
            />

            <div className="flex items-center justify-center flex-1">
                <div className="max-w-xl px-4 py-8 mx-auto text-center">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    No se pudo encontrar esa página
                </h1>

                <p className="mt-4 text-gray-500 py-4">
                    Intente buscar de nuevo o regrese a la página de inicio
                </p>

                <Link
                    href="/"
                    className="inline-block bg-pink hover:bg-opacity-75 border rounded-lg text-gray-200 px-4 py-2 mt-4 text-base md:text-xl"
                >
                    Ir al Inicio
                </Link>
                </div>
            </div>
        </div>
    )
}