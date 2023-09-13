import Link  from 'next/link';

const ButtonPath = ({ path, textButton }) => {

  return (
    <Link href={path}>
        <button className="animate-fade animate-duration-[5000ms] animate-delay-[1000ms] bg-pink hover:bg-opacity-75 border rounded-lg text-gray-200 px-4 py-2 mt-4 text-base md:text-xl">
                {textButton}
        </button>
    </Link>
  );
};

export default ButtonPath;