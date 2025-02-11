import React, { useEffect } from 'react';
import '../index.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBalance } from "../store/balanceSlice.js";
import { USER_ID_DEVELOPMENT } from "../config/appConfig.js";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.amount);
  
  console.log(balance)

  useEffect(() => {
    dispatch(fetchBalance(USER_ID_DEVELOPMENT));
  }, [dispatch]);

  return (
    <h2>Balance: ${balance}</h2>
  );
};

export default Balance;
