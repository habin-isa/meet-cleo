import React from 'react';
import * as S from './styles';
import TitleContainer from '../TitleContainer';
import Tabs from '../Tabs';

const App = () => {
  return (
    <S.Wrapper>
      <TitleContainer />
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
