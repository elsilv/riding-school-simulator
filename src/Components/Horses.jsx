import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../index.css'
import { fetchHorses } from "../store/horseSlice.js";
import { buyStall } from "../store/userSlice.js";
import { STABLE_SIZE, USER_ID_DEVELOPMENT } from "../config/appConfig.js";

const Horses = () => {
  const dispatch = useDispatch();
  const horses = useSelector((state) => state.horses.ownedHorses);
  const horseStatus = useSelector((state) => state.horses.status);
  const error = useSelector((state) => state.horses.error);
  const stallLimit = useSelector((state) => state.user.stallLimit);

  const [selectedHorse, setSelectedHorse] = useState(null);
  const [stableSize, setStableSize] = useState(STABLE_SIZE);

  useEffect(() => {
    if (horseStatus !== 'loading' && horseStatus !== 'succeeded') {
      dispatch(fetchHorses());
    }
  }, [horseStatus, dispatch]);

  useEffect(() => {
    setStableSize(stallLimit);
  }, [stallLimit]);

  const handleBuyNewStall = () => {
    dispatch(buyStall(USER_ID_DEVELOPMENT));
  };

  if (horseStatus === 'loading') {
    return <p>Loading horses...</p>;
  }

  if (horseStatus === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Stall View</h2>
      <button onClick={handleBuyNewStall}>Buy New Stall 500€</button>
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