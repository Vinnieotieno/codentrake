'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { services } from '@/constants/services'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Quote, ChevronDown, ChevronUp } from 'lucide-react'
import Container from '@/components/Container'

const EnhancedServices = () => {
  const [expandedService, setExpandedService] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { height: 'auto', opacity: 1 }
  }

  const toggleExpand = (idx) => {
    setExpandedService(expandedService === idx ? null : idx)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-brandLighter to-white text-brandDark overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="flex flex-col lg:flex-row gap-12 items-start"
            >
              <div className="lg:w-1/2 space-y-6">
                <Badge className="bg-brandMedium text-white hover:bg-brandDark">Service {idx + 1}</Badge>
                <h2 className="text-4xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-brandDark/80 mb-8">{service.desc}</p>
                <Card className="bg-brandLighter border-none hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-brandMedium mb-4" />
                    <p className="text-xl italic text-brandDark">{service.slogan}</p>
                  </CardContent>
                </Card>
                <motion.button
                  className="flex items-center text-brandMedium hover:text-brandDark transition-colors duration-300"
                  onClick={() => toggleExpand(idx)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedService === idx ? (
                    <>
                      <span className="mr-2">Hide Details</span>
                      <ChevronUp className="h-5 w-5" />
                    </>
                  ) : (
                    <>
                      <span className="mr-2">Show Details</span>
                      <ChevronDown className="h-5 w-5" />
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {(expandedService === idx || window.innerWidth >= 1024) && (
                  <motion.div
                    className="lg:w-1/2"
                    variants={expandVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {service.addons.map((addon, index) => (
                        <Card 
                          key={index} 
                          className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-brandDark mb-3">{addon.title}</h3>
                            <p className="text-brandDark/70">{addon.desc}</p>
                            <motion.div 
                              className="mt-4 text-brandMedium cursor-pointer"
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <ArrowRight className="inline-block h-5 w-5" />
                              <span className="ml-2">Learn More</span>
                            </motion.div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
 
export default EnhancedServices