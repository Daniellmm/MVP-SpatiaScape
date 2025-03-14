import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const MainNavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Navigation function for all links
    const navigateTo = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    // Function to check if the current path matches the menu item path
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-white/40 backdrop-blur-md shadow-md'
            : 'bg-transparent'
            }`}>
            <div className='w-full overflow-hidden text-black py-5 px-8 md:px-20 lg:px-32'>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <div
                        className='flex items-baseline font-bold cursor-pointer'
                        onClick={() => navigateTo('/')}
                    >
                        <h1 className='text-xl md:text-2xl'>S</h1>
                        <h1 className='text-xl md:text-xl'>patiaScape</h1>
                    </div>

                    {/* Menu Icon for Mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu}>
                            {isOpen ? (
                                <HiX className='text-3xl' />
                            ) : (
                                <HiMenu className='text-3xl' />
                            )}
                        </button>
                    </div>

                    {/* Nav Links (hidden on mobile, shown on medium screens and up) */}
                    <div className='hidden md:flex'>
                        <ul className='flex space-x-5 md:space-x-10 lg:space-x-20'>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/features') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/features')}
                            >
                                Features
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/pricing') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/pricing')}
                            >
                                Pricing
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/docs') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/docs')}
                            >
                                Docs
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/contact')}
                            >
                                Contact
                            </li>
                        </ul>
                    </div>

                    <div className='hidden md:block lg:flex gap-x-5'>
                        <button
                            onClick={() => navigate('/login')}
                            className='bg-Btn text-white rounded-lg font-bold text-sm md:text-sm py-3 md:py-3 px-4 md:px-5 border-black  hover:text-white transition-transform duration-500'>
                            Log In
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className='border-blue-600 border-2 text-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] rounded-lg font-bold text-sm md:text-sm py-3 md:py-3 px-4 md:px-5   hover:text-white transition-all duration-500'>
                            <span
                                className="text-sm md:text-sm font-bold bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] bg-clip-text text-transparent">
                                Start for Free</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className='md:hidden mt-4 bg-white/80 backdrop-blur-md rounded-lg p-4 shadow-md'>
                        <ul className='flex flex-col space-y-4'>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/features') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/features')}
                            >
                                Features
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/pricing') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/pricing')}
                            >
                                Pricing
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/docs') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/docs')}
                            >
                                Docs
                            </li>
                            <li
                                className={`font-semibold text-lg md:text-sm cursor-pointer hover:text-gray-600 transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
                                onClick={() => navigateTo('/contact')}
                            >
                                Contact
                            </li>
                            <li>
                                <button
                                    onClick={() => navigateTo('/login')}
                                    className='bg-Btn text-white rounded-lg font-bold text-lg py-3 px-6 w-full hover:bg-black hover:text-white transition duration-500'>
                                    Log In
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => navigate('/signup')}
                                    className='border-blue-600 border-2 text-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] rounded-lg font-bold text-sm md:text-sm py-3 md:py-3 px-4 md:px-5   hover:text-white transition-all duration-500'>
                                    <span
                                        className="text-sm md:text-sm font-bold bg-[linear-gradient(to_top,#4481eb_0%,#04befe_100%)] bg-clip-text text-transparent">
                                        Start for Free</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MainNavBar;