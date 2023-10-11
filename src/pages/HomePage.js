import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GymList from "../components/GymList";
import Perks from "../components/Perks";
import Footer from "../components/Footer";
import axios from "axios";

const HomePage = () => {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    // Make an Axios request to the API and update the gyms state with the data.
    axios.get('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then((response) => {
        console.log(response.data.data);
        setGyms(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <GymList gyms={gyms} />
      {/* <Perks/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
