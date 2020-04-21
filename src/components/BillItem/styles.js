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
  &:hover {
    opacity: 0.5;
  }
`;

export const BillItem = styled.div`
  display: flex;
  align-items: center;
  color: #0e15ff;
  padding-top: 10px;
  font-size: 12px;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 22px;
`;

export const Button = styled.button`
  background: #0e15ff;
  padding: 10px;
  border-radius: 10px;
  color: white;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.8;
    outline: none;
  }
`;
