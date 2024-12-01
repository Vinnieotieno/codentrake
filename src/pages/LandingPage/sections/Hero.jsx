'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Code, Laptop, Globe, Headphones, BarChart, BookOpen } from 'lucide-react';
import styled from 'styled-components';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

// Import images
import bg1 from '../../../assets/bg1.png';
import bg3 from '../../../assets/bg3.png';
import bg4 from '../../../assets/bg4.png';

const serviceCards = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Software Application Services",
    description: "Expert development solutions",
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Business Applications",
    description: "Scalable business solutions",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Development",
    description: "Custom web solutions",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Support Services",
    description: "24/7 technical support",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Market Research",
    description: "Data-driven insights",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Coding Classes",
    description: "Learn from experts",
  },
];

const backgroundImages = [bg1, bg3, bg4];

const PerspectiveCard = styled(motion.div)`
  perspective: 1000px;
  height: 100%;

  & > div {
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    transform-style: preserve-3d;
  }

  &:hover > div {
    transform: rotateY(10deg) rotateX(5deg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
`;

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen mt-16 overflow-hidden">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="absolute inset-0 w-full h-full"
      >
        {backgroundImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{
                backgroundImage: `url(${image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-900/90" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Think Big,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">We make</span>
            <br />
            IT, possible!
          </motion.h1>
          <motion.p className="text-xl text-gray-300 mb-8" variants={fadeInUp}>
            We deliver innovative solutions that transform businesses and drive success in the digital age.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full flex items-center justify-center hover:from-blue-700 hover:to-red-700 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-white text-white rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              +25497398004
              <PhoneCall className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 3D Service Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="initial"
          animate="animate"
        >
          {serviceCards.map((card, index) => (
            <PerspectiveCard
              key={index}
              className="group"
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="relative p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 transition-all duration-300 h-full flex flex-col justify-between"
              >
                <div>
                  <div className="text-white mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-gray-300 text-sm">{card.description}</p>
                </div>
                <motion.button
                  className="mt-4 px-4 py-2 bg-white/20 text-white rounded-full text-sm hover:bg-white/30 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </PerspectiveCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

