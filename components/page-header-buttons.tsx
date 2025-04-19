"use client"
import { motion } from "framer-motion"
import Link from "next/link"

interface PageHeaderButtonsProps {
  primaryLink?: string
  primaryText?: string
  secondaryLink?: string
  secondaryText?: string
  showButtons?: boolean
}

export default function PageHeaderButtons({
  primaryLink = "/services",
  primaryText = "Explore Services",
  secondaryLink = "/apply",
  secondaryText = "Join Now",
  showButtons = true,
}: PageHeaderButtonsProps) {
  if (!showButtons) return null

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <motion.div
      className="mt-10 flex flex-wrap justify-center gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={primaryLink}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-blue font-medium overflow-hidden shadow-lg transition-all duration-300"
        >
          {/* Hover effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue to-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

          {/* Button content */}
          <span className="relative flex items-center z-10 group-hover:text-white transition-colors duration-300">
            <span>{primaryText}</span>
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>

          {/* Ripple effect */}
          <span className="absolute top-0 left-0 w-full h-full bg-white/30 transform scale-0 opacity-0 group-hover:scale-[2.5] group-hover:opacity-100 rounded-full transition-all duration-500 origin-center"></span>
        </Link>
      </motion.div>

      <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link
          href={secondaryLink}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white font-medium overflow-hidden transition-all duration-300"
        >
          {/* Button content */}
          <span className="relative flex items-center z-10">
            <span>{secondaryText}</span>
            <svg
              className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </span>

          {/* Hover effect */}
          <span className="absolute inset-0 bg-white/20 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>
        </Link>
      </motion.div>
    </motion.div>
  )
}
