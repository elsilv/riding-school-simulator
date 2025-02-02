import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'
import { addHorseAsync, fetchHorses } from "../store/horseSlice.js";

const Horses = () => {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses.ownedHorses);
  const status = useSelector((state) => state.horses.status);
  const error = useSelector((state) => state.horses.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHorses());
    }
  }, [status, dispatch]);

  const handleAddHorse = async () => {
    const newHorse = { name: 'New Horse', size: 'Large', character: 'Friendly' };
    await dispatch(addHorseAsync(newHorse));
  };

  if (status === 'loading') {
    return <p>Loading horses...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

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