import React, { useState } from 'react';
import * as S from './styles';

const BillItem = ({ bill }) => {
  const [showTransactions, setShowTransactions] = useState(false);

  const renderedTransactions =
    showTransactions === true
      ? bill.transactions.map((transaction, i) => (
          <S.BillItem key={i}>
            <div>{transaction.amount}</div>
            <div>{transaction.date}</div>
            <div>{transaction.id}</div>
          </S.BillItem>
        ))
      : '';

  return (
    <S.Wrapper>
      <div onClick={() => setShowTransactions(!showTransactions)}>
        <div>{bill.name}</div>
        <div>No. of transactions: {bill.transactions.length}</div>
      </div>
      {renderedTransactions}
    </S.Wrapper>
  );
};

export default BillItem;
