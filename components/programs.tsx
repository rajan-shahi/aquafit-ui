"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Programs() {
  const programs = [
    {
      title: "Swimming Programs",
      description:
        "From beginner lessons to advanced techniques, our swimming programs cater to all ages and skill levels.",
      image: "/website/s3.webp",
      link: "/services",
    },
    {
      title: "Gym Workouts",
      description:
        "Strength training, cardio, and functional fitness programs designed to help you achieve your fitness goals.",
      image: "/website/g3.webp",
      link: "/services",
    },
    {
      title: "Aqua Fitness",
      description:
        "Low-impact, high-resistance workouts in the water that are perfect for all fitness levels and ages.",
        image: "/website/g1.webp",
      link: "/services",
    },
    {
      title: "Personal Training",
      description:
        "One-on-one sessions with our expert trainers to create a customized fitness plan tailored to your needs.",
        image: "/website/s5.webp",
      link: "/services",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Programs" subtitle="What We Offer" center={true} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue/80 to-transparent opacity-70 group-hover:from-pink/80 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">{program.description}</p>
                <motion.div whileHover={{ x: 5 }} whileTap={{ x: 0 }}>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-blue font-medium hover:text-pink transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
