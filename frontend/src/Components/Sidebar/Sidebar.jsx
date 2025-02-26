import { FaSchool } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { PiExam, PiNotificationDuotone } from "react-icons/pi";
import { Link, useNavigate } from "react-router";
import { store } from "../../utils/store";
import { TiMessages, TiRefreshOutline } from "react-icons/ti";
import { IoLibraryOutline } from "react-icons/io5";
import { FaHandPaper } from "react-icons/fa";

const Sidebar = () => {
    const navigate = useNavigate();
    const Library = (value) => {
        navigate(value);
    }

    const Class = (value) => {
        navigate(value);
    }

    return (
        <div className="flex flex-col sticky top-20 bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg pt-8">
            <div className="w-64 sticky h-screen overflow-y-auto">
                <div className="mb-6">
                    <div className="flex items-center justify-center">
                        <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="user" className="w-16 h-16 rounded-full" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-white text-lg font-semibold">{store.getState().role.value}</h1>
                        <h1 className="text-gray-400 text-sm font-semibold">{store.getState().name.value}</h1>
                    </div>
                </div>
                {[
                    { to: "/StudentDashboard", icon: <MdDashboard size={24} />, text: "Dashboard" },
                    { to: "/notice", icon: <PiNotificationDuotone size={24} />, text: "Notice" },
                    { to: "/attendance", icon: <FaHandPaper  size={24} />, text: "Attendence" },
                    { to: "/exam-schedule", icon: <PiExam size={24} />, text: "Exam Schedule" },
                    { to: "/routine", icon: <PiExam size={24} />, text: "Routine" },
                    { to: "/hostel", icon: <FaSchool size={24} />, text: "Hostel" },
                    { to: "/message", icon: <TiMessages size={24} />, text: "Message" },
                    { to: "/Result", icon: <TiRefreshOutline size={24} />, text: "Result" }
                ].map((item, index) => (
                    <Link key={index} to={item.to}>
                        <div className="p-3 flex items-center gap-3 hover:bg-gray-700 transition duration-300 ease-in-out">
                            <span className="text-white">{item.icon}</span>
                            <h1 className="text-white text-base font-semibold">{item.text}</h1>
                        </div>
                    </Link>
                ))}
                <select
                    onChange={(e) => Class(e.target.value)}
                    className="bg-transparent w-full p-3 my-1 flex items-center gap-3 hover:bg-gray-700 transition duration-300 ease-in-out text-white text-base border border-gray-600 rounded-md">
                    <option value="">Student</option>
                    <option value="/StudentAdmissionForm">Student Addmition Form</option>
                    <option value="/FindStudent">All Students</option>
                    <option value="/StudentPromotion">Student Promotion form</option>
                </select>
                <select
                    onChange={(e) => Class(e.target.value)}
                    className="bg-transparent w-full p-3 my-1 flex items-center gap-3 hover:bg-gray-700 transition duration-300 ease-in-out text-white text-base border border-gray-600 rounded-md">
                    <option value="">Teacher</option>
                    <option value="/AddTeacher">Add Teacher</option>
                    <option value="/AllTeachers">All Teachers</option>
                </select>
                <select
                    onChange={(e) => Library(e.target.value)}
                    className="bg-transparent w-full p-3 my-1 flex items-center gap-3 hover:bg-gray-700 transition duration-300 ease-in-out text-white text-base border border-gray-600 rounded-md">
                    <option value="">Library</option>
                    <option value="/Addbook">Add Books</option>
                    <option value="/BookList">All Books</option>
                </select>
                <select
                    onChange={(e) => Class(e.target.value)}
                    className="bg-transparent w-full p-3 my-1 flex items-center gap-3 hover:bg-gray-700 transition duration-300 ease-in-out text-white text-base border border-gray-600 rounded-md">
                    <option value="">Class</option>
                    <option value="/AddClass">Add Class</option>
                    <option value="/classList">All Classes</option>
                </select>
            </div>
        </div>
    );
};

export default Sidebar;
