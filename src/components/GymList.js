import React, { useState } from "react";
import DistanceFilter from "./DistanceFilter";
import FeaturesFilter from "./FeaturesFilter";
import "./GymList.css";
// import GymItem from './GymItem';

const GymList = ({ gyms }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGyms, setFilteredGyms] = useState(gyms);

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    // Filter the data based on the search term
    const filtered = gyms.filter((gym) =>
      gym.city.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredGyms(filtered);
  };

  return (
    <div className="gym_list">
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <FeaturesFilter />
        <DistanceFilter />
      </div>
      <div>
        {filteredGyms.map((gym) => (
          <li>{gym.gym_name}</li>
        ))}
      </div>
    </div>
  );
};

export default GymList;
