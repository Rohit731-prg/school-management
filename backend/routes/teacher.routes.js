import { Router } from "express";
import Teacher from "../models/teachers.model.js";

const router = Router();

router.post("/add", async (req, res) => {
  const {
    name, date_of_birth, id, email, phone, gender, bloodGroup, religion, address,
  } = req.body;

  try {
    const teacher = new Teacher({
      name, date_of_birth, id, email, phone, gender, bloodGroup, religion, address,
    });

    await teacher.save();
    res.status(201).json({ success: true, data: teacher });
  } catch (err) {
    console.error("Error saving teacher:", err);
    res.status(500).json({ success: false, message: "Server Error", error: err.message });
  }
});

router.get('/all', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.send({ status: true, data: teachers })
  } catch (err) {
    res.send({ status: false, data: err })
  }
})

export default router;
