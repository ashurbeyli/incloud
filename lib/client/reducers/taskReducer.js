import { ADD_TASK, DELETE_TASK, LOAD_TASKS, RESUME_TASK } from '../types/taskTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.task];
    case DELETE_TASK:
      return [
        ...state.filter(task => task._id !== action.id)
      ];
    case LOAD_TASKS:
      return action.tasks;
    case RESUME_TASK:
      return action.task;
    default:
      return state;
  }
};
export default messages;