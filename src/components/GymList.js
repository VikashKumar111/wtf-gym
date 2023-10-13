
import React, { useState } from 'react';
// import GymItem from './GymItem';

const GymList = ({ gyms }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredGyms, setFilteredGyms] = useState([gyms]);
  
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
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
      {gyms.map((gym) =>(
        <li>{gym.gym_name}</li>
      ))}
       {filteredGyms.map((filteredGym) =>(
        <li>{filteredGym.gym_name}</li>
      ))}
      
        
      
    </div>
  );
};

export default GymList;

