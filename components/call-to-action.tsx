"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CallToAction() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-r from-blue to-pink rounded-2xl overflow-hidden shadow-xl relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <motion.div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -20, 0],
              y: [0, 20, 0],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />

          <div className="p-12 md:p-16 text-center relative z-10">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-white text-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Fitness Journey?
            </motion.h2>

            <motion.p
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join AquaFit today and experience the perfect balance of swimming and gym workouts. Our expert trainers
              and state-of-the-art facilities are waiting for you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/apply"
                  className="bg-white text-blue px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors inline-block"
                >
                  Apply Now
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
