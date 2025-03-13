import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/Api';
import { useStateContext } from '../contexts/ContextProvider';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setIsAuthenticated } = useStateContext();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await API.post('/auth/sign-in', formData);
            console.log("Response from backend:", response.data);

            const token = response.data.data.token;
            localStorage.setItem('token', token);

            setIsAuthenticated(true);

            // Decode token and calculate expiry time
            const decoded = jwtDecode(token);
            const expiresIn = decoded.exp * 1000 - Date.now();

            // Set a timeout to log out the user when the token expires
            setTimeout(() => {
                setIsAuthenticated(false);
                localStorage.removeItem('token');
                navigate('/');
            }, expiresIn);



            navigate('/dashboard');

        } catch (err) {
            console.error("Error:", err.response?.data);
            setError(err.response?.data?.error || 'Authentication failed');
            toast.error(err.response?.data?.error || 'Authentication failed');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='h-screen w-full flex bg-gray-200 justify-center items-center'>
            <div className="auth-container">
                <h2 className='lg:text-3xl text-center font-bold pb-3'>Welcome Back</h2>
                {/* {error && <div className="error-message pb-2 text-xs flex justify-center text-red-500 font-semibold">{error}</div>} */}

                <form onSubmit={handleSubmit} className='bg-light-gray shadow-xl rounded-lg px-16 py-10'>
                    <div className="form-group flex flex-col">
                        <label className='pb-2'>Email</label>
                        <input
                            type="email"
                            name="email"
                            className='rounded-lg p-2 bg-gray-200'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group flex flex-col pt-5">
                        <div className='flex justify-between items-baseline'>
                            <label className='pb-2'>Password</label>
                            <p
                                onClick={() => setShowPassword(!showPassword)}
                                className='text-xs cursor-pointer'>
                                {showPassword ? "Hide" : "Show"}
                            </p>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className='rounded-lg p-2 bg-gray-200'
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className='flex justify-center pt-6'>
                        <button
                            className='p-3 bg-black font-semibold text-white text-sm rounded hover:bg-white hover:text-black hover:border border-black'
                            type="submit"
                            disabled={loading}>
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </div>
                </form>

                <p className='flex justify-center pt-5'>
                    Don't have an account? {' '}
                    <button
                        className='italic text-blue-500'
                        onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignIn;