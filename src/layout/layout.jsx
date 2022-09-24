import React from 'react';
import Navbar from '../components/header/header'
import Footer from '../components/Footer'

export default function layout({children}) {
  return (
    <div>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
    </div>
  );
}
