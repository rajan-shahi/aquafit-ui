"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showTopNav, setShowTopNav] = useState(true)
  const [showMainNav, setShowMainNav] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        // At the top of the page
        setShowTopNav(true)
        setShowMainNav(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowTopNav(false)
        setShowMainNav(true)
      } else {
        // Scrolling up
        setShowTopNav(true)
        setShowMainNav(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const topNavVariants = {
    visible: { height: "40px", opacity: 1 },
    hidden: { height: 0, opacity: 0 },
  }

  const mainNavVariants = {
    visible: { height: "80px", opacity: 1 },
    hidden: { height: "0px", opacity: 0 },
  }

  return (
    <header className="fixed w-full z-50">
      {/* Top Navbar */}
      <AnimatePresence>
        {showTopNav && (
          <motion.div
            className="bg-gradient-to-r from-blue to-pink text-white"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={topNavVariants}
          >
            <div className="container mx-auto px-4 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center text-sm">
                  <span className="mr-6 hidden sm:inline-block">📞 (123) 456-7890</span>
                  <span className="hidden sm:inline-block">📧 info@aquafit.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="#" className="text-white hover:text-white/80 text-sm">
                    <span className="hidden sm:inline-block">Special Offers</span>
                    <span className="sm:hidden">🎁</span>
                  </a>
                  <a href="#" className="text-white hover:text-white/80 text-sm">
                    <span className="hidden sm:inline-block">Member Login</span>
                    <span className="sm:hidden">👤</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <AnimatePresence>
        {showMainNav && (
          <motion.div
            className="bg-white shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mainNavVariants}
          >
            <div className="container mx-auto px-4 h-full">
              <div className="flex items-center justify-between h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                  <motion.div
                    className="w-10 h-10 rounded-full bg-blue flex items-center justify-center mr-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white font-bold text-xl">AF</span>
                  </motion.div>
                  <span className="text-blue font-bold text-xl">AquaFit</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                  <Link href="/" className="text-gray-700 hover:text-blue font-medium">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-700 hover:text-blue font-medium">
                    About
                  </Link>
                  <Link href="/services" className="text-gray-700 hover:text-blue font-medium">
                    Services
                  </Link>
                  <Link href="/schedule" className="text-gray-700 hover:text-blue font-medium">
                    Schedule
                  </Link>
                  <Link href="/team" className="text-gray-700 hover:text-blue font-medium">
                    Our Teams
                  </Link>
                  <Link href="/gallery" className="text-gray-700 hover:text-blue font-medium">
                    gallery
                  </Link>
                  <Link href="/contact" className="text-gray-700 hover:text-blue font-medium">
                    Contact
                  </Link>
                </nav>

                {/* CTA Button */}
                <div className="hidden lg:block">
                  <Link
                    href="/apply"
                    className="bg-gradient-to-r from-blue to-pink text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  className="lg:hidden text-gray-700 focus:outline-none"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="/"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/schedule"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                href="/contact"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/team"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
               Our Teams
              </Link>
              <Link
                href="/gallery"
                className="block py-2 text-gray-700 hover:text-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              
              <Link
                href="/apply"
                className="block bg-gradient-to-r from-blue to-pink text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
