import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../store/balanceSlice';
import '../index.css'
import { buyHorseAsync, fetchAvailableHorses } from "../store/horseSlice.js";
import { USER_ID_DEVELOPMENT } from "../config/appConfig.js";

const HorseStore = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.amount);
  const horses = useSelector((state) => state.horses.availableHorses);
  const [notification, setNotification] = useState('');
  const userId =  USER_ID_DEVELOPMENT;

  useEffect(() => {
    dispatch(fetchAvailableHorses());
  }, [dispatch, horses]);

  const buyHorse = (horse) => {
    const price = horse.price;
    if (balance >= price) {
      const newBalance = balance - price;
      dispatch(updateBalance({userId, newBalance}));
      dispatch(buyHorseAsync({ userId, horseData: horse }));
      setNotification(`Successfully bought ${horse.name}!`);
      setTimeout(() => setNotification(''), 3000);
    } else {
       setNotification("Not enough money!");
       setTimeout(() => setNotification(''), 3000);
    }
  };

    return (
    <div className="page-container">
    <div className="browser-window">
      <div className="browser-header">
        <span>Horse Store - Riding School Simulator</span>
      </div>
      <div className="browser-body">
        {notification && <div className="notification">{notification}</div>}
        <div className="horse-store">
          {horses.length === 0 ? (
            <p>No horses available in your store.</p>
          ) : (
            <div className="horse-cards">
              {horses.map((horse, idx) => (
                <div className="horse-card" key={idx}>
                  <img src={horse.image} alt={horse.name} className="horse-image" />
                  <h4>{horse.name}</h4>
                  <p><strong>Size:</strong> {horse.size}</p>
                  <p><strong>Character:</strong> {horse.character}</p>
                  <button onClick={() => buyHorse(horse)}>Buy {horse.price}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};
export default HorseStore;