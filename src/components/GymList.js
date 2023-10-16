import React from "react";
import "./GymList.css";
// import DistanceFilter from "./DistanceFilter";
// import FeaturesFilter from "./FeaturesFilter";
// import LocationFilter from "./LocationFilter";
// import CategoryFilter from "./CategoryFilter";

// import GymItem from './GymItem';
export const GymList = ({ gyms }) => {
  return (
    <div className="gym_list">
      <div>
        {/* <LocationFilter/> */}
        {/* <CategoryFilter products={gyms}/> */}
        {/* <FeaturesFilter /> */}
        {/* <DistanceFilter /> */}
      </div>
      <div>
        {gyms.map((gym) => (
          <div key={gym.id} className="gym_item">
            <img
              src="https://i.pinimg.com/564x/c1/da/58/c1da586510db186fa1af573219c224cd.jpg"
              alt="image"
              className="gym_image"
            />
            <div className="gym_info">
              <h2>{gym.gym_name}</h2>
              <p>
                {gym.address1}, {gym.address2}
              </p>
              <p>
                {gym.city}, {gym.country}
              </p>
              <p>{gym.description}</p>
              <p>Distance: {gym.distance} miles</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GymList;
