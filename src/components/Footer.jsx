import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Globe, Mail, Phone, MapPin } from 'lucide-react';
import logo from "@/assets/logo.png";
import { footer, socials } from "@/constants/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState({});

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = (section) => {
    setMobileMenuOpen(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-red-900 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={logo} alt="Codentrake Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm mb-2">{footer.text1}</p>
            <p className="text-sm mb-4">{footer.text2}</p>
            <div className="flex space-x-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={social.img} alt={social.name} className="h-6 w-6 filter invert" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
              Quick Links
              <button className="md:hidden" onClick={() => toggleMobileMenu('quickLinks')}>
                {mobileMenuOpen.quickLinks ? '−' : '+'}
              </button>
            </h3>
            <AnimatePresence>
              {(mobileMenuOpen.quickLinks || window.innerWidth > 768) && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-2"
                >
                  {['Home', 'About Us', 'Services', 'Contact'].map((link, index) => (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a href={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-blue-300 transition-colors">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 flex justify-between items-center">
              Contact Us
              <button className="md:hidden" onClick={() => toggleMobileMenu('contact')}>
                {mobileMenuOpen.contact ? '−' : '+'}
              </button>
            </h3>
            <AnimatePresence>
              {(mobileMenuOpen.contact || window.innerWidth > 768) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <p className="mb-2 flex items-center"><MapPin size={16} className="mr-2" /> 123 Tech Street, Nairobi City</p>
                  <p className="mb-2 flex items-center"><Phone size={16} className="mr-2" /> (254) 797398004</p>
                  <p className="flex items-center"><Mail size={16} className="mr-2" /> codentrake@gmail.com</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            <AnimatePresence>
              {!subscribed ? (
                <motion.form
                  onSubmit={handleSubscribe}
                  className="flex flex-col space-y-2"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 text-white placeholder-white/50 border-white/20"
                  />
                  <Button
                    type="submit"
                    className="bg-white text-blue-900 hover:bg-blue-100 transition-colors"
                  >
                    Subscribe
                  </Button>
                </motion.form>
              ) : (
                <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/30 text-center flex justify-between items-center flex-wrap"
        >
          <p>&copy; {currentYear} {footer.text3}. All rights reserved.</p>
          <div className="flex items-center mt-4 sm:mt-0">
            <Globe size={16} className="mr-2" />
            <select className="bg-transparent border-white/20 rounded">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-white text-blue-900 p-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;