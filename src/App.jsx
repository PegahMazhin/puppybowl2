import React, { useEffect, useState } from 'react';
import { fetchPuppies } from './api';
import PuppyList from './components/PuppyList';

function App() {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPuppies = async () => {
      try {
        const data = await fetchPuppies();
        setPuppies(data);
      } catch (err) {
        setError('Failed to load puppy data');
      }
    };

    getPuppies();
  }, []);

  return (
    <div className="App">
      <h1>Puppy Bowl</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <PuppyList puppies={puppies} />
      )}
    </div>
  );
}

export default App;
