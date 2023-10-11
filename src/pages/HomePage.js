import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GymList from "../components/GymList";
import Perks from "../components/Perks";
import Footer from "../components/Footer";



const HomePage = () => {
  const [gyms, setGyms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then((response) => response.json())
      .then((data) => {
        setGyms(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);



  return (
    <div>
      <Header />
      <h1>Gym Website</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && <GymList gyms={gyms} />}
      {/* <Perks/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
