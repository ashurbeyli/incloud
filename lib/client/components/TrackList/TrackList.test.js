import React from 'react';

import { TrackList } from './';
import { tasks } from '../../data/fixtures';
import TrackListItem from './TrackListItem/index';

const props = { tasks };

describe('TrackList', () => {
  const wrapper = shallow(<TrackList {...props}/>);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(`should have ${props.tasks.length} TrackListItems`, () => {
    expect(wrapper.find(TrackListItem).length).toEqual(props.tasks.length);
  });

});