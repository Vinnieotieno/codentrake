import React from 'react'
import Hero from './sections/Hero'
import Wedo from './sections/We-do'
import Work from './sections/Work'
import Testimonial from './sections/Testimonial'
import Plan from './sections/Plan'
import Howworks from './sections/How-Works'
import Socials from './sections/Socials'
import CallToAction from '@/components/CallToAction'
import Stats from '@/components/Stats'

const index = () => {
  return (
    <div className='sm:mt-1'>
      <Hero/>
      <Socials/>
      <Wedo/>
      <Work/>
      <Testimonial/>
      <Plan/>
      <Howworks/>
      <CallToAction />
      <Stats/>
    </div>
  )
}

export default index