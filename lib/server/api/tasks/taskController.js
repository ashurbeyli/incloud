import Task from './taskModel';
import _ from 'lodash';

const setUser = (task, user) => _.merge(task, { user_id: user._id });

export const params = (req, res, next, id) => {
  Task.findById(id)
    .then((task) => {
      if (!task) {
        next(new Error('no task with this id'));
      } else {
        req.task = task;
        console.log('task', req.task);
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

export const get = (req, res, next) => {
  Task.find({})
    .then((tasks) => {
      res.json(tasks || []);
    })
    .catch((err) => {
      next(err);
    });
};

export const getOne = (req, res) => {
  res.json(req.task);
};

export const put = (req, res, next) => {
  const task = req.task;
  const update = {
    description: req.body.description,
    pieces: req.body.pieces
  };

  _.merge(task, update);

  task.save()
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

export const post = (req, res, next) => {
  let newTask = setUser(req.body, req.user);

  Task
    .create(newTask)
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

export const deleteOne = (req, res, next) => {
  req.task
    .remove()
    .then((deleted) => {
      res.json(deleted);
    })
    .catch((err) => {
      next(err);
    });
};

export default {
  delete: deleteOne,
  get: get,
  getOne: getOne,
  params: params,
  post: post,
  put: put,
};