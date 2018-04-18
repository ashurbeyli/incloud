import express from 'express';
import createRouter from '../../util/createRouter';
import controller from './userController';

const router = express.Router();

export default createRouter(controller, router);