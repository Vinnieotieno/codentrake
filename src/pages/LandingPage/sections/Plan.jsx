import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, Flower, CheckCircle, Palmtree, Code, Monitor, Quote, Settings } from 'lucide-react';
import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import Modal from '@/components/ui/Modal';

const PlanCard = ({ plan, onLearnMore }) => {
  return (
    <motion.div
      className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{plan.title}</h2>
          {plan.icon}
        </div>
        <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
        <div className="text-3xl font-bold mb-6">{plan.price}</div>
        <hr className="border-t-2 border-gray-200 mb-6" />
        <ul className="space-y-2 mb-6">
          {plan.details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="mr-2 text-green-500" size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Button className="w-full bg-brandDark text-white hover:bg-brandMedium transition-colors duration-300">
            {plan.buttonText}
          </Button>
          <Button
            className="w-full bg-gray-300 text-brandDark hover:bg-gray-400 transition-colors duration-300"
            onClick={() => onLearnMore(plan)}
          >
            Learn More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'The coding classes for kids were fantastic! My child loved the interactive sessions.',
      author: 'Jane Doe, Parent',
    },
    {
      quote: 'As an aspiring developer, the bootcamp helped me land my first job!',
      author: 'John Smith, Bootcamp Graduate',
    },
    {
      quote: 'The custom solutions streamlined our workflow significantly.',
      author: 'Emily White, CEO',
    },
  ];

  return (
    <section className="py-16 bg-gray-100 text-brandDark">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <motion.div
            className="flex overflow-x-auto space-x-4 px-6"
            drag="x"
            dragConstraints={{ left: -300, right: 0 }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="min-w-[300px] bg-white p-6 rounded-lg shadow-md flex-none"
                whileHover={{ scale: 1.05 }}
              >
                <Quote size={40} className="mb-4 text-brandDark" />
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="text-right font-bold">{testimonial.author}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

const Plan = () => {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (plan) => {
    setModalData(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const services = [
    {
      title: 'Professional Services',
      description: 'Expert-level consulting to meet your business needs.',
      price: 'KES 10,000/hour',
      icon: <Palmtree className="text-blue-600" size={32} />,
      details: ['Dedicated Support', 'Custom Solutions', '24/7 Availability'],
      buttonText: 'Learn More',
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored tech solutions for your organization.',
      price: 'Contact Us',
      icon: <Settings className="text-green-600" size={32} />,
      details: ['Integration Services', 'Advanced Analytics', 'Cloud Deployment'],
      buttonText: 'Contact Us',
    },
  ];

  const codingLessons = [
    {
      title: 'Kids Coding Lessons',
      description: 'Interactive and fun coding classes for kids aged 8-16.',
      price: 'KES 10,000/month',
      icon: <Monitor className="text-yellow-600" size={32} />,
      details: ['Scratch Programming', 'Python Basics', 'Game Development'],
      buttonText: 'Enroll Now',
    },
    {
      title: 'Adults Coding Bootcamp',
      description: 'Comprehensive coding bootcamp for aspiring developers.',
      price: 'KES 20,000/month',
      icon: <Code className="text-red-600" size={32} />,
      details: ['Full-Stack Development', 'React and Node.js', 'Project-Based Learning'],
      buttonText: 'Join Now',
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-brandLighter to-white text-brandDark overflow-hidden">
      <Container>
        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our professional services designed to elevate your business.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <PlanCard key={idx} plan={service} onLearnMore={openModal} />
            ))}
          </motion.div>
        </motion.div>

        {/* Coding Lessons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Coding Classes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn to code with expert guidance. Choose the best plan for you!
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {codingLessons.map((lesson, idx) => (
              <PlanCard key={idx} plan={lesson} onLearnMore={openModal} />
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Modal for Plan Details */}
      {isModalOpen && modalData && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>
            <p className="text-gray-600 mb-6">{modalData.description}</p>
            <ul className="space-y-2">
              {modalData.details.map((detail, idx) => (
                <li key={idx} className="flex items-center">
                  <CheckCircle className="mr-2 text-green-500" size={16} />
                  {detail}
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-brandDark text-white hover:bg-brandMedium">
              {modalData.buttonText}
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Plan;
