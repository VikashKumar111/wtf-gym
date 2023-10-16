import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GymList from "../components/GymList";
import Perks from "../components/Perks";
import Footer from "../components/Footer";
import FeaturesFilter from "../components/FeaturesFilter";
import DistanceFilter from "../components/DistanceFilter";




const HomePage = () => {
  const [gyms, setGyms] = useState([]);
   const [places, setPlaces] = useState("");
  const [featureFilter, setFeatureFilter] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState(0);


  useEffect(() => {
    fetch('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then((response) => response.json())
      .then((data) => {
        setGyms(data.data);
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error.message)
      });
  }, []);
  

    useEffect(() => {
    fetch('https://devapi.wtfup.me/gym/places')
      .then((response) => response.json())
      .then((data) => {
        setPlaces(data.data);
        console.log(data.data)
      })
      .catch((error) => {
        console.log(error.message)
      });
    }, []);



  return (
    <div>
      <Header />
      <h1>Gym Website</h1>
      <GymList gyms={gyms} />
      {/* <Perks/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
