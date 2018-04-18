import React, {Component} from 'react';

import { Button, Col, Glyphicon, Grid, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

export default class TrackList extends Component {
  render () {
    return (
      <ListGroup>
        <ListGroupItem>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={2}>
                af5646af4a6sf4a
              </Col>
              <Col xs={12} md={6}>
                Lorem ipsum description...
              </Col>
              <Col xs={12} md={2}>
                09 Feb 2018
              </Col>
              <Col xs={6} md={2}>
                <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="play" /></Button>
                <Button bsSize="small" bsStyle="danger"><Glyphicon glyph="trash" /></Button>
              </Col>
            </Row>
          </Grid>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

// function mapStateToProps(state) {
//   return { message: state.homeReducer.message };
// }

// export default connect(mapStateToProps, { getHomeData })(Home);