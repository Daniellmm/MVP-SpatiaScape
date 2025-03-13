// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { jwtDecode } from 'jwt-decode';

// const StateContext = createContext();

// const initialState = {
//     chat: false,
//     cart: false,
//     userProfile: false,
//     notification: false,
// }

// export const ContextProvider = ({ children }) => {
//     const [activeMenu, setActiveMenu] = useState(true);
//     const [isClicked, setIsClicked] = useState(initialState);
//     const [screenSize, setScreenSize] = useState(undefined);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     const checkTokenExpiry = () => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);
//                 if (decoded.exp * 1000 < Date.now()) {
//                     logout();
//                 }
//             } catch (error) {
//                 console.error("Invalid token:", error);
//                 logout();
//             }
//         }
//     };

//     useEffect(() => {
//         checkTokenExpiry(); // Check token expiry on mount

//         const interval = setInterval(checkTokenExpiry, 1000 * 30); // Check every 30 seconds

//         return () => clearInterval(interval); // Clear interval on unmount
//     }, []);

//     const logout = () => {
//         localStorage.removeItem('token');
//         setIsAuthenticated(false);
//         window.location.href = '/';
//     };

//     const handleClick = (clicked) => {
//         setIsClicked({
//             ...initialState, [clicked]: true
//         });
//     }

//     return (
//         <StateContext.Provider value={{
//             activeMenu, setActiveMenu,
//             isClicked, setIsClicked, handleClick,
//             screenSize, setScreenSize,
//             isAuthenticated, setIsAuthenticated,
//             logout
//         }}>
//             {children}
//         </StateContext.Provider>
//     )
// }

// export const useStateContext = () => useContext(StateContext);




import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to check token expiry
    const checkTokenExpiry = () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                if (decoded.exp * 1000 < Date.now()) {
                    logout();
                    toast.error('Your session has expired. Please log in again.');
                } else {
                    setIsAuthenticated(true); 
                }
            } catch (error) {
                console.error("Invalid token:", error);
                logout();
            }
        }
    };
    
    // Check token expiry on mount and set up an interval for continuous checks
    useEffect(() => {
        checkTokenExpiry(); 

        // Set up an interval to check token expiry every 30 seconds
        const interval = setInterval(checkTokenExpiry, 1000 * 30); 

        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, []);

    // Logout function
    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        window.location.href = '/'; // Redirect to login page
    };

    const handleClick = (clicked) => {
        setIsClicked({
            ...initialState, [clicked]: true
        });
    };

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            isClicked, setIsClicked, handleClick,
            screenSize, setScreenSize,
            isAuthenticated, setIsAuthenticated,
            logout
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);