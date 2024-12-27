import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Container from "@/components/Container";
import heroImage from "@/assets/hero.png";
import { socials } from "@/constants/footer";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { title: "100+", description: "Satisfied Clients", count: 100 },
    { title: "200+", description: "Successful Projects", count: 200 },
    { title: "10+ Years", description: "Industry Experience", count: 10 },
  ];

  return (
    <div className="pt-24 lg:pt-36 pb-14 relative overflow-hidden mt-16 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 text-white animate-gradient">
      <Container>
        <div className="lg:flex mx-auto gap-14 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 w-full mx-auto text-center lg:text-left"
          >
            <h1 className="font-extrabold text-4xl lg:text-6xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Empower Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                <Typewriter
                  options={{
                    strings: ["Custom Software", "Cloud Solutions", "Database Expertise"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            <h2 className="font-semibold text-lg lg:text-2xl leading-tight my-5 text-gray-200/90">
              Innovative Software Solutions for the Modern Era
            </h2>
            <p className="my-5 text-base text-gray-300 max-w-2xl mx-auto lg:mx-0">
              At Codentrake, we combine cutting-edge technology with tailored strategies to drive your business forward. Join us in shaping the future of software innovation.
            </p>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6"
            >
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full font-semibold flex items-center text-lg shadow-lg hover:from-blue-600 hover:to-indigo-600 transition-transform hover:scale-105"
              >
                Get in Touch
              </a>
              {socials && (
                <div className="flex items-center space-x-4">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <img src={social.img} className="h-8 w-8" alt={`${social.name} icon`} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-5/12 w-full relative lg:mt-6 mx-auto mt-10"
          >
            <div className="relative">
              <div className="h-[50vw] w-[50vw] sm:h-72 sm:w-80 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-t-[10%] rounded-br-[30%] shadow-2xl mx-auto"></div>
              <img
                src={heroImage}
                className="absolute -top-8 -left-10 lg:h-80 md:h-72 z-10 filter drop-shadow-xl"
                alt="Codentrake Hero"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-gray-200 mb-6">
            Why Choose Codentrake?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-indigo-500 p-6 rounded-lg shadow-lg text-center"
              >
                <motion.h4
                  className="text-4xl font-extrabold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  {stat.count}
                </motion.h4>
                <p className="text-gray-200 mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Section */}
        <div className="mt-16">
          <h3 className="text-center text-2xl lg:text-3xl font-bold text-gray-200 mb-6">
            How We Work
          </h3>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            {[
              { step: "1", title: "Consultation", description: "Understand your needs and goals." },
              { step: "2", title: "Development", description: "Craft tailored software solutions." },
              { step: "3", title: "Support", description: "Ensure long-term success." },
            ].map((workflow, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-lg shadow-lg text-center w-64"
              >
                <h4 className="text-4xl font-extrabold text-white">{workflow.step}</h4>
                <h5 className="text-lg font-bold text-gray-200 mt-2">{workflow.title}</h5>
                <p className="text-gray-300 mt-1">{workflow.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 10s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
