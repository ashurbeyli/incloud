import React from 'react';
import Moment from 'react-moment';

import { TrackListItem } from './';
import { task } from '../../../data/fixtures';

const props = {
  task,
  onDelete: (id) => {}
};

describe('TrackListItem', () => {
  const wrapper = shallow(<TrackListItem {...props}/>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have task with description of "${props.task.description}"`, () => {
    expect(wrapper.find('Col.tracklist-item__description').render().text()).toEqual(props.task.description);
  });

});