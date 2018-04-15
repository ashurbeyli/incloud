import React, {Component} from 'react';

import { Button, Col, Jumbotron, Glyphicon, Grid, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getHomeData } from '../../actions/homeActions';

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
          <ListGroup>
            <ListGroupItem>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={7}>
                    Lorem ipsum description...
                  </Col>
                  <Col xs={12} md={2}>
                    09 Feb 2018
                  </Col>
                  <Col xs={6} md={3}>
                    <Row className="show-grid">
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="play" /></Button>
                      </Col>
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="danger"><Glyphicon glyph="trash" /></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </ListGroupItem>
            <ListGroupItem>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={7}>
                    Lorem ipsum description...
                  </Col>
                  <Col xs={12} md={2}>
                    09 Feb 2018
                  </Col>
                  <Col xs={6} md={3}>
                    <Row className="show-grid">
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="play" /></Button>
                      </Col>
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="danger"><Glyphicon glyph="trash" /></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </ListGroupItem>
            <ListGroupItem>
              <Grid>
                <Row className="show-grid">
                  <Col xs={12} md={7}>
                    Lorem ipsum description...
                  </Col>
                  <Col xs={12} md={2}>
                    09 Feb 2018
                  </Col>
                  <Col xs={6} md={3}>
                    <Row className="show-grid">
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="play" /></Button>
                      </Col>
                      <Col xs={12} md={6}>
                        <Button bsSize="small" bsStyle="danger"><Glyphicon glyph="trash" /></Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Grid>
            </ListGroupItem>
          </ListGroup>
        </div>
        <div className="container-fluid" style={{ background: '#ebebeb', position: 'fixed', bottom: 0, width: '100%' }}>
          <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="play" /></Button>
          <div>00:15:65</div>
          <Button bsSize="small" bsStyle="primary"><Glyphicon glyph="ok" /></Button>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.homeReducer.message };
}

export default connect(mapStateToProps, { getHomeData })(Home);