import React from 'react';
import HorseStore from '../components/HorseStore';
import { Link } from 'react-router-dom';

const HorseStorePage = () => {
  return (
    <div>
      <HorseStore />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default HorseStorePage;