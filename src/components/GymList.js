import React from "react";
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
                    <li>{gym.gym_name} , {gym.address1}, {gym.address2}, {gym.city}, {gym.country}, {gym.description},{gym.distance},{gym.cover_image},{gym.gallery.images}</li>
                ))}
            </div>
        </div>
    );
};
export default GymList;