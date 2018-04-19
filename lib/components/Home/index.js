import React, {Component} from 'react';

import { Button, Jumbotron } from 'react-bootstrap';
import TrackList from '../TrackList/index';
import TrackPlayer from '../TrackPlayer/index';

export const MESSAGE = 'You can start to track by one click';

export class Home extends Component {

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <Jumbotron>
            <h1>Welcome to InCTracker</h1>
            <p>{MESSAGE}</p>
            {/*<Button bsStyle="primary">Add Task</Button>*/}
          </Jumbotron>
          <TrackList />
        </div>
        <div className="container-fluid" style={{ background: '#ebebebd1', position: 'fixed', bottom: 0, width: '100%' }}>
          <div className="container">
            <TrackPlayer/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;