import React from 'react';
import { Home } from './';

const props = { message: 'message' };

describe('Home', () => {
  const wrapper = shallow(<Home {...props} />);

  it('should have h1', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  // it('renders correctly', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });

});