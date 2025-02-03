import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBills, fetchUnpaidBills } from "../store/billsSlice.js";

function Bills () {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills);
  const unpaidBills = useSelector((state) => state.bills.unpaidBills);
  const status = useSelector((state) => state.bills.status);
  const error = useSelector((state) => state.bills.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBills());
      dispatch(fetchUnpaidBills());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h3>Unpaid Bills</h3>
      <ul>
        {unpaidBills.map((bill, idx) => (
          <li key={idx}>{bill.description} - {bill.amount} - {bill.due_date}</li>
        ))}
      </ul>

      <h3>All Bills</h3>
      <ul>
        {bills.map((bill, idx) => (
          <li key={idx}>{bill.description} - {bill.amount} - {bill.due_date}</li>
        ))}
      </ul>
    </div>
  );
}

export default Bills;
