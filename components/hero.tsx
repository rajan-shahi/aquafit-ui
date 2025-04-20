"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Droplets, Activity, Users } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 py-20  to-white dark:from-slate-950 dark:to-blue-950/30">
      {/* Color background elements - blue primary and pink secondary */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Blue primary circle */}
        <motion.div
          className="absolute rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #0066ff 0%, rgba(0,102,255,0) 70%)",
            width: "80%",
            height: "80%",
            top: "10%",
            left: "60%",
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Pink secondary circle */}
        <motion.div
          className="absolute rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, #ff66b2 0%, rgba(255,102,178,0) 70%)",
            width: "70%",
            height: "70%",
            top: "40%",
            left: "30%",
            filter: "blur(70px)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Light blue accent */}
        <motion.div
          className="absolute rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, #33adff 0%, rgba(51,173,255,0) 70%)",
            width: "50%",
            height: "50%",
            bottom: "10%",
            left: "10%",
            filter: "blur(50px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 flex flex-col items-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-white/80 dark:bg-slate-800/80 backdrop-pink-sm rounded-full py-2 px-5 shadow-lg border  border-pink dark:border-pink"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-blue dark:text-blue">
            <Droplets className="h-4 w-4" />
            <span>AquaFit Premium Experience</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="w-full md:max-w-8xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-l from-blue to-pink">Dive Into   
                  Aqua Fit</span>
                
              </motion.h1>

              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                }}
              >
                Experience the perfect blend of swimming and strength training at AquaFit. 
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  href="/apply"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue to-pink px-6 py-3.5 text-white shadow-lg transition-all duration-300 hover:shadow-blue-400 mt-8"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-medium">
                    <span>Join Now</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.span
                    className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"
                    initial={false}
                    whileHover={{ opacity: 1 }}
                  />
                </Link>

                
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  { value: "25m", label: "Olympic Pool", color: "from-blue to-blue-400" },
                  { value: "24/7", label: "Access", color: "from-pink to-pink-400" },
                  { value: "50+", label: "Classes Weekly", color: "from-blue to-pink-400" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Main image */}
                <motion.div
                  className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden"
                  style={{
                    transform: `translateY(${scrollY * -0.08}px)`,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Color overlay - blue and pink mix */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-pink-500/20 z-10" />

                  <Image
                    src="/website/s5.webp"
                    alt="Premium swimming facilities"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Floating card 1 - Blue primary theme */}
                <motion.div
                  className="absolute -bottom-6 -left-6 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    transform: `translate(${scrollY * 0.03}px, ${scrollY * -0.05}px)`,
                  }}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 backdrop-blur-sm border-l-4 border-blue">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue dark:bg-blue flex items-center justify-center text-white dark:text-blue">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Expert</div>
                        <div className="font-semibold text-slate-900 dark:text-white">Training Sessions</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating card 2 - Pink secondary theme */}
                <motion.div
                  className="absolute -top-6 -right-6 z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  style={{
                    transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.05}px)`,
                  }}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-4 backdrop-blur-sm border-r-4 border-pink">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink dark:bg-pink flex items-center justify-center text-white dark:text-pink">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">Community</div>
                        <div className="font-semibold text-slate-900 dark:text-white">Group Classes</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Blue accent element */}
                <motion.div
                  className="absolute -bottom-3 right-12 w-12 h-12 rounded-full border-4 border-blue z-10 opacity-70"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />

                {/* Pink accent element */}
                <motion.div
                  className="absolute -top-3 left-12 w-12 h-12 rounded-full border-4 border-pink z-10 opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Blue and pink wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#0066ff" // Blue primary
              opacity=".2"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#ff66b2" // Pink secondary
              opacity=".2"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="#33adff" // Light blue accent
              opacity=".2"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
