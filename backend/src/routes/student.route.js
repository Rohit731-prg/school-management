import express from "express";
import {
  getAllStudents,
  getStudentByName,
  login,
  logOut,
  registration,
} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/register", registration);
router.post("/login", login);
router.post("logout", logOut);
router.get("/getAllStudents", getAllStudents);
router.post('/getStudentByName/:name', getStudentByName);

export default router;