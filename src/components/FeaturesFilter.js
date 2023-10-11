// FeaturesFilter.js
import React from "react";

const FeaturesFilter = ({ onFeatureChange }) => {
  return (
    <div>
      <label>
        <input type="checkbox" value="Zumba Class" onChange={onFeatureChange} />
        Zumba Class
      </label>
      <label>
        <input
          type="checkbox"
          value="Crossfit Circuit"
          onChange={onFeatureChange}
        />
        Crossfit Circuit
      </label>
      <label>
        <input type="checkbox" value="Cardio Zone" onChange={onFeatureChange} />
        Cardio Zone
      </label>
      <label>
        <input
          type="checkbox"
          value="Pilates Studios"
          onChange={onFeatureChange}
        />
        Pilates Studios
      </label>
    </div>
  );
};

export default FeaturesFilter;
