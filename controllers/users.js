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
  try {
    await User.find({ name: user.name });
  } catch (error) {
    console.log(error.message);
  }

  res.send(foundUser);
};
export const deleteUser = async (req, res) => {
  const user = req.params;
  try {
    await User.deleteOne({ name: user.name });
  } catch (error) {
    console.log(error.message);
  }
  res.send(`User with this id ${user.name} is deleted`);
};

export const updateUser = async (req, res) => {
  const userName = req.params;
  const toUpdate = req.body;
  try {
    await User.updateOne(userName, toUpdate);
  } catch (error) {
    console.log(error.message);
  }

  res.send(`Id } has been updated `);
};
