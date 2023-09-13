import CardGalery from "./cardGalery";

const Galery = ({ infoSlide }) => {
  return (
    <div className="p-8 md:py-4 grid grid-cols-1 gap-8 md:grid-cols-4">
          {infoSlide.map((image, index) => (
            <CardGalery key={index} image={image.image} title={image.title} />
          ))}
    </div>
  );
};

export default Galery;
