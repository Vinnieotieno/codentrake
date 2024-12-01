import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Container from "@/components/Container";
import RatingStars from "@/components/ui/rating-stars";
import { testimonials } from "@/constants/homepage";
import { User, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-blue-900 to-red-900 text-white">
      <Container>
        <div className="mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
                Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how Codentrake has transformed businesses with innovative software solutions
            </p>
          </motion.div>

          {/* Ensure Carousel wraps all its children */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
            setActiveIndex={setActiveIndex}
            activeIndex={activeIndex}
          >
            <CarouselContent>
              {testimonials.map((testimonial, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <RatingStars rating={testimonial.rating} size="xl" className="fill-yellow-400" />
                          <Quote className="text-blue-400 w-8 h-8" />
                        </div>
                        <p className="text-gray-200 mb-6 italic">{`"${testimonial.review}"`}</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                          <User className="text-white" />
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <span className="text-sm text-gray-300">{testimonial.title}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-none" />
              <CarouselNext className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-none" />
            </div>
          </Carousel>

          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${
                  index === activeIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
