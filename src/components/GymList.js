import React from "react";
import "./GymList.css";
import DistanceFilter from "./DistanceFilter";
import FeaturesFilter from "./FeaturesFilter";
import LocationFilter from "./LocationFilter";
import CategoryFilter from "./CategoryFilter";

const GymList = () => {
  return (
    <div className="gym_list">
      <div className="filters">
        <LocationFilter />
        <CategoryFilter />
        <FeaturesFilter />
        <DistanceFilter />
      </div>
      {/* <div className="gym-items">
        {gyms?.map((gym) => (
          <div key={gym.id} className="gym_item">
            <img
              src={
                gym.image ||
                "https://i.pinimg.com/564x/d5/a8/05/d5a805871f757157192ab1020081fd05.jpg"
              }
              alt="Gym Pictures"
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
      </div> */}
    </div>
  );
};

export default GymList;
