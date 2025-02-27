import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router";
import axios from "axios";

function FindStudent() {
  const [StudentList, setStudentList] = useState(null)
  const getData = async () => {
    const res = await axios.get('http://localhost:3000/student/all');
    console.log(res.data.data)
    setStudentList(res.data.data);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <div className="flex h-full">
        <Sidebar />
      <div className=" w-screen h-full min-h-screen bg-gray-50 ">
        <Header />
        <div className="max-w-7xl mx-auto mt-10">
          <p className="text-3xl font-semibold mb-10">Student</p>
          <div className="my-10 flex flex-row gap-3">
            <Link to='/AdminDashboard'>Home</Link>
            <p>{'>'}</p>
            <Link>Student</Link>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-blue-600">
              <h2 className="text-xl font-semibold text-white">
                All Students Data
              </h2>
            </div>

            {/* Search Section */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search by Roll ..."
                  className="border rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Search by Name ..."
                  className="border rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Search by Class ..."
                  className="border rounded-md px-3 py-2"
                />
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 flex items-center justify-center"
                >
                  SEARCH
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Roll
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Photo
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Gender
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Class
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Section
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Parents
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Address
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date Of Birth
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        E-mail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {StudentList && StudentList.map((student, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.roll}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <img src={student.photo} alt="" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.gender}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.class}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.section}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.parent}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.address}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.date_of_birth}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {student.email}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FindStudent