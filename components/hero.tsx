"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"


export default function Hero() {
  return (
    <div className="relative pt-32 overflow-hidden bg-gradient-mesh">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-pink/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 rounded-full bg-blue/10 text-blue text-sm font-medium mb-6"
            >
              Premier Swimming & Fitness Center
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Dive Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-pink">Fitness</span> <br />
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue">Strength</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the perfect blend of swimming and gym workouts at AquaFit. Our state-of-the-art facilities are
              designed to help you achieve your fitness goals.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/apply"
                  className="bg-gradient-to-r from-blue to-pink text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 inline-block"
                >
                  Join Now
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/schedule"
                  className="border-2 border-blue text-blue px-8 py-3 rounded-full font-medium hover:bg-blue/10 transition-colors inline-block"
                >
                  View Schedule
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/website/s5.webp"
                alt="Swimming and gym facilities"
                fill
                className="object-cover"
              />

              {/* Animated overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-pink/20"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-pink rounded-full opacity-70 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -10, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
