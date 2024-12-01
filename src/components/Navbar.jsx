'use client'

import React, { useState, useEffect } from "react";
import { Menu, Phone, Mail } from 'lucide-react';

const navItems = [
  { link: "Home", path: "/" },
  { link: "Services", path: "/services" },
  { link: "About", path: "/about-us" },
  { link: "Portfolio", path: "/portfolio" },
  { link: "Contact", path: "/contact" },
];

const TopContactBar = () => {
  return (
    <div className="bg-gray-100 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
            <Phone className="h-4 w-4 mr-2" />
            <span>+254 797 398 004</span>
          </a>
          <a href="mailto:info@codentrake.com" className="flex items-center hover:text-gray-200">
            <Mail className="h-4 w-4 mr-2" />
            <span>info@codentrake.com</span>
          </a>
        </div>
        <button className="mt-2 sm:mt-0 bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
          Request a Quote
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <header className="fixed w-full z-50">
      <TopContactBar />
      <nav
        className={`bg-gradient-to-r from-blue-600 to-red-600 py-4 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/" className="flex-shrink-0">
              <img src="/logo.png" alt="Codentrake" className="h-10 w-auto" />
            </a>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(({ link, path }) => (
                <a
                  key={path}
                  href={path}
                  className={`text-base font-medium transition-colors duration-200 ${
                    pathname === path
                      ? "text-white"
                      : "text-gray-200 hover:text-white"
                  }`}
                >
                  {link}
                </a>
              ))}
             
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-200 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden fixed inset-y-0 right-0 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-6">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="mt-8">
            {navItems.map(({ link, path }) => (
              <a
                key={path}
                href={path}
                className={`block py-2.5 px-4 rounded transition duration-200 ${
                  pathname === path
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {link}
              </a>
            ))}
            <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 px-4 rounded-full font-medium hover:from-blue-700 hover:to-red-700 transition-colors duration-200">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

