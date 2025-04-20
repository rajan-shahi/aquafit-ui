"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import PageHeaderButtons from "./page-header-buttons";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showButtons?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=600&width=1200",
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  showButtons = true,
}: PageHeaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
  }, [controls]);

  // Split title into words for animated text effect
  const titleWords = title.split(" ");

  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated background with parallax effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "120% auto",
        }}
        initial={{ scale: 1.1 }}
        animate={{
          scale: 1,
          backgroundPositionX: ["0%", "100%", "0%"],
        }}
        transition={{
          scale: { duration: 1.5 },
          backgroundPositionX: {
            duration: 60,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.5, 1],
          },
        }}
      >
        {/* Gradient overlay with animated opacity */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue/95 to-pink/95"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated circles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.1, 1],
              opacity: [0, 0.2, 0.15],
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Swimming wave animation - top */}
      <div className="absolute top-0 left-0 w-full h-20 z-0 opacity-30">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' class='shape-fill' fill='%23FFFFFF'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' class='shape-fill' fill='%23FFFFFF'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' class='shape-fill' fill='%23FFFFFF'%3E%3C/path%3E%3C/svg%3E\")",
            backgroundSize: "100% 100%",
          }}
          animate={{
            x: ["-25%", "0%", "-25%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
            times: [0, 0.5, 1],
          }}
        />
      </div>

      {/* Bubbles animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/30 backdrop-blur-sm"
            style={{
              width: Math.random() * 15 + 5,
              height: Math.random() * 15 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(1px)",
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: [100, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 0.7, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Swimming figure animations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Left to right swimmers */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`swimmer-lr-${i}`}
            className="absolute"
            style={{
              top: `${20 + i * 30}%`,
              left: "-100px",
              opacity: 0.15,
            }}
            animate={{
              x: ["0vw", "110vw"],
            }}
            transition={{
              duration: 30 + i * 5,
              ease: "linear",
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 10,
            }}
          >
            <svg width="80" height="30" viewBox="0 0 80 30" fill="white">
              <path
                d="M70,15 C65,5 55,10 50,15 C45,20 35,25 25,15 C15,5 5,15 0,20"
                stroke="white"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="70" cy="10" r="5" />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated title with word-by-word reveal */}
          <div className="overflow-hidden mb-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white inline-flex flex-wrap justify-center gap-x-3 gap-y-2">
              {titleWords.map((word, index) => (
                <motion.span
                  key={`word-${index}`}
                  className="inline-block"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + index * 0.1,
                    ease: [0.215, 0.61, 0.355, 1], // Cubic bezier for a nice spring effect
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Animated subtitle with reveal effect */}
          {subtitle && (
            <div className="overflow-hidden">
              <motion.p
                className="text-xl text-white/90 font-light"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            </div>
          )}

          {/* Animated decorative line */}
          <motion.div
            className="relative h-1 mx-auto mt-8 mb-10 overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/70 via-white to-white/70 rounded-full"
              animate={{
                x: ["-100%", "100%"],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="absolute inset-0 bg-white/50 rounded-full"></div>
          </motion.div>

          {/* Animated buttons */}
          <AnimatePresence>
            {isLoaded && showButtons && (
              <PageHeaderButtons
                primaryText={primaryButtonText}
                primaryLink={primaryButtonLink}
                secondaryText={secondaryButtonText}
                secondaryLink={secondaryButtonLink}
                showButtons={showButtons}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative wave */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-16 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </motion.div>
    </div>
  );
}
