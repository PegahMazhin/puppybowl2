const BASE_URL = 'https://fsa-puppy-bowl.herokuapp.com/2409-ftb-et-web-ft';

export const fetchPuppies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/puppies`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching puppies:', error);
    throw error;
  }
};

export const fetchPuppyById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/puppies/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching puppy details:', error);
    throw error;
  }
};
