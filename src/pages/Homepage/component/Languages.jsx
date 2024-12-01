import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'AWS', color: '#FF9900' },
    { name: 'Google Cloud', color: '#4285F4' },
    { name: 'Azure', color: '#0089D6' },
    { name: 'Salesforce', color: '#00A1E0' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'GitHub', color: '#181717' },
    { name: 'Jira', color: '#0052CC' },
    { name: 'Docker', color: '#2496ED' },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-24">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Top Companies with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">
                Seamless Integrations
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience seamless connections with our innovative solutions, designed 
              to effortlessly integrate with your existing systems, enhance productivity 
              and drive your business towards greater success.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full 
                          font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-red-700 
                          transition-all duration-300 shadow-lg"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Integrations Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Center Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-full" />
              
              {/* Integration Icons */}
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={{
                    left: `${50 + 35 * Math.cos(2 * Math.PI * index / integrations.length)}%`,
                    top: `${50 + 35 * Math.sin(2 * Math.PI * index / integrations.length)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 0.3 }
                    }}
                    className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center
                             hover:shadow-xl transition-shadow duration-300"
                  >
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: integration.color }}
                    >
                      {integration.name.charAt(0)}
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full animate-spin-slow" style={{ animationDuration: '60s' }}>
                {integrations.map((_, index) => (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + 35 * Math.cos(2 * Math.PI * index / integrations.length)}%`}
                    y2={`${50 + 35 * Math.sin(2 * Math.PI * index / integrations.length)}%`}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    className="opacity-20"
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#dc2626" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;