import Image from "next/image";
import ButtonAction from "../buttons/buttonAction";

export default function CardInfo({ image, title, description, index, id, path, textButton }) {
  return (
    <section id={id} className="md:flex-row flex-col py-4 md:py-8">
      <div
        className={`p-4 flex flex-col md:flex-row md:justify-center md:items-center ${
          index % 2 === 0 ? "bg-wallpaper" : "md:flex-row-reverse"
        }`}
      >
        <div className="relative w-full md:w-3/4 flex flex-col justify-center items-center">
          <div className="px-12">
            <h2 className="text-2xl font-bold md:text-4xl text-gray-500 pt-2 md:pt-4">
              {title}
            </h2>

            <p className="mt-4 text-gray-700 pb-2 md:pb-4 text-base md:text-xl">
              {description}
            </p>
          </div>
          <div className="py-4">
            {path && textButton ?
            <ButtonAction path={path} textButton={textButton}/> : ''}
          </div>
        </div>

        <div className="py-4 w-full md:w-1/4">
          <Image
            alt={title}
            src={image}
            className="hover:animate-shake hover:animate-infinite hover:animate-duration-[2000ms] w-96 object-cover sm:h-[calc(100%-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%-_4rem)] md:rounded-ss-[60px]"
          />
        </div>
      </div>
    </section>
  );
}
