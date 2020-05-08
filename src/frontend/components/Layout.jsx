import React from 'react';
import Footer from './Footer';
import '../assets/styles/app.scss';

const Layout = ({ children }) => (
  <div className='App'>
    {children}
    <Footer />
  </div>
);

export default Layout;
