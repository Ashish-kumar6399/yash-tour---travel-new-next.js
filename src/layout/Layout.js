import React from 'react'
import Navbar from './navbar/navbar'
import Footer from './footer/Footer'
import Head from 'next/head'
import UpperNavbar from './navbar/Uppernavbar'
import Whatsapp from '@/components/Whatsapp'

function Layout({ children }) {
  return (
    <div>
        {/* Navbar */}
        <Head>
            <title>Yash Tour & Travels</title>
            <meta name="description" content="Yash Tour & Travels - Your trusted partner for comfortable, reliable, and affordable journeys." />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <UpperNavbar />
        {/* <Navbar /> */}
    
        {/* Main Content */}
        <main>{children}</main>
    
        {/* Footer */}
        <Whatsapp/>    
        <Footer />
    </div>
  )
}

export default Layout