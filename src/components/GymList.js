import React from 'react';
import GymItem from './GymItem';

function GymList({ gyms, locationFilter, selectedFeatures, distanceFilter }) {
  console.log(gyms)
  return (
    <div className="gym-list">
      
         {gyms.map(({ gym }) => (
        
          < GymItem key = { gym.user_id } gym = { gym } />
        ))}
      
      
        
    
    </div>
    
    
  );
}

export default GymList;
