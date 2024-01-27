import React from 'react'
import Hero from './component/Hero'
import Projects from './component/Projects'
import Languages from './component/Languages'
import CallToAction from './component/CallToAction'
import Stats from './component/Stats'

const index = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Languages />
      <CallToAction />
      <Stats/>
    </div>
  )
}

export default index