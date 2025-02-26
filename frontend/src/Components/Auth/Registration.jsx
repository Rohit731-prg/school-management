import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';

function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'Admin'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/user/register', formData);

            if (res.data) {
                toast.success('Registration Successful!');
            }
            setFormData({ name: '', email: '', password: '', role: '' });
        } catch (error) {
            console.log(error.response.data);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
            <form method="post" className="bg-white w-1/3 backdrop-blur-md rounded-lg shadow-lg max-w-md p-8 mt-10 border-black border-2">
                <h1 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Registration</h1>
                <>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="block w-full px-4 py-2 mb-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-black" />
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="block w-full px-4 py-2 mb-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-black" />
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} className="block w-full px-4 py-2 mb-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-black" />
                    <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2 mt-4">Role</label>
                    <select name="role" id="role" value={formData.role} onChange={handleChange} className="block w-full px-4 py-2 mb-4 border-2 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 border-black">
                        <option value="Admin">Admin</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Student">Student</option>
                    </select>
                    <div className="flex justify-center px-20">
                        <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline px-4 py-2 border-black border-2">Register</button>
                    </div>
                </>
            </form>
            <Toaster />
        </div>
    );
}

export default Registration;

