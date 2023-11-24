import { User } from './user.interface';
import { UserModel } from './user.model';

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  console.log('form delete');
  const result = await UserModel.findOne({ userId });
  return result;
};

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const deleteSingleUserFromDB = async (userId: string) => {
  console.log(userId);
  const result = await UserModel.deleteOne({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
};
