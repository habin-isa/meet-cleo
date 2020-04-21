import React from 'react';
import * as S from './styles';
import Tabs from '../Tabs';

const App = () => {
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
