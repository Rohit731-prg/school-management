import Student from "../src/models/student.model.js";
import Teacher from "../src/models/teacher.model.js";

export const LoginWithAuth = async (req, res) => {
    const { id } = req.id;
    const { role } = req.role;

    try {
        if (role === "Student") {
            const student = await Student.findById(id).select("-password");
            if (!student) {
                return res.status(404).json({
                    success: false,
                    message: "Student not found"
                });
            }
            res.status(200).json({
                success: true,
                data: student,
                role: student.role
            });
        } else if (role === "Teacher") {
            const teacher = await Teacher.findById(id).select("-password");
            if (!teacher) {
                return res.status(404).json({
                    success: false,
                    message: "Teacher not found"
                });
            }
            res.status(200).json({
                success: true,
                data: teacher,
                role: teacher.role
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        })
    }
}