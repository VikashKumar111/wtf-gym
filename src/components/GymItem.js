import React from 'react';

function GymItem({filteredGym }) {

  console.log(filteredGym);
  return (
    <div className="item">
      <h2>{filteredGym.gym_name}</h2>
      <img src={ filteredGym.gallery.images} alt='' />
      <p>
        Location: {filteredGym.address1}, {filteredGym.address2}, {filteredGym.city}, {filteredGym.state},
        {filteredGym.pin}, {filteredGym.country}
      </p>
      <p>Owner: {filteredGym.name}</p>
      <p>Rating: {filteredGym.rating}</p>
      <p>Description: {filteredGym.description}</p>
      
      
      
    </div>
  );
}

export default GymItem;
