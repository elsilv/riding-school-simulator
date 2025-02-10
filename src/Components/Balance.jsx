import React, { useEffect } from 'react';
import '../index.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../store/balanceSlice.js";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.amount);
  
  console.log(balance)

  useEffect(() => {
    //Just for testing
    const userId = 3;
    dispatch(fetchBalance(userId));
  }, [dispatch]);

  return (
    <h2>Balance: ${balance}</h2>
  );
};

export default Balance;
