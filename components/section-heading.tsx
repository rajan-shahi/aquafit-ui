"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  center?: boolean
  light?: boolean
}

export default function SectionHeading({ title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0 to ensure visibility on page load
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }} // Added amount to trigger earlier
        className="relative inline-block"
      >
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${light ? "bg-white/20 text-white" : "bg-blue/10 text-blue"}`}
        >
          {subtitle}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 1, y: 0 }} // Changed from opacity: 0 to ensure visibility on page load
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.1 }} // Added amount to trigger earlier
        className={`text-3xl md:text-4xl font-bold mb-6 ${light ? "text-white" : "text-gray-900"}`}
      >
        <span className="relative">
          {title}
          <motion.span
            className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue to-pink rounded-full"
            initial={{ width: "100%" }} // Changed from width: 0 to ensure visibility on page load
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, amount: 0.1 }} // Added amount to trigger earlier
          />
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 1, scale: 1 }} // Changed from opacity: 0, scale: 0.8 to ensure visibility on page load
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }} // Added amount to trigger earlier
        className={`w-20 h-1 ${center ? "mx-auto" : ""} rounded-full bg-gradient-to-r from-blue to-pink`}
      />
    </div>
  )
}
