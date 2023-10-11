import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import GymList from "../components/GymList";
import Perks from "../components/Perks";
import Footer from "../components/Footer";
import axios from "axios";
import FilterBar from "../components/FilterBar";

const HomePage = () => {
  const [gyms, setGyms] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState(0);

  useEffect(() => {
    // Make an Axios request to the API and update the gyms state with the data.
    axios.get('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      .then((response) => {
        // console.log(response.data);
        setGyms(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter gyms based on current filter settings
  const filteredGyms = gyms.filter((gym) => {
    // Location filter (case-insensitive)
    const locationMatch = gym.address1.toLowerCase().includes(locationFilter.toLowerCase());

    // Features filter
    const featuresMatch =
      selectedFeatures.length === 0 ||
      selectedFeatures.every((feature) => gym.description.toLowerCase().includes(feature.toLowerCase()));

    // Distance filter
    const distanceMatch = parseFloat(gym.distance) <= distanceFilter;

    return locationMatch && featuresMatch && distanceMatch;
  });

  return (
    <div>
      <Header />
      <FilterBar locationFilter={locationFilter}
        selectedFeatures={selectedFeatures}
        distanceFilter={distanceFilter}
        onLocationChange={setLocationFilter}
        onFeaturesChange={setSelectedFeatures}
        onDistanceChange={setDistanceFilter} />
      <GymList gyms={gyms} locationFilter={locationFilter} selectedFeatures={selectedFeatures} distanceFilter={distanceFilter} />
      
      {/* <Perks/> */}
      <Footer />
    </div>
  );
};

export default HomePage;
