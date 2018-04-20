import React, {Component} from 'react';

import { Jumbotron } from 'react-bootstrap';
import TrackList from '../TrackList/index';
import TrackPlayer from '../TrackPlayer/index';

import { HOME_PARAGRAPH_MESSAGE, WELCOME_MESSAGE} from '../../consts/strings';

export class Home extends Component {

  render () {
    return (
      <React.Fragment>
        <div className="container">
          <Jumbotron>
            <h1>{WELCOME_MESSAGE}</h1>
            <p>{HOME_PARAGRAPH_MESSAGE}</p>
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