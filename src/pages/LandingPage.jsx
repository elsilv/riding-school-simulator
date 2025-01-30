import React from 'react';
import { useSelector } from "react-redux";

const LandingPage = ({ horses }) => {
  const balance = useSelector((state) => state.balance.amount);

  return (
      <div>
      <h1>Riding School Simulator</h1>
        <h2>Balance: ${balance}</h2>
      </div>
  );
};

export default LandingPage;