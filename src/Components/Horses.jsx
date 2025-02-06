import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'
import { addHorseAsync, fetchHorses } from "../store/horseSlice.js";

const Horses = () => {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses.ownedHorses);
  const status = useSelector((state) => state.horses.status);
  const error = useSelector((state) => state.horses.error);

  const [selectedHorse, setSelectedHorse] = useState(null);
  const [stableSize, setStableSize] = useState(6);

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
      <h2>Stall View</h2>
      <div className="main-container">
        <div className="container">
          {horses.map((horse) => (
            <div key={horse.id} className="card" onClick={() => setSelectedHorse(horse)}>
              <h2>
                <img src="/images/icons8-horse.png" alt={horse.name} />
              </h2>
              <p>{horse.name}</p>
            </div>
          ))}

          {Array.from({ length: stableSize - horses.length }).map((_, index) => (
            <div key={`empty-${index}`} className="card"></div>
          ))}
        </div>

        {selectedHorse && (
          <div className="details-card">
            <h2>{selectedHorse.name}</h2>
            <img
              src={`/images/${selectedHorse.name.charAt(0).toLowerCase() + selectedHorse.name.slice(1)}.jpg`}
              alt="horse picture"
            />
            <p>Size: {selectedHorse.size}</p>
            <p>Character: {selectedHorse.character}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Horses;