import { Router } from "express";
import Product from "../models/products.model.js";

const router = Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.post("/products", async (req, res) => {
    const product = req.body;

    if (!product) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }

    try {
        const newProduct = new Product(product);
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

router.delete("/products/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
