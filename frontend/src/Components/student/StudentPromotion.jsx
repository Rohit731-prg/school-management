import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { Link } from "react-router";

function StudentPromotion() {
    const classes = [5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full h-screen flex flex-col bg-gray-200">
        <Header />
        <div className="w-full h-full p-10">
          <p className="text-3xl font-semibold mb-10">Student</p>
          <div className="flex flex-row gap-2 mb-10 text-lg">
            <Link to="./AdminDashboard">Home</Link>
            <p>{">"}</p>
            <Link className="text-yellow-400">Student Promotion</Link>
          </div>
          <div className="bg-white p-10">
            <p className="text-2xl font-semibold">Search Student Promotion</p>
            <form className="mt-10" action="">
              <div className="grid grid-cols-4 gap-4 ">
                <div className="flex flex-col">
                  <p className="text-lg text-gray-500">Current Session*</p>
                  <input
                    className="bg-gray-300 py-3 mt-5 px-5 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg text-gray-500">Promote Session*</p>
                  <input
                    className="bg-gray-300 py-3 mt-5 px-5 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-lg text-gray-500">Promotion From Class*</p>
                  <select
                    className="bg-gray-300 py-3 mt-5 px-5 rounded-lg"
                    
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls, index) => (
                      <option key={index} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <p className="text-lg text-gray-500">Promotion To Class*</p>
                  <select
                    className="bg-gray-300 py-3 mt-5 px-5 rounded-lg"
                    
                  >
                    <option value="">Select Class</option>
                    {classes.map((cls, index) => (
                      <option key={index} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
              </div>


              <div className="flex flex-row gap-5 mt-10">
                <button 
                type="submit"
                className="py-3 px-10 bg-yellow-600 text-xl text-white rounded-md shadow-sm hover:bg-yellow-700">
                    Save
                </button>
                <button
                className="py-3 px-10 bg-blue-900 text-xl text-white rounded-md shadow-sm hover:bg-blue-800">
                    Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPromotion;
