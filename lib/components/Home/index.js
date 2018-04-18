import React, {Component} from 'react';

import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getHomeData } from '../../actions/homeActions';
import TrackList from '../TrackList/index';
import TrackPlayer from '../TrackPlayer/index';

export const MESSAGE = 'You can start to track by one click or you can add forgotten task';

export class Home extends Component {

  componentDidMount() {
    this.props.getHomeData(MESSAGE);
  }

  render () {
    const { message } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <Jumbotron>
            <h1>Welcome to InCTracker</h1>
            <p>{message}</p>
            <Button bsStyle="primary">Add Task</Button>
          </Jumbotron>
          <TrackList />
        </div>
        <div className="container-fluid" style={{ background: '#ebebeb', position: 'fixed', bottom: 0, width: '100%' }}>
          <div className="container">
            <TrackPlayer/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.homeReducer.message };
}

export default connect(mapStateToProps, { getHomeData })(Home);