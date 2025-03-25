"userClient"
import Header from"./Components/Layouts/Header/page"
import Carousel from"./Aditional/Carousel/page"
import CategoryList from "./Aditional/Categorylist/page"
import Footer from "./Components/Layouts/Footer/page"
import ProductPage from "./Components/Buyer/clientComponents/Products/page" 
import Sidebar from "./Components/Layouts/Sidebar/page"

export default function Home() {
  return (
    
    <div>
     <div className="flex-1 p-4">
      <Sidebar/>
      </div> 
      <Header/>
      <Carousel/>
      <ProductPage/>
      <CategoryList/>
      <Footer/>
    </div>
  );
}