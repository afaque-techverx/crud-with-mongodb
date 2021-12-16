import express, { Router } from "express";
const router = express.Router();
import {
  getUser,
  createUser,
  readUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

let users = [];
// All routes are starting here with slash users

router.get("/", getUser);
router.post("/", createUser);
router.get("/:id", readUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
export default router;
