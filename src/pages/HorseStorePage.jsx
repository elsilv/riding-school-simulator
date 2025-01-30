import React from 'react';
import HorseStore from '../components/HorseStore';
import { Link } from 'react-router-dom';

const HorseStorePage = ({ balance, setBalance, horses, setHorses }) => {
  return (
    <div>
      <HorseStore balance={balance} setBalance={setBalance} horses={horses} setHorses={setHorses} />
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default HorseStorePage;