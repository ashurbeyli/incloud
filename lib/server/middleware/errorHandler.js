import logger from '../util/logger';

export default (err, req, res, next) => {
  // if (err.name === 'UnauthorizedError') {
  //   res.status(401).send('Invalid token');
  //   return;
  // }
  logger.err(err.stack);
  res.status(500).json(err);
};