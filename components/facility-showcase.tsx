"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "./section-heading"

const facilities = [
  {
    id: 1,
    name: "Olympic-Sized Swimming Pool",
    description:
      "Our state-of-the-art Olympic-sized swimming pool features 8 lanes, professional starting blocks, and is maintained at the perfect temperature year-round.",
      image: "/website/s4.webp",
    features: ["8 Competition Lanes", "Heated Water", "Professional Starting Blocks", "Spectator Seating"],
  },
  {
    id: 2,
    name: "Modern Fitness Center",
    description:
      "Equipped with the latest cardio machines, free weights, and strength training equipment to help you achieve your fitness goals.",
      image: "/website/g3.webp",
    features: ["Latest Equipment", "Free Weights Area", "Cardio Zone", "Functional Training Space"],
  },
  {
    id: 3,
    name: "Group Exercise Studios",
    description:
      "Spacious studios with floating wood floors, mirrored walls, and state-of-the-art sound systems for our wide range of group fitness classes.",
    image: "/placeholder.svg?height=600&width=1200",
    features: ["Multiple Studios", "Professional Sound System", "Climate Control", "Specialized Equipment"],
  },
  {
    id: 4,
    name: "Luxury Locker Rooms",
    description:
      "Comfortable locker rooms with private showers, saunas, steam rooms, and all the amenities you need for before and after your workout.",
    image: "/placeholder.svg?height=600&width=1200",
    features: ["Private Showers", "Saunas", "Steam Rooms", "Complimentary Toiletries"],
  },
  {
    id: 5,
    name: "Recovery & Wellness Area",
    description:
      "Dedicated space for stretching, foam rolling, and recovery with massage chairs and compression therapy devices.",
    image: "/placeholder.svg?height=600&width=1200",
    features: ["Massage Chairs", "Compression Therapy", "Stretching Area", "Cold Plunge Pool"],
  },
]

export default function FacilityShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === facilities.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? facilities.length - 1 : prevIndex - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Facilities" subtitle="World-Class Amenities" center={true} />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={facilities[currentIndex].image || "/placeholder.svg"}
                    alt={facilities[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {facilities[currentIndex].name}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {facilities[currentIndex].description}
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-2 gap-4 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {facilities[currentIndex].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-blue mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </motion.div>
                  <motion.button
                    className="bg-gradient-to-r from-blue to-pink text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Take a Virtual Tour
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-blue p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {facilities.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentIndex === index ? "bg-blue" : "bg-gray-300"
              } transition-colors`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
