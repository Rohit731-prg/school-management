import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (role) => async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email: credentials.username,
        password: credentials.password,
      });

      if (response.data) {
        toast.success("Login Successful");
        dispatch({ type: "ASSIGN_ROLE", payload: role });
        dispatch({ type: "ASSIGN_NAME", payload: credentials.username });
        setTimeout(() => {
          role === "Admin"
            ? navigation("/AdminDashboard")
            : role === "Teacher"
            ? navigation("/TeacherDashboard")
            : navigation("/StudentDashboard");
          setCredentials({ username: "", password: "" });
        }, 1000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen bg-[#f0f0f0]">
      <ToastContainer />
      <div className="bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 bg-blend-overlay">
        <div className="border-2 p-10 border-black rounded-lg flex flex-col justify-center items-center">
          <div>
            <img
              src="https://www.pngkey.com/png/detail/67-670748_blessings-school-building-school-building-school-logo-png.png"
              alt="user"
              className="w-20 h-20 rounded-full"
            />
          </div>
          <h1 className="text-4xl font-semibold">Sign In</h1>
          <Tabs className="mt-10">
            <TabList default={1} className="flex flex-col lg:flex-row justify-center md:flex-col gap-2 selection:cursor-not-allowed">
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Admin
              </Tab>
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Teacher
              </Tab>
              <Tab selectedClassName="bg-white text-purple-500 font-semibold" className="outline-none transition-all delay-50 bg-gray-200 focus:text-purple-500 focus:font-semibold focus:bg-white cursor-pointer mx-4 px-4 py-2 rounded-lg">
                Sign In as Student
              </Tab>
            </TabList>
            {["Admin", "Teacher", "Student"].map((role) => (
              <TabPanel key={role}>
                <form
                  onSubmit={handleSubmit(role)}
                  className="flex flex-col px-20 py-10 bg-gray-200 mt-10 rounded-xl gap-2"
                  name={role}
                >
                  <p className="text-2xl">UserName</p>
                  <input
                    type="text"
                    name="username"
                    required
                    value={credentials.username}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                  />
                  <p className="text-2xl">Password</p>
                  <input
                    type="password"
                    name="password"
                    required
                    value={credentials.password}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-lg transition-opacity duration-500 outline-purple-300 focus:text-3xl"
                  />
                  <input
                    type="submit"
                    value="Sign In"
                    className="cursor-pointer px-4 py-2 rounded-lg bg-blue-500 text-white mt-10"
                  />
                </form>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Login;

