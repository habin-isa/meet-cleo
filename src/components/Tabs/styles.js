import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background: #f6f7fa;
  height: 100vh;
`;

export const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-size: 22px;
`;

export const Tab = styled.div`
  cursor: pointer;
  width: 100%;
  text-align: center;
  padding: 10px;
  &:hover {
    background-color: #0e15ff;
    color: white;
  }
`;
