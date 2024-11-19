import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/constants/homepage'
import Container from '@/components/Container'

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white rounded-lg shadow-xl p-6 md:p-8"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg md:text-xl text-gray-800 font-medium mb-6">"{testimonial.review}"</p>
    <div className="flex items-center">
      <img className="w-12 h-12 rounded-full object-cover mr-4" src={testimonial.image} alt={testimonial.name} />
      <div>
        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
        <p className="text-gray-600">{testimonial.position}</p>
      </div>
    </div>
    <div className="flex mt-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400" size={16} fill={i < testimonial.rating ? "currentColor" : "none"} />
      ))}
    </div>
  </motion.div>
)

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-brandLighter to-white text-brandDark overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We serve clients from different levels and industries. Here's what they have to say about our services.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <TestimonialCard key={currentIndex} testimonial={testimonials[currentIndex]} />
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 right-0">
            <button
              onClick={prevTestimonial}
              className="absolute left-0 bg-white rounded-full p-2 shadow-md hover:bg-brandMedium hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 bg-white rounded-full p-2 shadow-md hover:bg-brandMedium hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full mx-1 ${
                idx === currentIndex ? 'bg-brandDark' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonial