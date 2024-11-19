import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { plans } from '@/constants/landingpage'
import { Sprout, Flower, CheckCircle, Palmtree, X } from 'lucide-react'
import Container from '@/components/Container'
import { Button } from '@/components/ui/button'

const PlanCard = ({ plan, isPopular }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`${plan.backgroundColor} rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      {isPopular && (
        <div className="bg-yellow-400 text-brandDark text-sm font-bold px-4 py-1 absolute top-0 right-0 transform rotate-45 translate-x-12 translate-y-6">
          Popular
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{plan.title}</h2>
          {plan.title === "Basic" && <Sprout className="text-green-700" size={32} />}
          {plan.title === "Enterprise" && <Flower className="text-red-700" size={32} />}
          {plan.title === "Business" && <Palmtree className="text-green-800" size={32} />}
        </div>
        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold mb-6">{plan.price}</div>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <h3 className="text-lg font-semibold mb-4">Features</h3>
        <ul className="space-y-2 mb-6">
  {plan.features.map((feature, index) => (
    <li key={index} className="flex items-center">
      {feature.included ? (
        <CheckCircle className="mr-2 text-green-500" size={16} />
      ) : (
        <CheckCircle className="mr-2 text-gray-400" size={16} />
      )}
      <span className={feature.included ? '' : 'text-gray-400'}>
        {feature.name}
      </span>
    </li>
  ))}
</ul>

        <Button className="w-full bg-brandDark text-white hover:bg-brandMedium transition-colors duration-300">
          Choose Plan
        </Button>
      </div>
    </motion.div>
  )
}

const Plan = () => {
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
      opacity: 1
    }
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-brandLighter to-white text-brandDark overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-4">Our Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's chat about your needs and schedule a call for a personalized quote. We're excited to hear from you!
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {plans.map((plan, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <PlanCard plan={plan} isPopular={idx === 1} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}

export default Plan