import React from "react";
import Hero from "../../components/Home/Hero";
import ShopByCategory from "../../components/Home/ShopByCategory";
import Gallery from "../../components/Home/Gallery";
import Service from "../../components/Home/Service";
import Brands from "../../components/Home/Brands";

const Home = () => {
  return (
    <div>
      <Hero />
      <ShopByCategory/>
      <Gallery/>
      <Service/>
      <Brands/>
    </div>
  );
};

export default Home;
