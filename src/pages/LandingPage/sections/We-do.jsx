import { ArrowRight } from 'lucide-react'
import { services } from '@/constants/landingpage'
import React from 'react'
import { Link } from 'react-router-dom'

const Wedo = () => {
  return (
    <div className='absolute top-[468px] sm:mt-8 mt-10 sm:top-[600px] w-full max-w-[1600px]'>
        <div className='relative sm:h-[800px] px-6 h-[970px] sm:pt-40 pt-36 bg-gray-100'>
          <span className='text-green-950 sm:pt-0 pt-10 md:flex mb-10 justify-center font-bold text-xl capitalize'>
            what we do
          </span>
          <div className='max-w-[470px] sm:mt-0 mt-5 sm:mb-8'>
            <div className='flex flex-col gap-2 sm:gap-6'>
              <h2 className='text-md font-semibold'>Perfect Solution For Your Business</h2>
              <span className='text-sm leading-[20px]'>
                  Discover our range of software products engineered to transcend mere aesthetics.
                  We specialize in crafting purposeful experiences that align with your brand's vision and goals. 
              </span>
            </div>
          </div>
          <div className='absolute right-0 top-20 sm:top-44 mt-1 flex justify-end sm:pr-16 pr-6'>
            <Link to={'/services'} className="flex items-center hover:underline">
              <span className="mr-2">Explore all services</span>
              <ArrowRight />
            </Link>
          </div>
          <div className='sm:grid shrink-1 grid-cols-2 w-fit md:w-full lg:w-fit sm:mt-1 mt-10 sm:gap-5 gap-10 sm:justify-start justify-center'>
            {services.map((service, idx) => (
              <Link to={service.to}>
                <div className='sm:w-[300px] shadow-xl p-5 rounded-lg mt-2 hover:bg-green-800 hover:text-gray-200'>
                  <h2 className='font-semibold py-2 flex justify-center'>{service.title}</h2>
                  <p className='text-gray-800'>
                    {service.description}
                  </p>
                  <button className='bg-green-900 py-3 px-4 rounded-md mt-4 text-gray-200 hover:bg-green-200 hover:text-black'>
                    {service.buttonText}
                  </button>  
                </div>
              </Link>
            ))}
            <div className='hidden lg:flex absolute right-6 top-[330px] 2xl:top-[300px]'>
              <img src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="" 
              className='w-[590px] 2xl:w-full 2xl:h-[480px] h-[460px] rounded-md shrink-1'
              />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Wedo