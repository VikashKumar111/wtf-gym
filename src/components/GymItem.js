import React from 'react';

function GymItem({ gym }) {

  
  return (
    <div className="item">
      <h2>{gym.gym_name}</h2>
      <img src={ gym.gallery.images} alt='' />
      <p>
        Location: {gym.address1}, {gym.address2}, {gym.city}, {gym.state},
        {gym.pin}, {gym.country}
      </p>
      <p>Owner: {gym.name}</p>
      <p>Rating: {gym.rating}</p>
      <p>Description: {gym.description}</p>
      
      
      
    </div>
  );
}

export default GymItem;
