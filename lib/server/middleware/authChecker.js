import logger from '../util/logger';
import { jeyhun } from '../fixtures/loggedUser';

export default function (req, res, next) {
  //@TODO need to check user if logged in
  req.user = jeyhun;
  logger.log('- Auth Checker Middleware passed');
  next();
}