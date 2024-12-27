'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Code, Laptop, Globe, Headphones, BarChart, BookOpen } from 'lucide-react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ServicesHero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 50])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const scaleSpring = useSpring(1, springConfig)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  const particlesOptions = {
    fullScreen: { enable: false, zIndex: 0 },
    particles: {
      number: { value: 30, density: { enable: true, value_area: 800 } },
      color: { value: '#ffffff' },
      opacity: { value: 0.3, random: true },
      size: { value: 2, random: true },
      move: { enable: true, speed: 0.6, random: true, out_mode: 'out' },
    },
  }

  const services = [
    { icon: <Code size={24} />, name: 'MEAN Stack' },
    { icon: <Laptop size={24} />, name: 'Business Apps' },
    { icon: <Globe size={24} />, name: 'Web Development' },
    { icon: <Headphones size={24} />, name: 'Support' },
    { icon: <BarChart size={24} />, name: 'Market Research' },
    { icon: <BookOpen size={24} />, name: 'Coding Classes' },
  ]

  return (
    <motion.div 
      ref={ref}
      className="relative mt-16 h-[100vh] min-h-[400px] max-h-[600px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-red-900 opacity-80 z-10" />
      
      <motion.div className="absolute inset-0" style={{ y, opacity, scale }}>
        <img
          src="/11.png"
          alt="Services Hero Background"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {isMounted && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-20"
        />
      )}

      <div className="relative z-30 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {"Our Services".split(' ').map((word, index) => (
            <motion.span key={index} className="inline-block mr-2" variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-6 text-blue-100 mb-8 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Empowering your digital journey with cutting-edge solutions and expertise
        </motion.p>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5, staggerChildren: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center  bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-white transition-all duration-300 hover:bg-opacity-20"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => scaleSpring.set(1.05)}
              onHoverEnd={() => scaleSpring.set(1)}
              style={{ scale: scaleSpring }}
            >
              {service.icon}
              <span className="mt-2 text-sm text-center">{service.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServicesHero

