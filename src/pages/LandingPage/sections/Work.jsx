import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { FaUsers, FaCogs, FaChartBar, FaRobot, FaSearch, FaRocket } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Container from '@/components/Container';

const services = [
  {
    title: "Tailored",
    description: "Streamline processes, enabling your team to focus on what matters most.",
    icons: [<FaUsers />, <FaCogs />, <FaSearch />],
  },
  {
    title: "Simplify",
    description: "Integrate payroll, benefits, and software management into one platform.",
    icons: [<FaChartBar />, <FaCogs />, <FaSearch />],
  },
  {
    title: "Automate",
    description: "Automate onboarding, procurement, and focus on work-life balance.",
    icons: [<FaRobot />, <FaSearch />, <FaCogs />],
  },
  {
    title: "Optimize",
    description: "Gain actionable insights with easy device and app management.",
    icons: [<FaSearch />, <FaCogs />, <FaChartBar />],
  },
  {
    title: "Maximize",
    description: "Boost reliability and minimize distractions through cutting-edge solutions.",
    icons: [<FaRocket />, <FaSearch />, <FaCogs />],
  },
];

const Work = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-white text-gray-900 py-16">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">
            What Sets Us Apart?
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Uncover the unique advantages that make our solutions the leading choice in integrated HR, finance, and IT.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-red-500 text-white shadow-lg rounded-lg p-8 text-center transform hover:scale-105">
                {/* Rotating Icons */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {service.icons.map((Icon, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 flex items-center justify-center text-3xl"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + i,
                        ease: "linear",
                      }}
                    >
                      <div
                        className="text-gray-50 cursor-pointer"
                        data-tooltip-id={`tooltip-${index}-${i}`}
                      >
                        {Icon}
                      </div>
                      <Tooltip
                        id={`tooltip-${index}-${i}`}
                        place="top"
                        content={`Feature ${i + 1} of ${service.title}`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Title & Description */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="mt-4 text-sm">{service.description}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Work;
