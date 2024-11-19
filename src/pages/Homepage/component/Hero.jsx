import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import hero from "@/assets/hero.png";
import { socials } from "@/constants/footer";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 lg:pt-36 pb-10 bg-brandLighter bg-opacity-40 overflow-hidden">
      <Container>
        <div className="lg:flex mx-auto gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.6 }}
            className="lg:w-7/12 w-full mx-auto"
          >
            <h1 className="font-semibold text-3xl lg:text-6xl leading-tight text-brandDark">
              Elevate Your Brand with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandDark to-brandMedium">
                Vigilux Corp
              </span>
            </h1>
            <h2 className="font-semibold text-lg lg:text-2xl leading-tight my-5 text-brandMedium">
              Where tech meets creativity
            </h2>
            <p className="my-5 text-base text-brandDark/80 max-w-2xl">
              In the fast-paced and ever-evolving world of technology, finding skilled and knowledgeable professionals is crucial for the success of
              any business. We're here to bridge that gap and propel your brand forward.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              {socials && (
                <div className="inline-flex items-center space-x-4 bg-brandDark p-4 rounded-lg shadow-lg">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-110"
                    >
                      <img src={social.img} className="h-8 w-8" alt={`${social.name} icon`} />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-5/12 w-full relative lg:mt-6 mx-auto mt-10"
          >
            <div className="relative">
              <div className="h-[50vw] w-[50vw] sm:h-72 sm:w-80 bg-gradient-to-br from-brandDark to-brandMedium rounded-t-[10%] rounded-br-[30%] rounded mx-auto shadow-2xl transform rotate-3"></div>
              <img
                src={hero}
                className="absolute -top-8 -left-10 lg:h-80 md:h-72 z-10 filter drop-shadow-xl"
                alt="Vigilux Corp Hero"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;