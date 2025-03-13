
import React from 'react';
import MainNavBar from './MainNavBar';
const Layout = ({ children }) => {
  return (
    <>
      <MainNavBar />
      {children}
    </>
  );
};

export default Layout;