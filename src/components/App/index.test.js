import React from 'react';
import { shallow } from 'enzyme';
import App from '.';

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
