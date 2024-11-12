import React from 'react';
import PuppyDetails from './PuppyDetails';

const PuppyList = ({ puppies }) => {
  return (
    <div className="puppy-list">
      {puppies.map((puppy) => (
        <PuppyDetails key={puppy.id} puppy={puppy} />
      ))}
    </div>
  );
};

export default PuppyList;
