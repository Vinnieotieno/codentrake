'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '@/components/Container'
import { Card } from '@/components/ui/card'
import { team } from '@/constants/about'
import { ChevronDown, ChevronUp, Linkedin, Github, Twitter } from 'lucide-react'

const SocialIcon = ({ platform, link }) => {
  const icons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  }
  const Icon = platform && icons[platform.toLowerCase()] ? icons[platform.toLowerCase()] : Linkedin

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-brandLighter hover:text-brandMedium transition-colors duration-300"
    >
      <Icon size={20} />
    </a>
  )
}

const TeamMember = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-brandDark to-brandMedium text-brandLighter">
        <div className="p-6">
          <div className="flex items-center gap-x-5 mb-4">
            <motion.img
              src={member.img}
              className="w-24 h-24 object-cover rounded-full border-4 border-brandLighter"
              alt={member.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <div className="grow">
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-sm uppercase text-brandLighter/80">{member.position}</p>
            </div>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4">{member.desc}</p>
                <div className="flex items-center space-x-4">
                  {member.socials.map((social, idx) => (
                    <SocialIcon key={idx} platform={social.platform || social.name} link={social.link} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <motion.button
          className="w-full p-2 bg-brandLighter/10 text-brandLighter hover:bg-brandLighter/20 transition-colors duration-300 flex items-center justify-center"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? (
            <>
              <span className="mr-2">Less Info</span>
              <ChevronUp size={20} />
            </>
          ) : (
            <>
              <span className="mr-2">More Info</span>
              <ChevronDown size={20} />
            </>
          )}
        </motion.button>
      </Card>
    </motion.div>
  )
}

const Team = () => {
  const [filter, setFilter] = useState('All')

  const filteredTeam = filter === 'All' ? team : team.filter(member => member.position.includes(filter))

  return (
    <section className="py-16 bg-gradient-to-b from-brandLighter to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-bold text-4xl mb-4 tracking-wide text-brandDark">Our Team</h1>
          <p className="text-xl text-brandDark/80 max-w-2xl mx-auto">
            Meet the creative minds behind our success. Each member brings unique skills and passion to our projects.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {['All', 'Developer', 'Designer', 'Manager'].map((position) => (
            <motion.button
              key={position}
              className={`px-4 py-2 rounded-full ${
                filter === position ? 'bg-brandDark text-brandLighter' : 'bg-brandLighter text-brandDark'
              } hover:bg-brandMedium hover:text-brandLighter transition-colors duration-300`}
              onClick={() => setFilter(position)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {position}
            </motion.button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredTeam.map((member, idx) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  )
}

export default Team