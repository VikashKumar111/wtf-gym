// DistanceFilter.js
import React from 'react';

const DistanceFilter = ({ distance, onDistanceChange }) => {
  return (
    <div>
      <label>Distance (km): {distance} km</label>
      <input type="range" min="0" max="100" step="1" value={distance} onChange={onDistanceChange} />
    </div>
  );
};

export default DistanceFilter;
