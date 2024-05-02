import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OrderPopup from "./components/OrderPopup/OrderPopup.jsx";
import Services from "./components/Services/Services.jsx";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Services handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Footer />
      <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
