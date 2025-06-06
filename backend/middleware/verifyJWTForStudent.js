import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const verifyToken = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        });
    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decode.id;
        req.role = decode.role;
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
}