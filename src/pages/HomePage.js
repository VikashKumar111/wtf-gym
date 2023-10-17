import React from "react";
import Header from "../components/Header";
import GymList from "../components/GymList";
// import Perks from "../components/Perks";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <h1>Gym Website</h1>
      <GymList />
      {/* <Perks/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
