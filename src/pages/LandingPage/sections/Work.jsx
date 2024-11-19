import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from "@/constants/homepage"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Container from '@/components/Container'

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

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
    <div className="bg-gradient-to-b from-brandLighter to-white text-brandDark py-16">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="flex justify-between items-center mb-12" variants={itemVariants}>
            <div>
              <span className="font-bold text-3xl capitalize mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brandDark to-brandMedium">Our Work</span>
              <h2 className="text-xl font-semibold mt-2">Case Studies Conducted By Our Team</h2>
            </div>

            <Link to="/portfolio" className="group flex items-center text-brandDark hover:text-brandMedium transition-colors duration-300">
              <span className="mr-2">Explore all Projects</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card 
                  className="overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.img} 
                      alt={project.name} 
                      className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" 
                    />
                    {hoveredIndex === idx && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Link to="/Portfolio"  className="text-white hover:underline flex items-center">
                          <span className="mr-2">View Project</span>
                          <ExternalLink size={20} />
                        </Link>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                    <CardDescription className="text-sm">{project.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm font-medium">{project.category}</span>
                    <span className="text-sm text-brandMedium">{project.date}</span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Work