"use client"

import { Dumbbell, Waves, Users, Award, Clock, Heart } from "lucide-react"
import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Features() {
  const features = [
    {
      icon: <Dumbbell className="h-10 w-10 text-blue" />,
      title: "State-of-the-Art Equipment",
      description: "Access to the latest fitness equipment for strength training, cardio, and functional workouts.",
    },
    {
      icon: <Waves className="h-10 w-10 text-blue" />,
      title: "Olympic-Sized Pool",
      description: "Enjoy swimming in our pristine Olympic-sized pool with dedicated lanes for all skill levels.",
    },
    {
      icon: <Users className="h-10 w-10 text-blue" />,
      title: "Expert Trainers",
      description: "Our certified trainers and swimming coaches provide personalized guidance and support.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue" />,
      title: "Diverse Classes",
      description:
        "Choose from a wide range of fitness classes, from aqua aerobics to high-intensity interval training.",
    },
    {
      icon: <Clock className="h-10 w-10 text-blue" />,
      title: "Flexible Hours",
      description: "Open early and late to accommodate your busy schedule, with weekend availability.",
    },
    {
      icon: <Heart className="h-10 w-10 text-blue" />,
      title: "Wellness Focus",
      description: "Comprehensive approach to fitness that addresses physical, mental, and nutritional health.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-gradient-mesh">
      <div className="container mx-auto px-4">
        <SectionHeading title="Why Choose AquaFit" subtitle="Our Advantages" center={true} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-pink hover:transform hover:-translate-y-2 transition-transform duration-300"
              variants={item}
              whileHover={{
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "#0062FF",
              }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue/20 to-pink/20 flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-blue">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
