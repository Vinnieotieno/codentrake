'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/constants/about"
import { ChevronDown, Search, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnhancedFAQ = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState(faqs)
  const [selectedFaq, setSelectedFaq] = useState(null)

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
        type: "spring",
        stiffness: 100
      }
    }
  }

  useEffect(() => {
    const filtered = faqs.filter(
      faq => faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
             faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredFaqs(filtered)
  }, [searchTerm])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-red-100" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="font-bold text-4xl md:text-5xl mb-8 text-center tracking-wide text-blue-900"
            variants={itemVariants}
          >
            Discover Why <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">We're Your Ideal Tech Partner</span>
          </motion.h2>

          <motion.p
            className="text-center text-lg mb-12 text-blue-800/80"
            variants={itemVariants}
          >
            Explore our frequently asked questions to learn more about Codentrake's innovative services and expertise.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-full border-2 border-blue-300 focus:border-blue-500 focus:outline-none transition-colors duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
            </div>
          </motion.div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((faq, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  <AccordionItem 
                    value={faq.question}
                    className="border border-blue-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 text-left hover:no-underline bg-white"
                      onClick={() => setSelectedFaq(selectedFaq === idx ? null : idx)}
                    >
                      <div className="flex items-center justify-between w-full">
                        <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                        <ChevronDown className="h-5 w-5 text-blue-500 shrink-0 transition-transform duration-300" />
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-blue-50">
                      <p className="text-blue-800 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </AnimatePresence>
          </Accordion>

          {filteredFaqs.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-blue-800 my-8"
            >
              No matching questions found. Please try a different search term.
            </motion.p>
          )}

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
           <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-red-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2" />
              Still have questions? Contact us
           </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedFAQ

