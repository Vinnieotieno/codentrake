"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Container from "@/components/Container";
import { Card, CardContent } from "@/components/ui/card";
import { stats } from "@/constants/about";
import { Users, Briefcase, Award, Zap } from "lucide-react";

const iconMap = {
  Users,
  Briefcase,
  Award,
  Zap,
};

const CountUp = ({ end, duration = 2 }) => {
  const nodeRef = useRef(null);
  const controls = useAnimation();
  const inView = useInView(nodeRef);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const updateNumber = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const current = Math.floor(percentage * end);

      if (nodeRef.current) {
        nodeRef.current.textContent = current;
      }

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(updateNumber);
      }
    };

    if (inView) {
      controls.start({ scale: [1, 1.1, 1], transition: { duration: 0.5 } });
      animationFrame = requestAnimationFrame(updateNumber);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration, controls]);

  return <span ref={nodeRef}>0</span>;
};

const EnhancedStats = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-100 to-red-100">
      <Container>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-red-400">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.h2
                      className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500 mb-2"
                    >
                      <CountUp end={parseInt(stat.number)} />
                      {stat.number.includes("+") && "+"}
                    </motion.h2>
                    <p className="text-lg text-blue-800 font-medium">{stat.title}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default EnhancedStats;
