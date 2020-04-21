import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  border-radius: 25px;
  background: #f6f7fa;
  width: 90%;
  height: 90vh;
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
  padding: 20px;
  border-radius: 25px;
  &:hover {
    background-color: #0e15ff;
    color: white;
  }
`;
