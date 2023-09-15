import Link from "next/link";

const CardService = ({title, description, path, icon}) => {
  return (
      <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl">
        <a href={path}>
        {icon}

        <h2 className="mt-4 text-xl font-bold text-gray-500">{title}</h2>

        <p className="mt-1 text-sm text-gray-700">
            {description}
        </p>
        </a>
      </div>
  );
};

export default CardService;