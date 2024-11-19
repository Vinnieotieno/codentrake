import React from "react"
import { motion } from "framer-motion"
import Container from "@/components/Container"
import { stats } from "@/constants/homepage"
import { TrendingUp } from 'lucide-react'

const Stats = () => {
  return (
    <div className="py-24 text-brandDark bg-gradient-to-b from-brandLighter to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we've been making a difference in the digital world
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <motion.h3
                  className="text-4xl font-bold mb-2 text-brandDark"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </div>
              <motion.div
                className="absolute bottom-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                initial={{ rotate: 45, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              >
                <TrendingUp size={80} className="text-brandDark" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Stats