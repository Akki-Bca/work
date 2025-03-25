import CategoryCard from "../Categorycards/page";


const categories = [
  { title: "Rings", imageSrc: "/assets/category/r1.jpg" },
  { title: "Pendants", imageSrc: "/assets/category/p1.jpg" },
  { title: "Bangles", imageSrc: "/assets/category/b1.jpg" },
  { title: "Bracelete", imageSrc: "/assets/category/B.jpg" },
  { title: "Neckless", imageSrc: "/assets/category/n1.jpg" },
  { title: "Earing", imageSrc: "/assets/category/E.jpg" },
];

const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-6">
      {categories.map((category, index) => (
        <CategoryCard key={index} title={category.title} imageSrc={category.imageSrc} />
      ))}
    </div>
  );
};

export default CategoryList;
