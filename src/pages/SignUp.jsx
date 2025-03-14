import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/Api';
import { useStateContext } from '../contexts/ContextProvider';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setIsAuthenticated } = useStateContext();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await API.post('/auth/sign-up', formData);

            // Store token and redirect
            // localStorage.setItem('token', response.data.data.token);
            const token = response.data.data.token;
            localStorage.setItem('token', token);

            setIsAuthenticated(true);
            toast.success('Account Created Successfully!')

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
            setError(err.response?.data?.error || 'Registration failed');
            toast.error(err.response?.data?.error || 'Registration failed');
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

        <div className='h-screen w-full flex flex-col bg-white '>
            <div
                className='lg:pl-20 lg:pt-12 px-10 py-10 flex items-baseline font-bold cursor-pointer'
                onClick={() => navigate('/')}
            >
                <h1 className='text-xl md:text-2xl'>S</h1>
                <h1 className='text-xl md:text-xl'>patiaScape</h1>
            </div>
            <div className="auth-container h-full flex flex-col justify-center items-center">
                <h2 className='lg:text-3xl text-center font-bold pb-3'>Create Account</h2>
                {/* {error && <div className="error-message pb-2 text-xs flex justify-center text-red-500 font-semibold">{error}</div>} */}

                <form onSubmit={handleSubmit} className='bg-stone-200 shadow-xl rounded-lg px-16 py-10'>
                    <div className="form-group flex flex-col">
                        <label className='pb-2'>Name</label>
                        <input
                            type="text"
                            name="name"
                            className='rounded-lg p-2 bg-white'
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group flex flex-col pt-5">
                        <label className='pb-2'>Email</label>
                        <input
                            type="email"
                            name="email"
                            className='rounded-lg p-2 bg-white'
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
                                className='text-xs cursor-pointer'
                            >
                                {showPassword ? "Hide" : "Show"}
                            </p>
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className='rounded-lg p-2 bg-white'
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength="6"
                        />
                    </div>

                    <div className='flex justify-center  pt-6'>
                        <button
                            className='p-3 bg-Btn font-semibold text-white text-sm rounded hover:bg-white hover:text-black hover:border border-black'
                            type="submit"
                            disabled={loading}>
                            {loading ? 'Creating Account...' : 'Sign Up'}
                        </button>
                    </div>
                </form>

                <p className='flex justify-center pt-5'>
                    Already have an account?{' '}
                    <button
                        className=' italic text-blue-500'
                        onClick={() => navigate('/login')}>
                        Sign In
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUp;