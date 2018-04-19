import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, HelpBlock, Modal } from 'react-bootstrap';

import TasksApi from '../../api-client/tasksApi';

export default class TrackForm extends React.Component {

  constructor(props) {
    super(props);
  }

  getValidationState = () => {
    const length = this.props.task.description.length;
    if (length > 5) return 'success';
    else if (length > 0) return 'error';
    return null;
  }

  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup
                controlId="taskName"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Task Description</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.task.description}
                  placeholder="Enter description"
                  onChange={e => this.props.handleChange(e.target.value)}
                />
                <FormControl.Feedback/>
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button type="button" onClick={this.props.onClose}>Close</Button>
            <Button bsStyle="primary" type="submit" onClick={this.props.onSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

}