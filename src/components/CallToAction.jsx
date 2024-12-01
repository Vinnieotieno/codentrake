import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      text: "Fast Development"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: "Reduced Downtime"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Cost Effective"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-red-500">
        <div className="absolute inset-0 opacity-20">
          {/* Animated background patterns */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            From Idea to Production in Days
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                {feature.icon}
                <span className="text-white">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-400 to-red-400 text-white rounded-full font-semibold flex items-center gap-2 hover:from-blue-500 hover:to-red-500 transition-all duration-300 shadow-lg"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated highlight line */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-400 to-red-400"
            initial={{ width: "0%" }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;