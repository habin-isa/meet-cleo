import React, { useState, useEffect } from 'react';
import * as S from './styles';
import './';
// import { getBills } from './services/index.js';
import Tabs from './components/Tabs';
// import { string } from 'prop-types';

const App = () => {
  // const [billsData, setBillsData] = useState();

  // const getBillsData = async () => {
  //   try {
  //     const response = await getBills();
  //     setBillsData(response.data);
  //     console.log('billsData', response.data);
  //   } catch (error) {
  //     console.log('error fetching bills');
  //   } finally {
  //     console.log('getBillsData called');
  //   }
  // };

  // useEffect(() => {
  //   if (billsData === undefined) {
  //     getBillsData();
  //   }
  // }, [billsData]);

  return (
    <S.Wrapper>
      meet-cleo
      <Tabs />
    </S.Wrapper>
  );
};

export default App;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
