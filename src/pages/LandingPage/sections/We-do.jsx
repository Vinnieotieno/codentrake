import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '@/constants/landingpage'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Container from '@/components/Container'

const Wedo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <Container className="w-full max-w-[1600px] bg-gradient-to-br from-brandLighter to-white text-brandDark py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        <motion.div variants={itemVariants} className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="font-bold text-3xl md:text-4xl capitalize bg-gradient-to-r from-brandDark to-brandMedium bg-clip-text text-transparent">
            What We Do
          </h1>
          <Link to="/services" className="group flex items-center space-x-2 text-brandMedium hover:text-brandDark transition-colors duration-300">
            <span className="font-semibold">Explore all services</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold">Perfect Solution For Your Business</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl">
            Discover our range of software products engineered to transcend mere aesthetics. We specialize in crafting purposeful experiences that align
            with your brand's vision and goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <Link to={service.to} className="block p-6 h-full">
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-brandMedium transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <ArrowUpRight className="mt-4 text-brandMedium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-xl shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1669023414162-8b0573b9c6b2?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our Work Environment"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brandDark/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <Button className="bg-white text-brandDark hover:bg-brandLighter transition-colors duration-300">
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  )
}

export default Wedo