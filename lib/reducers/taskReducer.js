import { LOAD_TASKS } from '../types/taskTypes';
import { ADD_TASK } from '../types/taskTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return action.tasks;
    case ADD_TASK:
      return [...state, action.task];
    default:
      return state;
  }
};
export default messages;