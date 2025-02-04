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

  function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };

    return date.toLocaleString('en-GB', options);
  }

  return (
    <>
      <h2>Bills</h2>
      <table className="bills-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount (€)</th>
            <th>Due Date</th>
            <th>Paid</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, idx) => (
            <tr>
              <td>{bill.description}</td>
              <td>{bill.amount}</td>
              <td>{formatDateTime(bill.due_date)}</td>
              <td>{bill.paid.toString()}</td>
              {bill.paid === false && (
              <td><button className="mark-paid-btn">Pay</button></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Bills;
