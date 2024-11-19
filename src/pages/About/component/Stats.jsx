'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Container from "@/components/Container"
import { Card, CardContent } from "@/components/ui/card"
import { stats } from "@/constants/about"
import { Users, Briefcase, Award, Zap } from 'lucide-react'

const iconMap = {
  Users,
  Briefcase,
  Award,
  Zap
}

const EnhancedStats = () => {
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

  return (
    <section className="py-16 bg-gradient-to-b from-brandLighter to-white">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Users
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-brandPrimary bg-opacity-10">
                      <Icon className="w-8 h-8 text-brandPrimary" />
                    </div>
                    <motion.h2 
                      className="text-4xl lg:text-5xl font-bold text-brandPrimary mb-2"
                      initial={{ scale: 1 }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      {stat.number}
                    </motion.h2>
                    <p className="text-lg text-brandSlightDark font-medium">{stat.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}

export default EnhancedStats