"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member for 2 years",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "AquaFit has transformed my fitness journey. The combination of swimming and gym workouts has helped me lose weight and gain strength. The trainers are knowledgeable and supportive!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Member for 1 year",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "I joined AquaFit to improve my swimming technique, but I've gained so much more. The facilities are top-notch, and the community is welcoming and motivating.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Member for 3 years",
      image: "/placeholder.svg?height=200&width=200",
      content:
        "As someone with joint issues, the aqua fitness classes have been a game-changer. I can work out without pain, and the instructors are attentive to my needs.",
      rating: 4,
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
    <section className="py-20 bg-gradient-to-br from-blue to-blue-dark text-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="What Our Members Say" subtitle="Testimonials" center={true} light={true} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-xl"
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-pink"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div>
                  <h3 className="font-bold text-xl">{testimonial.name}</h3>
                  <p className="text-pink">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-6 text-gray-200">{testimonial.content}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-pink fill-pink" : "text-gray-400"}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
