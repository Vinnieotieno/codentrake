'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { ChevronDown, Rocket, Eye, Code, Layout, Smartphone, Users, X, Megaphone, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const EnhancedAboutUsHero = () => {
  const [isStoryOpen, setIsStoryOpen] = useState(false)
  const [activeService, setActiveService] = useState(null)

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const services = [
    { icon: Code, title: "Software Solutions", description: "Cutting-edge software tailored to your needs" },
    { icon: Layout, title: "UI/UX Design", description: "Captivating designs that enhance user experience" },
    { icon: Smartphone, title: "App Development", description: "Robust applications for web and mobile platforms" },
    { icon: Megaphone, title: "Digital Marketing", description: "Strategic campaigns to boost your online presence" }
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      setActiveService(0)
    }
  }, [inView])

  useEffect(() => {
    if (activeService !== null) {
      const timer = setTimeout(() => {
        setActiveService((prev) => (prev + 1) % services.length)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [activeService])

  return (
    <div className="overflow-hidden bg-gradient-to-b from-brandLighter to-white text-brandDark">
      <div className="relative h-screen bg-cover bg-center bg-no-repeat"
           style={{backgroundImage: "url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-center"
            {...fadeIn}
          >
            Empowering Your Digital Journey
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-8 text-center max-w-3xl"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Vigilux Corporation: Your Strategic Partner in the Tech Landscape
          </motion.p>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="text-brandDark border-white hover:bg-white hover:text-brandDark transition-colors duration-300 text-lg px-8 py-3 rounded-full"
              onClick={() => setIsStoryOpen(true)}
            >
              Discover Our Story
            </Button>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        >
          <ChevronDown className="w-12 h-12 text-white" />
        </motion.div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brandDark to-brandMedium bg-clip-text text-transparent">Our Commitment to Excellence</h2>
            <p className="text-xl md:text-2xl text-brandDark/80 max-w-3xl mx-auto">
              At Vigilux, we're dedicated to delivering innovative solutions that drive your success in the digital realm.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-brandDark to-brandMedium text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <Rocket className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To bridge the gap in the software development industry by providing tailor-made solutions that address unique client challenges, while upholding quality and innovation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full bg-gradient-to-br from-brandMedium to-brandLighter text-brandDark shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <Eye className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg leading-relaxed">
                    To empower businesses with innovative technology solutions that contribute to their growth, sustainability, and success, while building lasting relationships based on trust and reliability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mb-20" ref={ref}>
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-brandDark to-brandMedium bg-clip-text text-transparent">Our Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className={`h-full transition-all duration-300 ${activeService === index ? 'shadow-lg scale-105' : 'hover:shadow-md hover:scale-102'}`}>
                    <CardContent className="p-6 text-center">
                      <service.icon className={`w-12 h-12 mx-auto mb-4 ${activeService === index ? 'text-brandMedium' : 'text-brandDark'}`} />
                      <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                      <p className="text-brandDark/70">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="bg-brandDark hover:bg-brandMedium text-white font-semibold py-3 px-8 rounded-full text-lg transition-colors duration-300"
            >
              <Users className="mr-2" />
              Join Our Team
            </Button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isStoryOpen && (
          <Dialog open={isStoryOpen} onOpenChange={setIsStoryOpen}>
            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-gradient-to-br from-brandLighter to-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4 text-brandDark">Our Story</DialogTitle>
                <DialogDescription>
                  <p className="text-base mb-4 text-brandDark/80">
                    Welcome to Vigilux Corporation, your strategic partner in the dynamic and ever-evolving technology landscape. We are committed to delivering top-notch software solutions, cutting-edge UI/UX design, and expert application development, all rooted in a passion for coding and programming excellence.
                  </p>
                  <p className="text-base mb-4 text-brandDark/80">
                    In our mission to bridge the gap in the software development industry, we offer tailor-made solutions that address unique client challenges. Whether you are seeking innovative web development, captivating UI/UX design, or robust application development, Vigilux is here to transform your vision into reality.
                  </p>
                  <p className="text-base mb-4 text-brandDark/80">
                    Our team of skilled professionals is dedicated to upholding quality and innovation, ensuring that your digital presence stands out in the competitive tech landscape. Our expertise in coding and programming encompasses a wide range of languages and frameworks, making us your go-to partner for comprehensive technical solutions.
                  </p>
                  <p className="text-base text-brandDark/80">
                    At Vigilux, we understand the critical role of web development, UI/UX design, and application development in driving progress and success. Our commitment to lasting relationships built on trust and reliability ensures that partnering with Vigilux Corporation is not just a service but a journey towards sustained excellence in the digital realm.
                  </p>
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <Button variant="outline" className="mt-4">
                  Close
                </Button>
              </DialogClose>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnhancedAboutUsHero