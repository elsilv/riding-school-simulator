import './index.css'
import HorseStore from './components/HorseStore';
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(1000);
  const [horses, setHorses] = useState([]);

  return (
      <div className="App">
        <h1>Riding School Simulator</h1>
        <h2>Balance: ${balance}</h2>

        <div>
           <h3>Owned Horses:</h3>
             {horses.length === 0 ? (
               <p>You have no horses yet.</p>
             ) : (
               <ul>
                 {horses.map((horse, idx) => (
                   <li key={idx}>{horse.name}</li>
                 ))}
               </ul>
             )}
        </div>

        <HorseStore
          balance={balance}
          setBalance={setBalance}
          horses={horses}
          setHorses={setHorses}
        />
      </div>
  )
}

export default App
