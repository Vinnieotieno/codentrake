import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from "@/assets/logo.png";
import { footer, socials } from "@/constants/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandDark text-brandLighter py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={logo} alt="Company Logo" className="h-16 w-auto mb-4" />
            <p className="text-sm mb-2">{footer.text1}</p>
            <p className="text-sm mb-4">{footer.text2}</p>
            <div className="flex space-x-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-110"
                >
                  <img src={social.img} alt={social.name} className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-brandMedium transition-colors">Home</a></li>
              <li><a href="/about-us" className="hover:text-brandMedium transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-brandMedium transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-brandMedium transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">123 Tech Street</p>
            <p className="mb-2">Nairobi City</p>
            <p className="mb-2">Phone: (254) 797398004</p>
            <p>Email: vigiluxcorp414@gmail.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest news and offers.</p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-brandLighter text-brandDark"
                />
                <Button type="submit" className="bg-brandMedium hover:bg-brandLighter hover:text-brandDark transition-colors">
                  Subscribe
                </Button>
              </form>
            ) : (
              <p className="text-green-400">Thank you for subscribing!</p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-brandLighter/30 text-center"
        >
          <p>&copy; {currentYear} {footer.text3}. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;