import React from "react";
import MainBanner from "./components/MainBannerComponent/MainBanner";
import MarqueeComponent from "./components/MarqueeComponent/Marquee";
import ContactUs from "./components/ContactUsComponent/ContactUs";
import Accordion from "./components/AccordionComponent/Accordion";
import Carousel from "./components/CarouselComponent/Carousel";
import Studio from "./components/StudioComponent/Studio";
import ContactUsReverse from "./components/ContactUsReverseComponent/ContactUsReverse";
import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header";


const App = () => {
  return <div className="main">
      {/* HEADER */}
      <Header />
      
      {/* BANNER */}
      <MainBanner />
    
      {/* MARQUEE */}
      <MarqueeComponent />
      
      {/* CONTACT US */}
      <ContactUs />

      {/* ACCORDION */}
      <Accordion />
      
      {/* CAROUSEL */}
      <Carousel />

      {/* STUDIO DETAIL */}
      <Studio />

      {/* COMPONENT REVERSE */}
      <ContactUsReverse />
      
      {/* FOOTER */}
      <Footer />
  </div>
};
    

export default App;