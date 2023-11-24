import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/users', UserControllers.getAllUsers);
router.get('/users/:userId', UserControllers.getSingleUser);
router.post('/users', UserControllers.createUser);
router.delete('/users/:userId', UserControllers.deleteSingleUser);

export const UserRoutes = router;
