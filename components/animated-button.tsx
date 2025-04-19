"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedButtonProps {
  href?: string
  variant?: "primary" | "secondary" | "outline"
  children: ReactNode
  className?: string
  delay?: number
  direction?: "left" | "right"
  onClick?: () => void
}

export default function AnimatedButton({
  href,
  variant = "primary",
  children,
  className = "",
  delay = 0,
  direction = "right",
  onClick,
}: AnimatedButtonProps) {
  // Define styles based on variant
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-r from-blue to-pink text-white hover:shadow-lg"
      case "secondary":
        return "bg-white text-blue hover:bg-blue hover:text-white"
      case "outline":
        return "border-2 border-white text-white hover:bg-white hover:text-blue"
      default:
        return "bg-gradient-to-r from-blue to-pink text-white hover:shadow-lg"
    }
  }

  // Define animation based on direction
  const getInitialX = () => {
    return direction === "right" ? 100 : -100
  }

  const buttonContent = (
    <motion.div
      className={`px-8 py-3 rounded-full font-medium transition-colors flex items-center ${getVariantStyles()} ${className}`}
      initial={{ opacity: 0, x: getInitialX() }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  // Return as link if href is provided, otherwise as button
  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent
}
