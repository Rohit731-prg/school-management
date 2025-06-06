import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import StudentRoutes from './src/routes/student.route.js';
import TeacherRoutes from './src/routes/teacher.route.js';
import LibraryRouters from './src/routes/library.route.js';
import ClassRouter from './src/routes/class.route.js';
import MessageRouter from './src/routes/message.route.js';
import cookieParser from 'cookie-parser';
import { verifyToken } from './middleware/verifyJWTForStudent.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use('/api/auth', verifyToken);
app.use('/api/students', StudentRoutes);
app.use('/api/teachers', TeacherRoutes);
app.use('/api/library', LibraryRouters);
app.use('/api/classes', ClassRouter);
app.use('/api/messages', MessageRouter);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.error("Failed to connect to the database:", error.message);
    process.exit(1);
});