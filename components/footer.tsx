"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-dark to-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mr-2">
                <span className="text-white font-bold text-xl">AF</span>
              </div>
              <span className="text-white font-bold text-xl">AquaFit</span>
            </div>
            <p className="text-gray-300 mb-6">
              AquaFit combines the best of swimming and gym facilities to provide a comprehensive fitness experience for
              all ages and abilities.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-dark border border-pink flex items-center justify-center hover:bg-pink hover:text-blue-dark transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-dark border border-pink flex items-center justify-center hover:bg-pink hover:text-blue-dark transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-dark border border-pink flex items-center justify-center hover:bg-pink hover:text-blue-dark transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-dark border border-pink flex items-center justify-center hover:bg-pink hover:text-blue-dark transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/" className="text-gray-300 hover:text-pink transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/about" className="text-gray-300 hover:text-pink transition-colors">
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/schedule" className="text-gray-300 hover:text-pink transition-colors">
                  Schedule
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/contact" className="text-gray-300 hover:text-pink transition-colors">
                  Contact
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/apply" className="text-gray-300 hover:text-pink transition-colors">
                  Apply Now
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Swimming Lessons
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Personal Training
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Group Fitness Classes
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Aqua Aerobics
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Strength Training
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }}>
                <Link href="/services" className="text-gray-300 hover:text-pink transition-colors">
                  Nutrition Counseling
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pink mr-3 mt-1 flex-shrink-0" />
                <span>
                  123 Fitness Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pink mr-3 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pink mr-3 flex-shrink-0" />
                <span>info@aquafit.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} AquaFit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-pink text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
