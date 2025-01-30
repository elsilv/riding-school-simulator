import React from 'react';

const LandingPage = ({ horses }) => {
  return (
      <div>
      <h1>Riding School Simulator</h1>
        <h2>Balance: 0</h2>

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
      </div>
  );
};

export default LandingPage;