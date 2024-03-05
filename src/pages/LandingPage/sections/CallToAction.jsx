import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='bg-gray-100 h-[400px]'>
      <div className='lg:pb-20 pb-10'/>
      <div className='relative lg:pl-6 lg:px-0 px-6 pt-20 bg-green-200 md:mx-20 md:rounded-xl'>
        <div className='flex justify-between sm:flex-row gap-8 flex-col pb-20 items-center lg:ml-60'>
          <div className='flex flex-col gap-1 sm:gap-4'>
            <p className="my-3 text-sm leading-25">
              Got a project or partnership in mind?
            </p>
            <h2 className='text-3xl font-semibold capitalize'>let's talk</h2>
          </div>
          <Link to={'/contact'} className='md:right-0 flex hover:bg-green-900 lg:mr-60 mx-auto py-2 rounded-md text-white px-4 bg-green-800'>
            Contact Us <ArrowRight className='ml-2 pl-1'/> 
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CallToAction