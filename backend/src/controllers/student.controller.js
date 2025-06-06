import Student from "../models/student.model.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import cloudinary from "../../config/cloudinary.js";

export const registration = async (req, res) => {
  const {
    name,
    date_of_birth,
    roll,
    email,
    gender,
    blood_group,
    className,
    section,
    parent,
    phone,
    religion,
    address,
    photo,
    password,
  } = req.body;
  if (
    !name ||
    !date_of_birth ||
    !roll ||
    !email ||
    !gender ||
    !blood_group ||
    !className ||
    !section ||
    !parent ||
    !phone ||
    !religion ||
    !address ||
    !photo ||
    !password
  ) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  try {
    const student = await Student.findOne({ email });
    if ( student ) return res.status(400).json({ success: false, message: "Student already exists" });
    
    const hashedPass = await bcrypt.hash(password, 10);
    const photoUrl = await cloudinary.uploader.upload(photo);
    const url = photoUrl.secure_url;

    const newStudent = new Student({
      name,
      date_of_birth,
      roll,
      email,
      gender,
      blood_group,
      className,
      section,
      parent,
      phone,
      religion,
      address,
      photo: url,
      password: hashedPass,
    });
    await newStudent.save();

    res.status(201).json({ success: true, message: "Student registered successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if( !email || !password ) return res.status(400).json({ success: false, message: "Email and password are required" });

  try {
    const student = await Student.findOne({ email });
    if ( !student ) return res.status(404).json({ success: false, message: "Student not found" });

    const isMatch = await bcrypt.compare(password, student.password);
    if ( !isMatch ) return res.status(400).json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { id: student._id, role: student.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    });

    res.status(200).json({ success: true, message: "Login successful", student: student, role: student.role });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
}

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, students: students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getStudentByName = async (req, res) => {
  const { name } = req.params;
  try {
    const student = await Student.findOne({ name });
    if (!student) return res.status(404).json({ success: false, message: "Student not found" });
    res.status(200).json({ success: true, student: student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}