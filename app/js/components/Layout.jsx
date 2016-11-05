import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Overview from './Overview'

const Layout = () => {
  return (
    <div className='layout'>
      <Header />

      <Overview />

      <Footer />
    </div>
  )
}

export default Layout
