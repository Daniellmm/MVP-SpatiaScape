// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Orders, Employees, Customers, Ecommerce } from './pages';                            
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './contexts/ContextProvider';
import './App.css';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const App = () => {
  const { activeMenu, isAuthenticated } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          {/* Show Settings button only if authenticated */}
          {isAuthenticated && (
            <div className='fixed right-4 bottom-4' style={{ zIndex: 1000 }}>
              <TooltipComponent content='Settings' position='Top'>
                <button
                  type='button'
                  className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
                  style={{ background: 'blue', borderRadius: '50%' }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          )}

          {/* Show Sidebar only if authenticated */}
          {isAuthenticated && activeMenu && (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          )}

          {/* Main Content Area */}
          <div className={
            `dark:bg-main-bg w-full bg-main-bg min-h-screen ${isAuthenticated && activeMenu ? 'md:ml-72' : ''}`
          }>
            {/* Show Navbar only if authenticated */}
            {isAuthenticated && (
              <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                <Navbar />
              </div>
            )}

            {/* Routes */}
            <div>
              <Routes>
                {/* Routes that are accessible to all */}
                <Route path='/' element={<Layout><LandingPage /></Layout>} />
                <Route path='/features' element={<Layout><Features /></Layout>} />
                <Route path='/pricing' element={<Layout><Pricing /></Layout>} />
                <Route path='/docs' element={<Layout><Docs /></Layout>} />
                <Route path='/contact' element={<Layout><Contact /></Layout>} />

                
                <Route
                  path='/login'
                  element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn />}
                />
                <Route
                  path='/signup'
                  element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />}
                />

                {/* Routes that are only accessible if authenticated */}
                <Route
                  path='/dashboard'
                  element={isAuthenticated ? <Ecommerce /> : <Navigate to="/login" />}
                />
                <Route
                  path='/upload'
                  element={isAuthenticated ? <Orders /> : <Navigate to="/login" />}
                />
                <Route
                  path='/view-all-properties'
                  element={isAuthenticated ? <Employees /> : <Navigate to="/login" />}
                />
                <Route
                  path='/settings'
                  element={isAuthenticated ? <Customers /> : <Navigate to="/login" />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>

      {/* Add ToastContainer for displaying toasts */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;