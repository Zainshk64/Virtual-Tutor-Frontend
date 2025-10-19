import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BackToTopButton from '../hooks/BackToTopButton'

const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <BackToTopButton/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout