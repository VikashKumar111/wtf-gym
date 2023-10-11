
import React, { useState } from 'react';
import GymItem from './GymItem';

const GymList = ({ gyms }) => {
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredGyms, setFilteredGyms] = useState([]);
  const filtered = gyms.filter((gym) => {
      // Apply your filters here
      let locationMatch = gym.city.toLowerCase().includes(locationFilter.toLowerCase());
      

    return locationMatch;
    setLocationFilter(locationMatch);
    setFilteredGyms(filtered);
    });

    
  console.log(filteredGyms)
  return (
    <div>
      {filteredGyms.map((filteredGym) => (
        <GymItem key={filteredGym.user_id} gym={filteredGym} />
      ))}
    </div>
  );
};

export default GymList;

