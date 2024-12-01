"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import { Card } from "@/components/ui/card";
import { team } from "@/constants/about";
import { ChevronDown, ChevronUp, Linkedin, Github, Twitter, Briefcase, Code, Palette } from "lucide-react";

const SocialIcon = ({ platform, link }) => {
  const icons = {
    linkedin: Linkedin,
    github: Github,
    twitter: Twitter,
  };

  const Icon = icons[platform?.toLowerCase()] || Linkedin;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-blue-300 transition-colors duration-300"
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon size={24} />
    </motion.a>
  );
};

const TeamMember = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 45000); // Rotate every 45 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-gradient-to-br from-blue-600 to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300">
        <motion.div
          className="p-6"
          style={{ transform: `rotateY(${rotation}deg)` }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="flex items-center gap-x-5 mb-4">
            <motion.img
              src={member.img}
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
              alt={member.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="grow">
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-sm uppercase text-blue-100">{member.position}</p>
            </div>
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="mb-4 text-blue-100">{member.desc}</p>
                <div className="flex items-center space-x-4">
                  {member.socials.map((social, idx) => (
                    <SocialIcon key={idx} platform={social.platform || ""} link={social.link} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <motion.button
          className="w-full p-2 bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 flex items-center justify-center"
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
  );
};

const Team = () => {
  const [filter, setFilter] = useState("All");

  // Update the filter logic to include partial matches (case-insensitive)
  const filteredTeam =
    filter === "All"
      ? team
      : team.filter((member) =>
          member.position.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 to-red-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-bold text-4xl mb-4 tracking-wide text-blue-900">Our Innovative Team</h1>
          <p className="text-xl text-blue-800/80 max-w-2xl mx-auto">
            Meet the creative minds propelling Codentrake to new heights. Each member brings unique expertise and passion to our cutting-edge projects.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Developer", "Designer", "Manager"].map((position) => (
            <motion.button
              key={position}
              className={`px-4 py-2 rounded-full ${
                filter === position ? "bg-blue-600 text-white" : "bg-white text-blue-600"
              } hover:bg-blue-500 hover:text-white transition-colors duration-300 shadow-md`}
              onClick={() => setFilter(position)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {position === "Developer" && <Code className="inline-block mr-2" size={16} />}
              {position === "Designer" && <Palette className="inline-block mr-2" size={16} />}
              {position === "Manager" && <Briefcase className="inline-block mr-2" size={16} />}
              {position}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredTeam.map((member) => (
              <TeamMember key={member.name} member={member} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;
