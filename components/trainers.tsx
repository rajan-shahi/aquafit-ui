"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Award, Star } from "lucide-react"
import SectionHeading from "./section-heading"

const trainers = [
  {
    name: "Michael Johnson",
    role: "Swimming Coach",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former Olympic swimmer with 15+ years of coaching experience. Specializes in freestyle and butterfly techniques.",
    specialties: ["Freestyle Technique", "Competition Training", "Youth Development"],
    experience: "15+ years",
    certifications: ["Olympic Athlete", "Certified Swimming Coach", "First Aid & CPR"],
    rating: 4.9,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Sarah Williams",
    role: "Aqua Fitness Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Passionate about water-based fitness for all ages and abilities. Expert in low-impact, high-resistance workouts.",
    specialties: ["Aqua Aerobics", "Senior Fitness", "Rehabilitation"],
    experience: "8 years",
    certifications: ["Aquatic Exercise Association", "Water Safety Instructor", "Rehabilitation Specialist"],
    rating: 4.8,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "James Rodriguez",
    role: "Strength & Conditioning Coach",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former professional athlete turned fitness coach. Focuses on functional strength and athletic performance.",
    specialties: ["Strength Training", "HIIT Workouts", "Sports Performance"],
    experience: "12 years",
    certifications: ["NSCA Certified Strength Coach", "CrossFit Level 3", "Sports Nutrition"],
    rating: 4.9,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Emma Wilson",
    role: "Yoga & Pilates Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dedicated to helping clients improve flexibility, core strength, and mind-body connection.",
    specialties: ["Vinyasa Yoga", "Mat Pilates", "Meditation"],
    experience: "10 years",
    certifications: ["RYT-500 Yoga Alliance", "Pilates Method Alliance", "Mindfulness Meditation"],
    rating: 4.7,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

export default function Trainers() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue/5">
      <div className="container mx-auto px-4">
        <SectionHeading title="Meet Our Expert Team" subtitle="Professional Trainers" center={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <div className="relative w-full md:w-2/5">
                <div className="relative h-80 md:h-full overflow-hidden">
                  <Image src={trainer.image || "/placeholder.svg"} alt={trainer.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue/80 to-transparent opacity-0 hover:opacity-70 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <motion.a
                        href={trainer.social.facebook}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Facebook className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={trainer.social.twitter}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href={trainer.social.instagram}
                        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue hover:bg-blue hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Instagram className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-pink text-white text-xs font-bold px-3 py-1 rounded-full">
                  {trainer.experience}
                </div>
              </div>

              <div className="w-full md:w-3/5 p-6 md:p-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{trainer.name}</h3>
                    <p className="text-pink font-medium">{trainer.role}</p>
                  </div>
                  <div className="flex items-center bg-blue/10 px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-blue fill-blue mr-1" />
                    <span className="text-sm font-bold text-blue">{trainer.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{trainer.bio}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                    <Award className="h-4 w-4 mr-1 text-blue" /> Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trainer.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="text-xs bg-gradient-to-r from-blue/20 to-pink/20 text-blue px-3 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4 mt-4">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Certifications</h4>
                  <ul className="space-y-1">
                    {trainer.certifications.map((cert, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-pink mr-2"></div>
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className="mt-6 bg-gradient-to-r from-blue to-pink text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
