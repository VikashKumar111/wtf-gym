import React from 'react';

function FilterBar({ locationFilter, selectedFeatures, distanceFilter, onLocationChange, onFeaturesChange, onDistanceChange }) {
  // Function to handle location filter change
  const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    onLocationChange(newLocation);
  };

  // Function to handle feature checkbox change
  const handleFeaturesChange = (event) => {
    const feature = event.target.value;
    const updatedFeatures = selectedFeatures.includes(feature)
      ? selectedFeatures.filter((item) => item !== feature)
      : [...selectedFeatures, feature];
    onFeaturesChange(updatedFeatures);
  };

  // Function to handle distance filter change
  const handleDistanceChange = (event) => {
    const newDistance = parseFloat(event.target.value);
    onDistanceChange(newDistance);
  };

  return (
    <div>
      <div>
        <label htmlFor="locationFilter">Location Search:</label>
        <input
          type="text"
          id="locationFilter"
          value={locationFilter}
          onChange={handleLocationChange}
        />
      </div>
      <div>
        <p>Features:</p>
        <label>
          <input
            type="checkbox"
            value="Zumba Class"
            checked={selectedFeatures.includes('Zumba Class')}
            onChange={handleFeaturesChange}
          />
          Zumba Class
        </label>
        <label>
          <input
            type="checkbox"
            value="Crossfit Circuit"
            checked={selectedFeatures.includes('Crossfit Circuit')}
            onChange={handleFeaturesChange}
          />
          Crossfit Circuit
        </label>
        <label>
          <input
            type="checkbox"
            value="Cardio Zone"
            checked={selectedFeatures.includes('Cardio Zone')}
            onChange={handleFeaturesChange}
          />
          Cardio Zone
        </label>
        <label>
          <input
            type="checkbox"
            value="Pilates Studios"
            checked={selectedFeatures.includes('Pilates Studios')}
            onChange={handleFeaturesChange}
          />
          Pilates Studios
        </label>
      </div>
      <div>
        <label htmlFor="distanceFilter">Distance (km):</label>
        <input
          type="range"
          id="distanceFilter"
          min="0"
          max="100"
          step="1"
          value={distanceFilter}
          onChange={handleDistanceChange}
        />
        <p>{distanceFilter} km</p>
      </div>
    </div>
  );
}

export default FilterBar;
