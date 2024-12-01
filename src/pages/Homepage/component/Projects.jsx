{/*import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/constants/homepage";
import { ChevronRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-14 text-brandDark bg-gradient-to-b from-white to-brandLighter">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
            }}
            className="mx-auto w-full max-w-full space-y-8"
          >
            <div className="lg:flex justify-between items-center mb-10">
              <div className="lg:w-10/12">
                <h2 className="font-bold text-3xl lg:text-5xl leading-tight mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandDark to-brandMedium">Showcase</span> Projects
                </h2>
                <p className="text-lg text-brandDark/80 max-w-3xl">
                  Explore a selection of our completed projects that showcase our expertise in web development, UI/UX design, and application
                  programming. Each project reflects our commitment to innovation, quality, and client satisfaction.
                </p>
              </div>

              <div className="space-x-3 mx-auto mt-6 lg:mt-0">
                <CarouselPrevious className="relative inset-0 h-10 w-10 translate-x-0 translate-y-0 border-brandDark bg-white hover:bg-brandLighter transition-colors duration-300" />
                <CarouselNext className="relative inset-0 h-10 w-10 translate-x-0 translate-y-0 border-brandDark bg-white hover:bg-brandLighter transition-colors duration-300" />
              </div>
            </div>

            <CarouselContent className="w-full flex -ml-4">
              {projects.map((project, idx) => (
                <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                  >
                    <img src={project.img} className="w-full h-48 object-cover" alt={project.name} />
                    <div className="p-6 bg-brandLighter bg-opacity-40">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-sm text-brandDark/70 mb-4">{project.desc}</p>
                      <div className="flex justify-end">
                        <Button
                          className="bg-brandDark hover:bg-brandMedium text-white transition-colors duration-300"
                          variant=""
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            View Project
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </Container>
    </div>
  );
};

export default Projects; */}