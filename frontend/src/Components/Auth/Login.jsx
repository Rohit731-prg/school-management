import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'

const Login = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:3000/user/login", {
                email: e.target.email.value,
                password: e.target.password.value,
            });

            if (data) {
                toast.success("Login Successful");
                setTimeout(() => {
                    window.location.href = `/${data.role}dashboard`;
                }, 1000);
            }
            
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.success("Login failed",{
                    icon: '🔥',
                });
            }
        }
    }

    return (
        <>
            <div className="h-screen w-screen bg-gray-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-10 w-96">
                    <div className="flex justify-center items-center">
                        <img src="https://api.dicebear.com/9.x/lorelei/svg" alt="user" className="w-16 h-16 rounded-full border-2 border-white shadow-md shadow-black/50" />
                    </div>
                    <div className="text-center mt-3">
                        <h1 className="text-4xl font-semibold">Login</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5">
                            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
                            <input type="email" id="email" placeholder="Email" className="block w-full px-4 py-2 mt-2 text-lg rounded-lg shadow-sm" name="email" />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="password" className="block text-lg font-semibold">Password</label>
                            <input type="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-lg rounded-lg shadow-sm" name="password" />
                        </div>
                        <div className="flex justify-center items-center gap-4 mt-5">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <Toaster/>
        </>
    );
}

export default Login;

