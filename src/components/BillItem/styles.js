import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const BillItem = styled.div`
  display: flex;
  align-items: center;
`;
