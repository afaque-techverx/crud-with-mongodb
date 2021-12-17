import mongoose from "mongoose";
import User from "../model/userSchema.js";
mongoose.connect("mongodb://localhost/testdb");

export const createUser = async (req, res) => {
  const getUsers = req.body;
  try {
    const addedUser = await User.create({
      name: getUsers.name,
      age: getUsers.age,
      hobbies: getUsers.hobbies,
      email: getUsers.email,
      address: getUsers.address,
    });
    await addedUser.save();
    console.log(addedUser);
  } catch (error) {
    console.log(error.message);
  }
  res.send(
    `New user ${getUsers.name} of age ${getUsers.age} is added to database`
  );
};
export const getUser = async (req, res) => {
  res.send(await User.find({}));
};

export const readUser = async (req, res) => {
  const user = req.params;

  const foundUser = await User.find({ _id: user._id });

  res.send(foundUser);
};
export const deleteUser = async (req, res) => {
  const user = req.params;
  await User.deleteOne({ _id: user._id });

  res.send(`User with this id ${user._id} is deleted`);
};

export const updateUser = async (req, res) => {
  const userName = req.params;
  const toUpdate = req.body;
  await User.updateOne(userName, toUpdate);

  res.send(`This Id ${userName._id}  has been updated `);
};
