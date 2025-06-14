'use client'

import Link from 'next/link'
import React from 'react'
import LoginButton from './LoginButton'
// import UserInfo from './UserInfo'

export default function Navbar() {
  return (
    <nav className=" bg-gradient-to-r pt-5 from-blue-50 to-white">
      <div className="w-11/12 mx-auto  px-4 rounded-b-xl flex justify-between items-center">
        
        
        <Link href="/" className="text-blue-400 text-3xl font-extrabold tracking-wide hover:text-blue-400 transition duration-300">
          BlogFlow
        </Link>

        
        <div className="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/create-blog" className="hover:text-blue-600 transition">Create Blog</Link>
          <Link href="/all-blogs" className="hover:text-blue-600 transition">All Blog</Link>
          <Link href="/ask-ai" className="hover:text-blue-600 transition">Ask AI</Link>
        </div>

        
        <div className="flex space-x-4">
          <LoginButton />
          {/* <UserInfo /> */}
          <Link
            href="/register"
            className="bg-white border-2 border-blue-800 text-blue-800 font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  )
}
