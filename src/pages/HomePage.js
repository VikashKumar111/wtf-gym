import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductList from "../components/ProductList";
import Perks from "../components/Perks";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProductList />
      <Perks/>
      <Footer />
    </div>
  );
};

export default HomePage;
