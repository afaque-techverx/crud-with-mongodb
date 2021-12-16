import { v4 as uuidv4 } from "uuid";

let users = [];

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ id: uuidv4(), ...user });
  res.send(
    `New user ${user.firstName} ${user.lastName} of age ${user.age} added to database`
  );
};
export const readUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with this id ${id} is deleted`);
};

export const getUser = (req, res) => {
  res.send(users);
};
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`Id ${id} has been updated `);
};