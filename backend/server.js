import express from "express";
import connectDB from "./config/db.js";
import Product from "./models/products.model.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.json({ success: true, data: products });
})


app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product) {
        return res.status(400).json({ success: false, message: "Please fill all the fields" });
    }
    const newProduct = new Product(product);
    try {
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

