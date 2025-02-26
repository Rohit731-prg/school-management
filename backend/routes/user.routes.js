import { Router } from "express";
import User from "../models/users.model.js";
import bcrypt from "bcrypt";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            email,
        });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/forgot-password", async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({
            email,
        });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post("/register", async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

router.get("/all", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
        console.log(id);
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;