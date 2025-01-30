import React from 'react';
import { useSelector } from 'react-redux';
import '../index.css'
const Horses = () => {
  const horses = useSelector((state) => state.horses.ownedHorses);

  return (
    <div>
      <h3>Owned Horses:</h3>
        {!horses || horses.length === 0 ? (
          <p>You have no horses yet.</p>
        ) : (
          <ul>
            {horses.map((horse, idx) => (
              <li key={idx}>{horse.name}</li>
            ))}
          </ul>
        )}
   </div>
  );
};

export default Horses;