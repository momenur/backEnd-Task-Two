import { User } from './user.interface';
import { UserModel } from './user.model';

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ userId }, { password: 0 });
  return result;
};

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const updateSingleUserFromDB = async (
  userId: string,
  updatedUserData: User,
) => {
  const result = await UserModel.updateOne({ userId }, updatedUserData);
  return result;
};

const deleteSingleUserFromDB = async (userId: string) => {
  const result = await UserModel.deleteOne({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  deleteSingleUserFromDB,
  updateSingleUserFromDB,
};
