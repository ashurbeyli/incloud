import { ADD_TASK, DELETE_TASK, LOAD_TASKS, RESUME_TASK } from '../types/taskTypes';

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

export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    id
  };
};

export const resumeTask = (task) => {
  return {
    type: RESUME_TASK,
    task
  };
};