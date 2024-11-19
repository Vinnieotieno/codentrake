import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from "@/components/Container";
import { languages } from "@/constants/homepage";

const Languages = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-16 text-brandDark bg-brandLighter bg-opacity-40">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {languages.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-brandDark/80"
          >
            {languages.desc}
          </motion.p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {languages.languages.map((language, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center space-y-2"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brandDark to-brandMedium rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white p-2 rounded-lg">
                  <img
                    src={language}
                    alt={`Programming language ${idx + 1}`}
                    className="w-16 h-16 object-contain filter drop-shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  );
}

export default Languages;