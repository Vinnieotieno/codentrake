'use client'

import React from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/constants/about"
import { ChevronDown } from "lucide-react"
import { Link } from 'react-router-dom';

const EnhancedFAQ = () => {
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

  return (
    <section className="py-20 bg-brandLighter bg-opacity-40" id="faq">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            className="font-bold text-4xl md:text-5xl mb-8 text-center tracking-wide text-brandDark"
            variants={itemVariants}
          >
            Discover Why <br className="md:hidden" />
            <span className="text-brandPrimary">We're Your Ideal Tech Partner</span>
          </motion.h2>

          <motion.p
            className="text-center text-lg mb-12 text-brandDark opacity-80"
            variants={itemVariants}
          >
            Explore our frequently asked questions to learn more about our services and expertise.
          </motion.p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <AccordionItem 
                  value={faq.question}
                  className="border border-brandPrimary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline bg-white">
                    <div className="flex items-center justify-between w-full">
                      <h3 className="text-lg font-semibold text-brandDark">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 text-brandPrimary shrink-0 transition-transform duration-300" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-brandLighter bg-opacity-30">
                    <p className="text-brandDark opacity-90 leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <motion.div 
            className="mt-12 text-center"
            variants={itemVariants}
          >
           <Link 
                to="/contact" 
                className="inline-block px-8 py-3 bg-brandPrimary text-black font-bold rounded-full shadow-lg hover:bg-brandPrimary/90 transition-colors duration-300"
              >
               Still have questions? Contact us
           </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedFAQ