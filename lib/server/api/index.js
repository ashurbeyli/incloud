import express from 'express';

import userRoutes from './users/userRoutes';
import taskRoutes from './tasks/taskRoutes';
import authChecker from '../middleware/authChecker';

const router = express.Router();

router.use('/users', userRoutes);
router.use(authChecker);
router.use('/tasks', taskRoutes);

router.get('/', (req, res) => {
  res.send('invalid api method');
});

export default router;
