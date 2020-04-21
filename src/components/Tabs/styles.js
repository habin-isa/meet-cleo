import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-size: 22px;
`;

export const Tab = styled.div`
  background: pink;
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 10px;
  &:hover {
    opacity: 0.8;
  }
`;
