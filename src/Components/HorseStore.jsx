import React, { useState } from 'react';
import '../index.css'

const horseData = [
  { name: 'Teppo', age: 10, size: "163cm", character: "", price: 500 },
  { name: 'Pampula', age: 15, size: "105cm", character: "", price: 400 },
  { name: 'Sikke', age: 14, size: "142cm", character: "", price: 600 },
  { name: 'Opa', age: 8, size: "172cm", character: "", price: 850 },
]

const HorseStore = ({ balance, setBalance, horses, setHorses }) => {
  const [selectedHorse, setSelectedHorse] = useState(null);

  const buyHorse = () => {
    if (!selectedHorse) return;
    const horsePrice = selectedHorse.price;
    if (balance < horsePrice) {
      alert('Not enough balance to buy this horse!');
      return;
    }

    setBalance(balance - horsePrice);
    setHorses([...horses, selectedHorse]);
  };

  return (
    <div>
      <h2>Horse Store</h2>
      <p>Your balance: ${balance}</p>

      <div className="horse-cards">
        {horseData.map((horse, idx) => (
          <div key={idx} className="horse-card">
            <img src={horse.image} alt={horse.name} className="horse-image" />
            <div className="horse-details">
              <h4>{horse.name}</h4>
              <p>Age: {horse.age}</p>
              <p>Size: {horse.size}</p>
              <p>Character: {horse.character}</p>
              <p>Price: ${horse.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3>Select a horse to buy:</h3>
        <select onChange={(e) => setSelectedHorse(JSON.parse(e.target.value))}>
          <option value="">Choose a horse</option>
          {horseData.map((horse, idx) => (
            <option key={idx} value={JSON.stringify(horse)}>
              {horse.name} - ${horse.price}
            </option>
          ))}
        </select>
      </div>

      <button onClick={buyHorse}>Buy Horse</button>
    </div>
  );
};

export default HorseStore;