import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../store/balanceSlice';
import '../index.css'
import {buyHorseAsync, fetchHorses} from "../store/horseSlice.js";

const HorseStore = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.amount);
  const horses = useSelector((state) => state.horses.ownedHorses);
  const [notification, setNotification] = useState('');
  const userId = 3;

  useEffect(() => {
    dispatch(fetchHorses());
  }, [dispatch]);

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
                  <button className="buy-button" onClick={() => buyHorse(horse)}>Buy {horse.price}</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default HorseStore;