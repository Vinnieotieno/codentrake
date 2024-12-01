'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Laptop, Globe, Headphones, BarChart, BookOpen } from 'lucide-react'

const services = [
  {
    title: "Software Applications Services",
    desc: "Expert development solutions using MongoDB, Express.js, Angular, and Node.js.",
    icon: <Code className="w-12 h-12" />,
    addons: [
      { title: "Custom API Development", desc: "Tailored APIs for seamless integration" },
      { title: "Real-time Applications", desc: "Build responsive, real-time web apps" },
    ]
  },
  {
    title: "Business Applications",
    desc: "Scalable business solutions to streamline your operations and boost productivity.",
    icon: <Laptop className="w-12 h-12" />,
    addons: [
      { title: "ERP Systems", desc: "Integrated enterprise resource planning solutions" },
      { title: "CRM Development", desc: "Custom customer relationship management tools" },
    ]
  },
  {
    title: "Website Development",
    desc: "Custom web solutions that captivate your audience and drive engagement.",
    icon: <Globe className="w-12 h-12" />,
    addons: [
      { title: "E-commerce Platforms", desc: "Robust online shopping experiences" },
      { title: "Content Management Systems", desc: "Easy-to-use CMS for your team" },
    ]
  },
  {
    title: "Support Services",
    desc: "24/7 technical support to ensure your systems run smoothly at all times.",
    icon: <Headphones className="w-12 h-12" />,
    addons: [
      { title: "Managed IT Services", desc: "Proactive monitoring and maintenance" },
      { title: "Cloud Migration Support", desc: "Seamless transition to cloud platforms" },
    ]
  },
  {
    title: "Market Research",
    desc: "Data-driven insights to inform your business strategies and decision-making.",
    icon: <BarChart className="w-12 h-12" />,
    addons: [
      { title: "Competitor Analysis", desc: "In-depth review of market competitors" },
      { title: "User Experience Research", desc: "Optimize your product's usability" },
    ]
  },
  {
    title: "Coding Classes",
    desc: "Learn from experts and enhance your programming skills with our specialized courses.",
    icon: <BookOpen className="w-12 h-12" />,
    addons: [
      { title: "Web Development Bootcamp", desc: "Intensive training in modern web technologies" },
      { title: "Data Science Workshop", desc: "Hands-on experience with data analysis tools" },
    ]
  }
]

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
    <section className="py-24 bg-gradient-to-b from-blue-900 to-red-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Cutting-Edge Services
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants} 
              className="flex flex-col"
            >
              <Card className="bg-white/10 backdrop-blur-lg border-none hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-red-500 rounded-full mr-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow">{service.desc}</p>
                  <motion.button
                    className="flex items-center justify-center w-full bg-white text-blue-900 py-2 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
                    onClick={() => toggleExpand(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedService === idx ? "Hide Details" : "Show Details"}
                  </motion.button>
                </CardContent>
              </Card>
              <AnimatePresence>
                {expandedService === idx && (
                  <motion.div
                    variants={expandVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    className="mt-4 space-y-4"
                  >
                    {service.addons.map((addon, index) => (
                      <Card 
                        key={index} 
                        className="bg-white/5 backdrop-blur-sm border-none hover:shadow-lg transition-all duration-300"
                      >
                        <CardContent className="p-4">
                          <h4 className="text-lg font-semibold mb-2">{addon.title}</h4>
                          <p className="text-gray-300 text-sm">{addon.desc}</p>
                          <motion.div 
                            className="mt-3 text-blue-300 cursor-pointer flex items-center"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            <span className="mr-2">Learn More</span>
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
 
export default EnhancedServices

