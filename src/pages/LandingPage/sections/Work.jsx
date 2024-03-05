import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from "@/constants/homepage"

const Work = () => {
  return (
    <div className='md:mt-[780px] mt-[920px] bg-gray-100'>
      <div className='relative lg:pl-6 lg:px-0 px-6 sm:pt-20 pt-[300px]'>
        <span className='text-green-950 md:flex md:mb-6 lg:pt-8 justify-center font-bold text-xl capitalize'>
            our work
        </span>
        <div className='max-w-[470px] sm:pt-10 pt-6'>
          <div className='flex flex-col gap-2 sm:gap-6'>
            <h2 className='text-md font-semibold'>Case Studies Are Conducted By Our Team</h2>
            <p className="my-3 text-sm leading-25">
              Each project reflects our commitment to innovation, quality, and client satisfaction.
            </p>
          </div>
        </div>
        <div className='absolute right-0 sm:top-24 flex justify-end sm:pr-16 pr-6'>
          <Link to={'/portfolio'} className="flex items-center hover:underline">
            <span className="mr-2">Explore all Projects</span>
            <ArrowRight />
          </Link>
        </div>
        <div className='sm:pt-0 pt-10'>
          <div className='flex flex-wrap justify-center'>
            {projects.slice(0, 3).map((project, idx) => (
                <Link to={'/portfolio'} key={idx} className='hover:border border-green-900 rounded-lg mb-5 lg:w-[1100px]'>
                  <div className='flex py-5 sm:pl-0 pl-2 sm:grid grid-cols-3 md:w-full sm:mt-1 sm:gap-10 gap-5 justify-center items-center'>
                    <h2 className='font-semibold py-2 flex justify-center'>{project.name}</h2>
                    <img src={project.img} alt="" className='hidden sm:block'/>
                    <p className='sm:text-lg text-sm'>
                      {project.desc}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work