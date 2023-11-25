import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

router.get('/users', UserControllers.getAllUsers);
router.get('/users/:userId', UserControllers.getSingleUser);
router.put('/users/:userId', UserControllers.updateSingleUser);
router.post('/users', UserControllers.createUser);
router.delete('/users/:userId', UserControllers.deleteSingleUser);
// Orders Operation
router.put('/users/:userId/orders', UserControllers.createProduct);
router.get('/users/:userId/orders', UserControllers.getProduct);
router.get('/users/:userId/orders/total-price', UserControllers.getTotalPrice);

export const UserRoutes = router;
