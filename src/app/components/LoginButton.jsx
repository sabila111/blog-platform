'use client'
import React from 'react'
import {  signIn, signOut } from "next-auth/react"
export default function  LoginButton() {
  return (
    <div >
       <button
           onClick={() => signIn()}
           className="bg-blue-800  text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Login
          </button>
    </div>
  )
}
