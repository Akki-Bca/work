"userClient"
import Header from "@/app/Components/Layouts/Header/page";
import Carousel from "@/app/Aditional/Carousel/page";
import CategoryList from "@/app/Aditional/Categorylist/page";
import Footer from "@/app/Components/Layouts/Footer/page";
import ProductPage from "../clientComponents/Products/page";
// import Profile from "../clientComponents/Profile/page";

export default function Home() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <ProductPage/>
      <CategoryList/>
      <Footer/>
    </div>
  );
}