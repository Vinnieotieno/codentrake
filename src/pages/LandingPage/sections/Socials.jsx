import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin, Github, Instagram, Facebook, ChevronUp, ChevronDown } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6"

const SocialLink = ({ href, icon: Icon, label, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center justify-center p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300`}
      style={{ boxShadow: isHovered ? `0 0 15px ${color}` : 'none' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={24} color={color} />
      <AnimatePresence>
        {isHovered && (
          <motion.span
            className="text-xs mt-1 absolute -top-8 bg-white/10 backdrop-blur-md px-2 py-1 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  )
}

const Socials = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const socialLinks = [
    { href: "", icon: Linkedin, label: "LinkedIn", color: "#0077B5" },
    { href: "", icon: Github, label: "GitHub", color: "#333" },
    { href: "", icon: Instagram, label: "Instagram", color: "#E1306C" },
    { href: "", icon: Facebook, label: "Facebook", color: "#1877F2" },
    { href: "", icon: FaXTwitter, label: "Twitter", color: "#1DA1F2" },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 py-2">
        <motion.div
          className="bg-gradient-to-r from-blue-900/90 to-red-900/90 rounded-t-xl shadow-lg overflow-hidden"
          animate={{ height: isExpanded ? 'auto' : '60px' }}
        >
          <motion.div
            className="flex justify-between items-center py-3 px-6 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="text-white font-semibold">Connect with Codentrake</span>
            {isExpanded ? (
              <ChevronDown className="text-white" />
            ) : (
              <ChevronUp className="text-white" />
            )}
          </motion.div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="flex flex-wrap justify-center gap-6 py-6 px-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
              >
                {socialLinks.map((link, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <SocialLink {...link} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Socials