import Teacher from "../models/teacher.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../../config/cloudinary.js";
import jwt from 'jsonwebtoken';

export const registration = async (req, res) => {
  const {
    name,
    email,
    Phone,
    gender,
    className,
    Section,
    Subject,
    address,
    photo,
    password,
  } = req.body;
  if(
    !name ||
    !email ||
    !Phone ||
    !gender ||
    !className ||
    !Section ||
    !Subject ||
    !address ||
    !photo ||
    !password
  ) return res.status(400).json({ success: false, message: "All fields are required" });

  try {
    const teacher = await Teacher.findOne({ email });
    if ( teacher ) return res.status(400).json({ success: false, message: "Teacher already exists" });

    const hashedPass = await bcrypt.hash(password, 10);
    const photoUrl = await cloudinary.uploader.upload(photo);
    const url = photoUrl.secure_url;

    const newTeacher = new Teacher({
      name,
      email,
      Phone,
      gender,
      className,
      Section,
      Subject,
      address,
      photo: url,
      password: hashedPass,
    });
    await newTeacher.save();
    res.status(201).json({ success: true, data: newTeacher, message: "Teacher registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    if( !email || !password ) return res.status(400).json({ success: false, message: "Email and password are required" });

    try {
        const teacher = await Teacher.findOne({ email });
    if ( !teacher ) return res.status(404).json({ success: false, message: "Teacher not found" });

    const isMatch = bcrypt.compare(password, teacher.password);
    if ( !isMatch ) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: teacher._id, role: teacher.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(200).json({ success: true, message: "Login successful", teacher: teacher, role: teacher.role });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json({ success: true, teachers: teachers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const getTeacherByName = async (req, res) => {
    const { name } = req.params;
    if ( !name ) return res.status(400).json({ success: false, message: "Name is required" });
    try {
        const teacher = await Teacher.findOne({ name });
        if ( !teacher ) return res.status(404).json({ success: false, message: "Teacher not found" });
        res.status(200).json({ success: true, teacher: teacher });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}