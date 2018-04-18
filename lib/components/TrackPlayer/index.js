import React, {Component} from 'react';

import { Button, Col, Glyphicon, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class TrackPlayer extends Component {
  render () {
    return (
      <Grid>
        <Row className="track-player show-grid">
          <Col xs={12} xsOffset={3} md={2}>
            Task ID: sa1d564894a6415ada
          </Col>
          <Col xs={12} md={2}>
            <div className="track-player__buttons">
              <Button bsSize="large" bsStyle="success"><Glyphicon glyph="play" /></Button>&nbsp;
              <Button disabled bsSize="large" bsStyle="danger"><Glyphicon glyph="stop" /></Button>
            </div>
          </Col>
          <Col xs={12} md={2}>
            <h2>00:15:65</h2>
          </Col>
        </Row>
      </Grid>
    );
  }
}

// function mapStateToProps(state) {
//   return { message: state.homeReducer.message };
// }

// export default connect(mapStateToProps, { getHomeData })(Home);