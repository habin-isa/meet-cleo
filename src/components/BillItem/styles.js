import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  background: #f6f7fa;
`;

export const BillContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const BillItem = styled.div`
  display: flex;
  align-items: center;
`;

export const SeeTransactions = styled.div`
  &:hover {
    color: #0e15ff;
  }
`;
