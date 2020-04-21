import React, { useState } from 'react';
import * as S from './styles';
import { func, object, string } from 'prop-types';

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
        <S.Title>{bill.name}</S.Title>
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

BillItem.propTypes = {
  bill: object,
  handleRemoveClick: func,
  handleAddClick: func,
  activeTab: string
};

BillItem.defaultProps = {
  bill: {},
  handleRemoveClick: () => {},
  handleAddClick: () => {},
  activeTab: 'bills'
};

export default BillItem;
