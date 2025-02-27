import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";
import axios from "axios";

function AllTeachers() {
  const [teacherList, setTeacherList] = useState([]);
  const [filteredTeacherList, setFilteredTeacherList] = useState([]);
  const [searchID, setSearchID] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  const handleSearch = () => {
    const filteredList = teacherList.filter(teacher => {
      const lowerCaseID = teacher.id.toLowerCase();
      const lowerCaseName = teacher.name.toLowerCase();
      const lowerCasePhone = teacher.phone.toLowerCase();

      const lowerCaseSearchID = searchID.toLowerCase();
      const lowerCaseSearchName = searchName.toLowerCase();
      const lowerCaseSearchPhone = searchPhone.toLowerCase();

      return (lowerCaseID.includes(lowerCaseSearchID) && lowerCaseName.includes(lowerCaseSearchName) && lowerCasePhone.includes(lowerCaseSearchPhone))
    });
    setFilteredTeacherList(filteredList);
  };

  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/teachers/all');
      setTeacherList(res.data.data);
      setFilteredTeacherList(res.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <Header />
        <div className="flex flex-col w-full p-10 bg-gray-50 h-screen">
          <p className="text-3xl font-semibold">Teachers</p>
          <div className="flex justify-start gap-2 flex-row mt-5 mb-10">
            <Link to="/dashboard">Home</Link>
            <p>{">"}</p>
            <Link to="">Teacher</Link>
          </div>
          <div className="">
            <p className="py-5 text-white px-10 text-2xl font-semibold bg-blue-500 rounded-t-lg">
              All Teachers
            </p>
          </div>
          <div className="p-10 bg-white rounded-b-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <input
                type="text"
                placeholder="Search by ID ..."
                value={searchID}
                onChange={(e) => setSearchID(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Search by Name ..."
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Search by Phone ..."
                value={searchPhone}
                onChange={(e) => setSearchPhone(e.target.value)}
                className="border rounded-md px-3 py-2"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
              >
                SEARCH
              </button>
            </div>


            <table className="min-w-full divide-y divide-gray-200 mt-2 border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blood Group</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Religion</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTeacherList.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.gender}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.date_of_birth}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.bloodGroup}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.religion}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.phone}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{teacher.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;