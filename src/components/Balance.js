import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactionsx } = useContext(GlobalContext);

  const amounts = transactionsx.map((transaction) => transaction.amount);
  console.log(
    '🚀LOGGER ~ file: Balance.js ~ line 9 ~ Balance ~ amounts',
    amounts
  );

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};
