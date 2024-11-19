import React from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram, Facebook } from 'lucide-react'
import { FaXTwitter } from "react-icons/fa6"

const SocialLink = ({ href, icon: Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center justify-center p-2 rounded-full bg-white text-brandDark hover:bg-brandMedium hover:text-white transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <Icon size={24} />
    <span className="text-xs mt-1 hidden sm:block">{label}</span>
  </motion.a>
)

const Socials = () => {
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

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto px-4 py-2">
        <motion.div
          className="bg-brandDark bg-opacity-90 backdrop-blur-md rounded-full shadow-lg flex justify-around items-center py-3 px-6 space-x-4"
          whileHover={{ y: -5 }}
        >
          <motion.div className="flex space-x-4 sm:space-x-8" variants={containerVariants}>
            <SocialLink
              href="https://www.linkedin.com/in/vigilux-corp-571a61291/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://github.com/Vigilux-Corp"
              icon={Github}
              label="GitHub"
            />
            <SocialLink
              href="https://www.instagram.com/vigilux.corp/"
              icon={Instagram}
              label="Instagram"
            />
            <SocialLink
              href="https://www.facebook.com/profile.php?id=100094756418058"
              icon={Facebook}
              label="Facebook"
            />
            <SocialLink
              href="https://twitter.com/VigiluxCorp"
              icon={FaXTwitter}
              label="Twitter"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Socials