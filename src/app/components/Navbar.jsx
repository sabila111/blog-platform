import Link from 'next/link'
import React from 'react'
import LoginButton from './LoginButton'


export default function Navbar() {
  return (
    <div>
        <nav className=" w-11/12 mx-auto  rounded-b-xl">
      <div className="container mt-5 flex justify-between items-center px-4">
        
        <Link href="/" className="text-blue-300 text-3xl font-extrabold tracking-wide hover:text-blue-300 transition duration-300 ease-in-out">
            BlogFlow
        </Link>

        
        <div className="flex space-x-4">
          <LoginButton></LoginButton>
          
          <Link href="/register" className="bg-white border-2 border-blue-800  text-blue-800 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Register
          </Link>
        </div>
      </div>
    </nav>
    </div>
  )
}
