import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import Container from '@/components/Container'
import { calltoAction } from "@/constants/homepage"

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-brandDark to-brandMedium text-white py-16">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{calltoAction.text}</h2>
            <p className="text-lg mb-8 text-gray-200">
              Take the first step towards transforming your digital presence. Our team is ready to bring your vision to life.
            </p>
            <Link to="/contact">
              <Button
                className="bg-white text-brandDark hover:bg-brandLighter transition-colors duration-300 text-lg px-8 py-3 rounded-full"
              >
                <span>Contact Us</span>
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={calltoAction.img}
              alt="Call to Action"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default CallToAction