import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
import userRoutes from "./routes/user.routes.js";
import StudentRoutes from "./routes/student.routes.js";
import TeacherRoutes from "./routes/teacher.routes.js"
import cors from "cors";

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", productRoutes);
app.use("/user", userRoutes);
app.use("/student", StudentRoutes);
app.use("/teachers",TeacherRoutes);

const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

