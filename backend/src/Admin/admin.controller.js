import cloudinary from "../../config/cloudinary.js";
import sendMail from "../../config/nodemailer.js";
import Admin from "./admin.model.js";
import bcrypt from "bcryptjs";

export const createAdmin = async (req, res) => {
  const { name, email, phone, password, profileImage } = req.body;
  if (!name || !email || !phone || !password)
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });

  try {
    const admin = await Admin.findOne({ email });
    if (admin)
      return res
        .status(400)
        .json({ success: false, message: "Admin already exists" });

    let IMAGE_URL = "";
    if (!profileImage) {
      IMAGE_URL = "https://cdn-icons-png.flaticon.com/128/7542/7542296.png";
    } else {
      const URL = await cloudinary.uploader.upload(profileImage);
      IMAGE_URL = URL.secure_url;
    }

    let otp = Math.floor(1000 + Math.random() * 9000);
    try {
      sendMail(email, `Your OTP is ${otp}`);
    } catch (emailError) {
      return res.status(500).json({
        success: false,
        message: "Failed to send OTP email",
        error: emailError.message,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({
      name,
      email,
      phone,
      password: hashedPassword,
      profileImage: IMAGE_URL,
      OTP: otp,
    });
    await newAdmin.save();

    res.status(201).json({
      success: true,
      message: "OTP sent successfully",
      admin: newAdmin,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const compliteRegistration = async (req, res) => {
  const { otp } = req.body;
  const { id } = req.params;
  if (!otp) return res.status(400).json({ success: false, message: "OTP is required" });
  
  try {
    const admin = await Admin.findById(id);
    if ( !admin ) return res.status(404).json({ success: false, message: "Admin not found" });

    if (admin.OTP !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
    admin.isAuth = true;
    await admin.save();
    res.status(200).json({ success: true, message: "Registration completed successfully", admin: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  if ( !email || !password ) return res.status(400).json({ success: false, message: "Email and password are required" });
  try {
    const admin = await Admin.findOne({ email });
    if ( !admin ) return res.status(404).json({ success: false, message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if ( !isMatch ) return res.status(400).json({ success: false, message: "Password is incorrect" });

    res.status(200).json({ success: true, message: "Login successful", admin: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if ( !email ) return res.status(400).json({ success: false, message: "Email is required" });
  try {
    const admin = await Admin.findOne({ email });
    if ( !admin ) return res.status(404).json({ success: false, message: "Admin not found" });

    let otp = Math.floor(1000 + Math.random() * 9000);
    try {
      sendMail(email, `Your OTP is ${otp}`);
    } catch (emailError) {
      return res.status(500).json({
        success: false,
        message: "Failed to send OTP email",
        error: emailError.message,
      });
    }

    admin.OTP = otp;
    await admin.save();
    res.status(200).json({ success: true, message: "OTP sent successfully", admin: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const resetPassword = async (req, res) => {
  const { email, otp, password } = req.body;
  if ( !otp || !password ) return res.status(400).json({ success: false, message: "OTP and password are required" });
  try {
    const admin = await Admin.findOne({ email });
    if ( !admin ) return res.status(404).json({ success: false, message: "Admin not found" });

    if (admin.OTP !== otp) return res.status(400).json({ success: false, message: "Invalid OTP" });

    const oldPass = await bcrypt.compare(password, admin.password);
    if( oldPass ) return res.status(400).json({ success: false, message: "New password cannot be same as old password" });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    admin.password = hashedPassword;
    await admin.save();
    res.status(200).json({ success: true, message: "Password reset successful", admin: admin });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json({ success: true, admins: admins });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}