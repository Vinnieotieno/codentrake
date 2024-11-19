'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import getstarted from '../../../assets/getstarted.png'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'
import { Phone, ArrowRight, Check } from 'lucide-react'

const Howworks = () => {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { 
      title: "Discovery", 
      description: "We dive deep into understanding your business, goals, and challenges.",
      icon: "🔍"
    },
    { 
      title: "Strategy", 
      description: "We craft a tailored plan that aligns with your objectives and market positioning.",
      icon: "🎯"
    },
    { 
      title: "Implementation", 
      description: "Our expert team brings your vision to life using cutting-edge technologies.",
      icon: "🛠️"
    },
    { 
      title: "Launch & Support", 
      description: "We ensure a smooth deployment and provide ongoing assistance for your success.",
      icon: "🚀"
    }
  ]

  const handleCall = () => {
    window.location.href = 'tel:0797398004'
  }

  return (
    <Container className="bg-gradient-to-b from-brandLighter to-white text-brandDark py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl h-[600px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1665686374006-b8f04cf62d57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')] bg-center bg-cover bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-t from-brandDark to-transparent opacity-70" />
          <div className="relative p-8 md:p-12 flex flex-col h-full justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
              <p className="text-xl text-white mb-6">Discover our proven process for turning your vision into reality</p>
            </div>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 cursor-pointer transition-all duration-300 ${activeStep === index ? 'scale-105 shadow-lg' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <AnimatePresence>
                        {activeStep === index && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-white text-sm mt-2"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <Button 
              className="bg-white text-brandDark hover:bg-brandLighter transition-colors duration-300 mt-6"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-4 w-4" /> Book a Call
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h3>
          <Button 
            className="bg-brandDark text-white hover:bg-brandMedium transition-colors duration-300 mb-6"
            onClick={handleCall}
          >
            <Phone className="mr-2 h-4 w-4" /> Book a Call Now
          </Button>
          <p className="text-xl text-brandDark/70">
            Take the first step towards transforming your digital presence. Our team is ready to bring your vision to life with innovative solutions tailored to your needs.
          </p>
          <div className="relative overflow-hidden rounded-xl shadow-lg">
            <img src={getstarted} alt="Get Started" className="w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-brandDark to-transparent opacity-70 flex items-center justify-center">
              <Link to="/contact">
                <Button 
                  className="bg-white text-brandDark hover:bg-brandLighter transition-colors duration-300 text-lg px-8 py-4"
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-brandLighter rounded-lg p-6 shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Why Choose Us?</h4>
            <ul className="space-y-3">
              {[
                "Expertise in cutting-edge technologies",
                "Tailored solutions for your unique needs",
                "Proven track record of successful projects",
                "Dedicated support throughout the process"
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Container>
  )
}

export default Howworks