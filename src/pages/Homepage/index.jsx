import React from 'react'
import Hero from './component/Hero'

import Languages from './component/Languages'
import CallToAction from '../../components/CallToAction'
import Stats from '../../components/Stats'
import Testimonials from '../../components/Testimonials'

const index = () => {
  return (
    <div>
      <Hero />
     
      <Languages />
      <Testimonials/>
      <CallToAction />
      <Stats/>
    </div>
  )
}

export default index