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
router.get("/:name", readUser);
router.delete("/:name", deleteUser);
router.patch("/:name", updateUser);
export default router;
