


import Navbar from "../../components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import FlashSales from "./sections/FlashSales/FlashSales";
import Arrivals from "./sections/Arrivals/Arrivals";
import Services from "./sections/Services/Services";
import Browse from "./sections/Browse/Browse";
 import Products from "./sections/Products/Products";
import Categories from "./sections/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* All homepage sections */}
      <main>
        <Hero />
         <FlashSales/> 
         <Browse/> 
         <Products/> 
        <Categories />  
        <Arrivals />  
        <Services />  
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
