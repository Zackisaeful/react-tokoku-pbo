import React from 'react'
import Header from './Header'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'

const MainLayout = ({ children, showHeader = true, showFooter1 = false }) => {
  return (
    <>
      {showHeader && <Header />}
      {children}
      {showFooter1 ? <Footer1 /> : <Footer2 />}
    </>
  );
};

export default MainLayout