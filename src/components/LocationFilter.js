// LocationFilter.js
import React from 'react';

const LocationFilter = ({ onLocationChange }) => {
  return (
    <div>
      <input type="text" placeholder="Search Location" onChange={onLocationChange} />
    </div>
  );
};

export default LocationFilter;
