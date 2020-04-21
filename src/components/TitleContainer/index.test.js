import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import TitleContainer from '.';

describe('TitleContainer component', () => {
  it('should render', () => {
    const { container } = render(<TitleContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
