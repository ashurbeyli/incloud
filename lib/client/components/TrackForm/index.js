import React from 'react';
import { Button, ControlLabel, FormControl, FormGroup, Modal } from 'react-bootstrap';

export const getValidationState = (task) => {
  const length = task.description.length;
  if (length > 5) return 'success';
  else if (length > 0) return 'error';
  return null;
};

const TrackForm = ({ handleChange, onClose, onSubmit, show, task }) => {

  return (
    <div className="static-modal">
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form>
            <FormGroup
              controlId="taskName"
              validationState={getValidationState(task)}
            >
              <ControlLabel>Task Description</ControlLabel>
              <FormControl
                type="text"
                value={task.description}
                placeholder="Enter description"
                onChange={(e) => handleChange(e.target.value)}
              />
              <FormControl.Feedback/>
            </FormGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button type="button" onClick={onClose}>Close</Button>
          <Button bsStyle="primary" type="submit" onClick={onSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

};

export default TrackForm;