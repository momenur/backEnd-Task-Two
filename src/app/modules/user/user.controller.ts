import { Request, Response } from 'express';
import { UserServices } from './user.service';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await UserServices.createUserIntoDB(user);
    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updatedUserData = req.body.user;
    await UserServices.updateSingleUserFromDB(userId, updatedUserData);
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: updatedUserData,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await UserServices.deleteSingleUserFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
};
