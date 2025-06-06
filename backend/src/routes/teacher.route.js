import express from "express";
import {
  getAllTeachers,
  getTeacherByName,
  login,
  logout,
  registration,
} from "../controllers/teacher.controller.js";

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);
router.get("/getAllTeachers", getAllTeachers);
router.post("/getTeacherByName/:name", getTeacherByName);
router.post("/logout", logout);

export default router;
