import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import BillItem from '.';

describe('BillItem component', () => {
  const props = {
    bill: {
      name: 'Ferrari',
      transactions: [
        { amount: '666', date: '20.20.20', id: '606' },
        { amount: '666', date: '20.20.20', id: '606' },
        { amount: '666', date: '20.20.20', id: '606' }
      ]
    },
    activeTab: 'bills'
  };

  it('should render', () => {
    const { container } = render(<BillItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
  it('renders with correct bills data', () => {
    shallow(<BillItem bill={props.bill} />);
  });
});
