import React from 'react';

function GymItem({ gym }) {

  console.log(gym)
  return (
    <div className="gym-item">
      <h2>{gym.gym_name}</h2>
      <p>
        Location: {gym.address1}, {gym.address2}, {gym.city}, {gym.state},
        {gym.pin}, {gym.country}
      </p>
      <p>Description: {gym.description}</p>
      Add more gym details as needed
      
      
    </div>
  );
}

export default GymItem;
