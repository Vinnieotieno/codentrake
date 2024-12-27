'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles'

const ContactHero = () => {
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
        staggerChildren: 0.04,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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

  const contactInfo = [
    { icon: <Phone size={16} />, text: '+254 (797) 398-004' },
    { icon: <Mail size={16} />, text: 'contact@codentrake.com' },
    { icon: <MapPin size={16} />, text: '123 Tech St, Nairobi ' },
  ]

  return (
    <motion.div 
      ref={ref}
      className="relative h-[100vh] min-h-[400px] max-h-[600px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-red-900 opacity-80 z-10" />
      
      <motion.div className="absolute inset-0" style={{ y, opacity, scale }}>
        <img
          src="/111.png"
          alt="Contact Hero Background"
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
          className="text-3xl md:text-5xl font-bold text-white mb-3 text-center"
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
        >
          {"Let's Connect".split('').map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="text-sm md:text-base text-blue-100 mb-5 max-w-md mx-auto text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Reach out to us and discover how Codentrake can transform your digital presence.
        </motion.p>

        <motion.a
          href="#contact-form"
          className="inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-red-600 rounded-full hover:from-blue-700 hover:to-red-700 transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' },
          }}
        >
          Get in Touch
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.a>

        <motion.div 
          className="flex flex-wrap justify-center mt-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center bg-white bg-opacity-10 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-white"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => scaleSpring.set(1.05)}
              onHoverEnd={() => scaleSpring.set(1)}
              style={{ scale: scaleSpring }}
            >
              {info.icon}
              <span className="ml-2">{info.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactHero

