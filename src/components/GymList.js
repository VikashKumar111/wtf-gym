
import React from 'react';
import GymItem from './GymItem';

const GymList = ({ gyms }) => {
  return (
    <div>
      {gyms.map((gym) => (
        <GymItem key={gym.user_id} gym={gym} />
      ))}
    </div>
  );
};

export default GymList;

