import React, { useState, useEffect } from 'react';
import * as S from './styles';
import { getBills, updateBill } from '../../services/index';
import BillItem from '../BillItem';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState();
  const [billsData, setBillsData] = useState();
  const [totalData, setTotalData] = useState();

  const getBillsData = async () => {
    try {
      const response = await getBills();
      setTotalData(response.data);
      console.log('billsData', response.data);
    } catch (error) {
      console.log('error fetching bills');
    } finally {
      console.log('getBillsData called');
    }
  };

  const handleClick = (val) => {
    setActiveTab(val);
  };

  const handleData = (val) => {
    if (val === 'bills') {
      const sortedData = totalData.filter((bill, i) => bill.isBill === true);
      setBillsData(sortedData);
      console.log('sortedData', sortedData);
    } else if (val === 'potentialBills') {
      const sortedData = totalData.filter((bill, i) => bill.isBill === false);
      setBillsData(sortedData);
      console.log('sortedData', sortedData);
    }
  };

  const handleUpdateBill = async (id, data) => {
    try {
      const response = await updateBill(id, data);
      console.log(response);
    } catch (error) {
      console.log('error updating bill');
    } finally {
      console.log('removeBill called');
    }
  };

  const renderedBillItems =
    billsData !== undefined
      ? billsData.map((bill, i) => (
          <BillItem
            key={i}
            bill={bill}
            activeTab={activeTab}
            handleRemoveClick={() => handleUpdateBill(bill.id, true)}
            handleAddClick={() => handleUpdateBill(bill.id, false)}
          />
        ))
      : '';

  useEffect(() => {
    if (billsData === undefined) {
      getBillsData();
      setActiveTab('bills');
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.TabsContainer>
          <S.Tab
            onClick={() => {
              handleClick('bills');
              handleData('bills');
            }}
          >
            Bills
          </S.Tab>
          <S.Tab
            onClick={() => {
              handleClick('potentialBills');
              handleData('potentialBills');
            }}
          >
            Potential Bills
          </S.Tab>
        </S.TabsContainer>
        {renderedBillItems}
      </S.Container>
    </S.Wrapper>
  );
};

export default Tabs;
