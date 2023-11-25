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
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: {
          code: 404,
          description: 'User not found',
        },
      });
    }
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
    const result = await UserServices.getSingleUserFromDB(userId);
    if (result) {
      await UserServices.updateSingleUserFromDB(userId, updatedUserData);
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: updatedUserData,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);
    if (result) {
      await UserServices.deleteSingleUserFromDB(userId);
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// Orders Operations
const createProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const productData = req.body;
    await UserServices.createProductIntoDB(userId, productData);
    res.status(200).json({
      success: true,
      message: 'Product Added successfully!',
      data: productData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getProduct = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getAllProductFromDB(userId);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: {
          code: 404,
          description: 'User not found',
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getAllProductTotalPriceFromDB(userId);
    if (result) {
      const totalPrice = result?.orders.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
      res.status(200).json({
        success: true,
        message: `Total Price:${totalPrice}`,
        data: {
          Total_Price: totalPrice,
        },
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'User not found!',
        data: {
          code: 404,
          description: 'User not found',
        },
      });
    }
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
  createProduct,
  getProduct,
  getTotalPrice,
};
