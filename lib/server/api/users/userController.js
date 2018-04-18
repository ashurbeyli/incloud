import User from './userModel';
import _ from 'lodash';

export const params = (req, res, next, id) => {
  User.findById(id)
    .then((user) => {
      if (!user) {
        next(new Error('no task with this id'));
      } else {
        req.user = user;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

export const get = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.json(users || []);
    })
    .catch((err) => {
      next(err);
    });
};

export const getOne = (req, res) => {
  res.json(req.user);
};

export const put = (req, res, next) => {
  const user = req.user;
  const update = req.body;

  _.merge(user, update);

  user.save()
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

export const post = (req, res, next) => {
  const newUser = req.body;
  console.log(req.body);
  User
    .create(newUser)
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