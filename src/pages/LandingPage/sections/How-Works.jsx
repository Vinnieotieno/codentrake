import React from 'react'
import getstarted from '../../../assets/getstarted.png'

const Howworks = () => {
  return (
    <div className='bg-gray-100 h-[570px]'>
      <div className='relative lg:pl-6 lg:px-0 px-6 pt-20'>
        <span className='text-green-950 md:flex md:mb-6 lg:pt-8 justify-center font-bold text-xl capitalize'>
            How it Works
        </span>
        <div className='lg:max-w-[600px] max-w-[400px] md:space-y-10 sm:pt-20 pt-6 lg:pl-60'>
          <div className='flex flex-col gap-2 sm:gap-6'>
            <h2 className='text-md font-semibold'>Get started in 3 easy steps</h2>
            <p className="my-3 text-sm leading-25">
            Getting started and completing your project is a seamless process with us. Let's make your vision a reality together.
            </p>
          </div>
          <button className='flex justify-center hover:bg-green-900 md:mx-0 mx-auto py-2 rounded-md text-white px-4 bg-green-800'>
            Book a Call
          </button>
        </div>
        <div className='md:absolute flex justify-center md:justify-end mt-8 md:right-0 2xl:right-20 md:top-32 sm:pr-16'>
          <img src={getstarted} alt="" className='flex w-[300px] lg:w-[500px]'/>
        </div>
      </div>
    </div>
  )
}

export default Howworks