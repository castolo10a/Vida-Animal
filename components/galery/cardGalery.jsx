const CardGalery = ({ image, title }) => {
  return (
    <div className="bg-white rounded-xl p-2 shadow-xl hover:shadow-2xl">
      <div className="relative h-96">
        <div className={`bg-cover bg-center rounded-xl h-3/4 ${image}`}></div>
        <div className="flex flex-col justify-center content-center mt-2 pt-8 px-6 bottom-0 left-0 w-full text-center">
          <h2 className="text-lg md:text-xl text-gray-700 font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default CardGalery;
