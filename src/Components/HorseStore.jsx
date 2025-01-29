import React, { useState } from 'react';

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
      <div>
        <h3>Select a horse to buy:</h3>
        <select onChange={(e) => setSelectedHorse(JSON.parse(e.target.value))}>
          <option value="">Choose a horse</option>
          {[
            { name: 'Teppo', price: 500 },
            { name: 'Pampula', price: 400 },
            { name: 'Sikke', price: 600 },
            { name: 'Opa', price: 850 },
          ].map((horse, idx) => (
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