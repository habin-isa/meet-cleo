import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  cursor: pointer;
  background: white;
  margin: 20px;
  border: white 1px;
  border-radius: 25px;
`;

export const BillContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const BillItem = styled.div`
  display: flex;
  align-items: center;
  color: #0e15ff;
`;

export const SeeTransactions = styled.div`
  padding-top: 10px;
  &:hover {
    color: #0e15ff;
  }
`;

export const Title = styled.div`
  font-size: 22px;
`;
