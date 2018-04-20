import React from 'react';
import { Home } from './';

import { HOME_PARAGRAPH_MESSAGE, WELCOME_MESSAGE } from '../../consts/strings'

const props = { message: 'message' };


describe('Home', () => {
  const wrapper = shallow(<Home {...props} />);

  it('should contain Jumbotron', () => {
    expect(wrapper.find('Jumbotron').exists()).toBe(true);
  });

  it(`should have "${WELCOME_MESSAGE}"  inside h1`, () => {
    expect(wrapper.find('h1').text()).toEqual(WELCOME_MESSAGE);
  });

  it(`should have "${HOME_PARAGRAPH_MESSAGE}"  inside Jumbotron > p`, () => {
    expect(wrapper.find('Jumbotron > p').text()).toEqual(HOME_PARAGRAPH_MESSAGE);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});