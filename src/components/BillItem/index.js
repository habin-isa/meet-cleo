import React, { useState } from 'react';
import * as S from './styles';

const BillItem = ({ bill, handleRemoveClick, handleAddClick, activeTab }) => {
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
      <S.BillContainer>
        <div>{bill.name}</div>
        <div>No. of transactions: {bill.transactions.length}</div>
        {activeTab === 'bills' ? (
          <button onClick={handleRemoveClick}>Remove bill</button>
        ) : (
          <button onClick={handleAddClick}>Add bill</button>
        )}
      </S.BillContainer>
      <S.SeeTransactions onClick={() => setShowTransactions(!showTransactions)}>See transactions:</S.SeeTransactions>
      {renderedTransactions}
    </S.Wrapper>
  );
};

export default BillItem;
