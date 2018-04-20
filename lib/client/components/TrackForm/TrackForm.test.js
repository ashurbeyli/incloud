import React from 'react';
import TrackForm, { getValidationState } from './';

import { dumbTask } from '../../data/fixtures';

const props = {
  handleChange: () => {},
  onClose: () => {},
  onSubmit: () => {},
  show: true,
  task: dumbTask
};


describe('TrackForm', () => {
  const wrapper = shallow(<TrackForm {...props} />);

  it('should contain Modal', () => {
    expect(wrapper.find('Modal').exists()).toBe(true);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getValidationState()', () => {
    it('should return "null" from getValidationState()', () => {
      expect(getValidationState(props.task)).toEqual(null);
    });

    it('should return "error" from getValidationState()', () => {
      props.task.description = 'asd';
      expect(getValidationState(props.task)).toEqual('error');
    });

    it('should return "error" from getValidationState()', () => {
      props.task.description = 'this is more than 5';
      expect(getValidationState(props.task)).toEqual('success');
    });
  });

});