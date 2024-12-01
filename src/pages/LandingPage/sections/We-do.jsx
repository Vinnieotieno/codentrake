import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, Settings2, Brain } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Boosting Quality with Tech",
      description: "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards."
    },
    {
      icon: <Settings2 className="w-6 h-6" />,
      title: "Optimization Production Process",
      description: "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Driven Production",
      description: "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results."
    }
  ];

  const chartData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 85 },
    { month: 'Mar', value: 95 },
    { month: 'Apr', value: 100 }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-600 to-red-600 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-xl"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-700 font-semibold">Total Projects</h3>
                  <span className="text-green-500 text-sm">+6%</span>
                </div>
                {[75, 65, 45].map((value, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{index === 0 ? 'Completed' : index === 1 ? 'In Progress' : 'Planned'}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-green-500' : index === 1 ? 'bg-blue-500' : 'bg-orange-500'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span className="text-xl font-bold">19+</span>
                  </div>
                  <span className="text-sm text-gray-500">Projects this month</span>
                </div>
                <div className="flex items-end space-x-2 h-32">
                  {chartData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex-1"
                      initial={{ height: 0 }}
                      animate={{ height: `${item.value}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      <div
                        className="w-full bg-gradient-to-t from-blue-600 to-red-600 rounded-t-lg"
                        style={{ height: '100%' }}
                      />
                      <div className="text-center text-sm text-gray-600 mt-2">{item.month}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-8">
              Key Benefits of Our System for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-300">
                Your Business Efficiency
              </span>
            </h2>
            <p className="text-gray-200 mb-8">
              Our systems boost productivity, cut costs, and drive business growth
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;