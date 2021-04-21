import React from 'react';
import bG from '../../Images/background-min.gif';

console.dir(bG);

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Phonebook!</h1>
      <div>
        <img src={bG} alt={bG} />
      </div>
    </div>
  );
};

export default HomePage;
