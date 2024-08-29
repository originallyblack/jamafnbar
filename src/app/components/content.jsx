import React from 'react'
import Nav from './nav'
import Footer from './footerEx'

export default function Content({children}) {
  return (
    <main className="flex min-h-screen overflow-x-hidden w-screen flex-col items-center justify-top ">
        <Nav/>
        {children}
        <Footer/>
        </main>
  )
}
