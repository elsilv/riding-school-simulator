import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateBalance } from '../store/balanceSlice';
import '../index.css'
import { buyHorseAsync } from "../store/horseSlice.js";


const horseData = [
  { name: 'Teppo', age: 10, size: "163cm", character: "", price: 500, image: "/images/teppo.jpg" },
  { name: 'Pampula', age: 15, size: "105cm", character: "", price: 400, image: "/images/pampula.jpg" },
  { name: 'Sikke', age: 14, size: "142cm", character: "", price: 600, image: "/images/sikke.jpg" },
  { name: 'Opa', age: 8, size: "172cm", character: "", price: 850, image: "/images/opa.jpg" },
]

const HorseStore = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.amount);
  const [notification, setNotification] = useState('');
  const userId = 3;

  const buyHorse = (horse) => {
    const price = horse.price;
    if (balance >= price) {
      const newBalance = balance - price;
      dispatch(updateBalance({userId, newBalance}));
      dispatch(buyHorseAsync(horse));
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
          {horseData.length === 0 ? (
            <p>No horses available in your store.</p>
          ) : (
            <div className="horse-cards">
              {horseData.map((horse, idx) => (
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