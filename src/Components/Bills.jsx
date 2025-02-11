import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchBills, fetchUnpaidBills, payBill } from "../store/billsSlice.js";
import { USER_ID_DEVELOPMENT } from "../config/appConfig.js";

function Bills () {
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills);
  const unpaidBills = useSelector((state) => state.bills.unpaidBills);
  const status = useSelector((state) => state.bills.status);
  const error = useSelector((state) => state.bills.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBills(USER_ID_DEVELOPMENT));
      dispatch(fetchUnpaidBills(USER_ID_DEVELOPMENT));
    }
  }, [status, dispatch]);

  function formatDateTime(dateTime) {
    const date = new Date(dateTime);
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour12: false,
    };

    return date.toLocaleString('en-GB', options);
  }

  const handlePayBill = (billId) => {
    dispatch(payBill(billId))
    .then(() => {
      dispatch(fetchBills());
      dispatch(fetchUnpaidBills());
    });
  };

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
              <td>{bill.paid ? 'Paid' : 'Unpaid'}</td>
              {bill.paid === false && (
              <td><button onClick={() => handlePayBill(bill.id)}>Pay bill</button></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Bills;
