import express, { Router } from "express";
const router = express.Router();
import {
  getUser,
  createUser,
  readUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// All routes are starting here with slash users

router.get("/", getUser);
router.post("/", createUser);
router.get("/:_id", readUser);
router.delete("/:_id", deleteUser);
router.patch("/:_id", updateUser);
export default router;
