import React from 'react'

export default function Banner() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8'>
      {/* Main title */}
      <p className='text-3xl sm:text-4xl lg:text-5xl text-blue-400 font-bold mb-8 text-center'>
        Welcome to BlogFlow
      </p>

      {/* Content box */}
      <div className='bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 max-w-4xl w-full text-center'>
        {/* Sub-headline */}
        <p className='text-sm sm:text-lg text-gray-700 mb-4'>
          Share your thoughts, experiences, and stories with our growing community of writers and readers.
        </p>
        <p className='text-lg sm:text-xl text-gray-700 mb-8'>
          Join us in creating meaningful conversations through engaging blog posts.
        </p>

        {/* Feature cards container */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          {/* Write & Share Card */}
          <div className='bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Write & Share</h3>
            <p className='text-gray-600 text-sm'>
              Create beautiful blog posts and share your unique perspective with the world.
            </p>
          </div>

          {/* Connect Card */}
          <div className='bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Connect</h3>
            <p className='text-gray-600 text-sm'>
              Join a community of passionate writers and engage with like-minded readers.
            </p>
          </div>

          {/* Discover Card */}
          <div className='bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-center justify-center'>
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>Discover</h3>
            <p className='text-gray-600 text-sm'>
              Explore diverse topics and perspectives from our growing collection of posts.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className='flex  justify-center gap-4'>
          <button className='bg-white border-2 border-blue-800 text-blue-800 text-xl font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
            Start Writing
          </button>
          <button className='bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105'>
            Explore Blogs
          </button>
        </div>
      </div>
    </div>
  )
}
