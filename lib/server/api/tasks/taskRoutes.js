import express from 'express';
import createRouter from '../../util/createRouter';
import controller from './taskController';

const router = express.Router();

export default createRouter(controller, router);