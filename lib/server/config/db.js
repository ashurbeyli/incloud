import mongoose from 'mongoose';
import config from './config';

import logger from '../util/logger';

export default {
  connect: () => {
    mongoose
      .connect(`mongodb://${config.DB_USER}:${config.DB_PASS}@${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`)
      .then(
        () => {
          logger.log(`Connected to ${config.DB_NAME}`);
        },
        (err) => {
          logger.log(err);
        }
      );
  }
};