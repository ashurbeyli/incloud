import { LOAD_TASKS } from '../types/taskTypes';
import { ADD_TASK } from '../types/taskTypes';

export const loadTasks = (tasks) => {
  return {
    type: LOAD_TASKS,
    tasks
  };
};
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    task
  };
};