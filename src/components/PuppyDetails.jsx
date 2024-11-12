import React, { useState, useEffect } from 'react';
import { fetchPuppyById } from '../api';

const PuppyDetails = ({ puppy }) => {
  const [detailedInfo, setDetailedInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleShowDetails = async () => {
    try {
      const data = await fetchPuppyById(puppy.id);
      setDetailedInfo(data);
    } catch (err) {
      setError('Failed to load puppy details');
    }
  };

  return (
    <div className="puppy-details">
      <h2>{puppy.name}</h2>
      <button onClick={handleShowDetails}>Show Details</button>
      {error && <p>{error}</p>}
      {detailedInfo && (
        <div>
          <p>Breed: {detailedInfo.breed}</p>
          <p>Owner: {detailedInfo.ownerName}</p>
          <p>Team: {detailedInfo.teamName}</p>
        </div>
      )}
    </div>
  );
};

export default PuppyDetails;
