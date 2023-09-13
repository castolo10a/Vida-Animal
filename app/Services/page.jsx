import CardInfo from "@/components/cardInfo/cardInfo";
import { infoServicesCards } from "./infoServicesCards";
import { Amita } from 'next/font/google'

const amita = Amita({
    weight: ['400', '700'],
    style: ['normal'],
    subsets: ['latin']
})

export default function Services(){
    return (
        <div>
            <div className={`${amita.className} bg-wallpaper flex flex-col justify-center items-center text-center mx-auto px-6 py-40 md:px-4`}>
                <h2 className="animate-fade-right animate-duration-[5000ms] text-gray-500 text-xl md:text-2xl z-10">Conoce todos nuestros</h2>
                <h2 className="animate-fade-left animate-duration-[5000ms] text-gray-500 text-4xl md:text-6xl px-8 md:pb-8">
                Servicios Vida Animal
                </h2>
            </div>
            <div>
                {infoServicesCards ?
                infoServicesCards.map((info, index) => {
                    return (
                        <CardInfo
                        key={index}
                        image={info.image}
                        title={info.title}
                        description={info.description}
                        index={index + 1}
                        id={info.id}
                        path={info.path}
                        textButton={info.textButton}
                        />
                    );
                }) :
                'Loading...'}
            </div>
        </div>
    )
}