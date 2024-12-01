import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const SparkSection = () => {
  const allies = [
    { name: "John Doe", avatar: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" },
    { name: "Jane Smith", avatar: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg" },
    { name: "Mike Johnson", avatar: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-white to-purple-50 overflow-hidden py-12">
      {/* Floating Stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Star className="text-purple-300" size={Math.random() * 10 + 5} />
        </motion.div>
      ))}

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Empower your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400">
                future innovations
              </span>
              <br />
              with Codentrake!
            </h1>

            {/* Success Allies */}
            <div className="space-y-4">
              <div className="flex items-center -space-x-3">
                {allies.map((ally, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500">
                      <img
                        src={ally.avatar}
                        alt={ally.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="font-medium text-gray-700">Your Design</p>
                <p className="text-sm text-purple-600">Success Allies</p>
              </div>
            </div>
          </motion.div>

          {/* Robot Mascot */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-60 h-60 bg-gray-100 rounded-full shadow-lg relative flex items-center justify-center">
              {/* Robot Body */}
              <div className="w-40 h-48 bg-gray-800 rounded-lg shadow-md relative">
                {/* Robot Head */}
                <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-700 rounded-full shadow-md border-4 border-gray-500">
                  {/* Robot Eyes */}
                  <motion.div
                    className="absolute top-8 left-6 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      scaleY: [1, 0.2, 1], // Blinking animation
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  <motion.div
                    className="absolute top-8 right-6 w-4 h-4 bg-blue-400 rounded-full"
                    animate={{
                      scaleY: [1, 0.2, 1],
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  />
                  {/* Robot Mouth */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-2 bg-gray-500 rounded-full" />
                </div>
                {/* Arms */}
                <motion.div
                  className="absolute -left-8 top-12 w-6 h-20 bg-gray-700 rounded-lg origin-top"
                  animate={{
                    rotate: [0, -30, 0], // Waving animation
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                <motion.div
                  className="absolute -right-8 top-12 w-6 h-20 bg-gray-700 rounded-lg origin-top"
                  animate={{
                    rotate: [0, 30, 0], // Opposite waving animation
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
                {/* Legs */}
                <div className="absolute bottom-[-20px] left-8 w-8 h-16 bg-gray-700 rounded-lg" />
                <div className="absolute bottom-[-20px] right-8 w-8 h-16 bg-gray-700 rounded-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient Orb */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-purple-400 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default SparkSection;
