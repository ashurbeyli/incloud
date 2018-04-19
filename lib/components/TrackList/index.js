import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux';

import TasksApi from  '../../api-client/tasksApi';
import { deleteTask, loadTasks } from '../../actions/taskActions';
import TrackListItem from './TrackListItem';

import './TrackList.scss';

export class TrackList extends Component {

  componentDidMount() {
    TasksApi.get()
      .then((res) => this.props.loadTasks(res))
      .catch((err) => console.error(err));
  }

  onDelete = (id) => {
    if(confirm('Are you sure?')) {
      this.props.deleteTask(id);
    }
  }

  render () {
    return (
      <ListGroup className="tracklist">
        {
          this.props.tasks && this.props.tasks.map( (task) =>
            <TrackListItem
              key={task._id}
              onDelete={this.onDelete}
              task={task}
            />
          )
        }
      </ListGroup>
    );
  }
}

// connecting component to store
const mapStateToProps = (state) => {
  return { tasks: state.tasks };
};

export default connect(mapStateToProps, { deleteTask, loadTasks })(TrackList);