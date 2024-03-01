import React from 'react'
import Hero from './component/Hero'
import Projects from './component/Projects'
import Languages from './component/Languages'
import CallToAction from './component/CallToAction'
import Stats from './component/Stats'
import Testimonials from '../../components/Testimonials'

const index = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Languages />
      <Testimonials/>
      <CallToAction />
      <Stats/>
    </div>
  )
}

export default index