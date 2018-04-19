import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import TasksApi from  '../../api-client/tasks';
import { loadTasks } from '../../actions/taskActions';
import TrackListItem from './TrackListItem';

import './TrackList.scss';

export class TrackList extends Component {

  componentDidMount() {
    TasksApi.get()
      .then((res) => this.props.loadTasks(res))
      .catch((err) => console.error(err));
  }

  render () {
    return (
      <ListGroup>
        {
          this.props.tasks && this.props.tasks.map( (task) => <TrackListItem key={task._id} task={task} /> )
        }
      </ListGroup>
    );
  }
}

// connecting component to store
const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { loadTasks })(TrackList);