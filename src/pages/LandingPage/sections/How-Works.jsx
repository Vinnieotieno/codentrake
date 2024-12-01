import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code, Settings, Users } from 'lucide-react';
import Container from '@/components/Container';

const Howworks = () => {
  const rotateAnimation = {
    animate: { rotate: [0, 360] },
    transition: { duration: 6, repeat: Infinity, ease: 'linear' },
  };

  return (
    <Container className="bg-gradient-to-b from-blue-100 to-white text-brandDark py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-500 to-red-500 p-8 text-white"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <h3 className="text-lg font-bold sm:text-2xl mb-4">How We Work</h3>
          <p className="text-sm mb-6">Discover how our services make your workflow seamless.</p>
          {/* Service icons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="text-white w-6 h-6" />
              <span>Professional Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="text-white w-6 h-6" />
              <span>Custom Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-white w-6 h-6" />
              <span>Team Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="text-white w-6 h-6" />
              <span>Technical Expertise</span>
            </div>
          </div>
          {/* Call to Action */}
          <div className="mt-6 space-y-4">
            <a
              href="https://wa.me/254797398004"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full py-2 px-4 bg-white text-brandDark hover:bg-blue-700 hover:text-white transition-all">
                WhatsApp Us
              </button>
            </a>
            <a
              href="tel:+254797398004"
              className="block"
            >
              <button className="w-full py-2 px-4 bg-blue-700 text-white hover:bg-blue-500 transition-all">
                Call Us
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right Section with Rotating Items */}
        <motion.div
          className="grid grid-cols-1 gap-4 items-center justify-center"
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center justify-center gap-6">
            {[
              { icon: <Briefcase />, duration: 6 },
              { icon: <Settings />, duration: 7 },
              { icon: <Users />, duration: 8 },
              { icon: <Code />, duration: 9 },
            ].map(({ icon, duration }, idx) => (
              <motion.div
                key={idx}
                className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all"
                {...rotateAnimation}
                transition={{ duration, repeat: Infinity, ease: 'linear' }}
              >
                {React.cloneElement(icon, { className: 'text-white w-10 h-10' })}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
};

export default Howworks;
