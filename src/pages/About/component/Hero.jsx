import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Database, Cloud, Users, ChevronDown, Github, Linkedin, Twitter, Facebook } from 'lucide-react';


const services = [
  { icon: <Code className="w-8 h-8" />, name: "Custom Software Development" },
  { icon: <Database className="w-8 h-8" />, name: "Database Management" },
  { icon: <Cloud className="w-8 h-8" />, name: "Cloud Solutions" },
  { icon: <Users className="w-8 h-8" />, name: "IT Consulting" },
];

const socialIcons = [

  { Icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com" },
  { Icon: Twitter, name: "Twitter", url: "https://twitter.com" },
  { Icon: Facebook, name: "Facebook", url: "https://facebook.com" },
];

const EnhancedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
    });
  }, [controls]);

  return (
    <div className="relative min-h-screen pt-24 mt-12 lg:pt-36 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Ingredients Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="lg:flex mx-auto gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 w-full mx-auto"
          >
            <h1 className="font-bold text-4xl lg:text-6xl leading-tight text-blue-900 mb-4">
              Elevate Your Tech with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Codentrake
              </span>
            </h1>
            <h2 className="font-semibold text-xl lg:text-2xl leading-tight my-5 text-indigo-700">
              Where Innovation Meets Excellence
            </h2>
            <p className="my-5 text-lg text-blue-800 max-w-2xl">
              In the dynamic realm of technology, Codentrake stands as your beacon of innovation. We blend cutting-edge solutions with creative prowess to propel your brand into the future of digital excellence.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 space-y-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold flex items-center text-lg shadow-lg"
                onClick={() => setShowModal(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>

              <div className="flex items-center space-x-4">
                {socialIcons.map(({ Icon, name, url }) => (
                  <motion.a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300"
                  >
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="sr-only">{name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-5/12 w-full relative lg:mt-0 mx-auto mt-16"
          >
            <motion.div
              animate={controls}
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl"
            ></motion.div>
            <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-2xl shadow-inner backdrop-blur-sm">
              <img
                src="/logo.png?height=128&width=128"
                alt="Codentrake Logo"
                className="w-32 h-32 mx-auto mb-6 rounded-full shadow-md"
              />
              <h3 className="text-2xl font-bold text-blue-900 mb-4 text-center">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 p-3 rounded-lg ${
                      activeService === index ? 'bg-blue-100 shadow-md' : 'bg-gray-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.icon}
                    <span className="text-sm font-medium text-blue-800">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Codentrake?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovative Solutions", description: "Cutting-edge tech for your unique needs" },
              { title: "Expert Team", description: "Skilled professionals dedicated to your success" },
              { title: "Agile Approach", description: "Flexible, adaptive, and results-driven methodology" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-indigo-600 mb-2">{item.title}</h4>
                <p className="text-blue-800">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-blue-600 animate-bounce" />
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Get Started with Codentrake</h2>
              <p className="text-blue-800 mb-6">
                Ready to elevate your tech game? Fill out the form below and we'll get back to you shortly!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="How can we help you?"
                  rows="3"
                  className="w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedHero;

