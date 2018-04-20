import React from 'react';

import { Button, Col, Glyphicon, Grid, ListGroupItem, Row } from 'react-bootstrap';
import Moment from 'react-moment';
import { fullRecordedTime } from '../../../utils/time';

import './TrackListItem.scss';

export const TrackListItem = ({ task, onDelete }) => {

  return (
    <ListGroupItem key={task._id} className="tracklist-item">
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={1} className="tracklist-item__id">
            {task._id}
          </Col>
          <Col xs={12} md={5} className="tracklist-item__description">
            {task.description}
          </Col>
          <Col xs={12} md={2} className="tracklist-item__datetime">
            <Moment format="DD MMM YYYY hh:mm">
              {task.createdAt}
            </Moment>
          </Col>
          <Col xs={12} md={1} className="tracklist-item__datetime">
            {fullRecordedTime(task.pieces, null)}
          </Col>
          <Col xs={6} md={2} className="tracklist-item__actions">
            <Button
              bsSize="small"
              bsStyle="danger"
              onClick={() => onDelete(task._id)}
            ><Glyphicon glyph="trash" /></Button>
          </Col>
        </Row>
      </Grid>
    </ListGroupItem>
  );

};

export default TrackListItem;