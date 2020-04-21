import React, { useState } from 'react';
import * as S from './styles';
import { func, object, string } from 'prop-types';

const BillItem = ({ bill, handleRemoveClick, handleAddClick, activeTab }) => {
  const [showTransactions, setShowTransactions] = useState(false);

  const renderedTransactions =
    showTransactions === true
      ? bill.transactions.map((transaction, i) => (
          <S.BillItem key={i}>
            <div>
              <b>Amount:</b> {transaction.amount}
            </div>
            <div>
              <b>Date: </b> {transaction.date}
            </div>
            <div>
              <b>Id:</b> {transaction.id}
            </div>
          </S.BillItem>
        ))
      : '';
  return (
    <S.Wrapper>
      <S.BillContainer onClick={() => setShowTransactions(!showTransactions)}>
        <S.Title>{bill.name}</S.Title>
        <div>No. of transactions: {bill.transactions.length}</div>
      </S.BillContainer>
      {renderedTransactions}
      {activeTab === 'bills' ? (
        <S.Button onClick={handleRemoveClick}>Remove bill</S.Button>
      ) : (
        <S.Button onClick={handleAddClick}>Add bill</S.Button>
      )}
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
