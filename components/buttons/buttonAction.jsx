const ButtonAction = ({ path, textButton }) => {

  return (
    <a
        className="bg-pink hover:bg-opacity-75 border rounded-lg text-gray-200 p-4 mt-4 text-base md:text-xl"
        href={path}
        target="_blank"
        rel="noopener noreferrer"
    >
        {textButton}
    </a>
  );
};

export default ButtonAction;