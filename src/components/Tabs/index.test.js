import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Tabs from '.';

describe('Tabs component', () => {
  it('should render', () => {
    const { container } = render(<Tabs />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
