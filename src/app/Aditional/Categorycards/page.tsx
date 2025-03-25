import Image from "next/image";

const CategoryCard = ({ title, imageSrc }: { title: string; imageSrc: string }) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
        <Image src={imageSrc} alt={title} width={128} height={128} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-center text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
