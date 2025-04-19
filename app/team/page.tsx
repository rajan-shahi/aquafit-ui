"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Facebook, Twitter, Instagram, Award, Star, X, Mail, Phone, ChevronDown } from "lucide-react"
import PageHeader from "@/components/page-header"

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Swimming Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former Olympic swimmer with 15+ years of coaching experience. Michael leads our swimming program with expertise in freestyle and butterfly techniques.",
    specialties: ["Olympic Training", "Competition Coaching", "Youth Development"],
    experience: "15+ years",
    certifications: ["Olympic Athlete", "Certified Swimming Coach", "First Aid & CPR"],
    education: "B.S. in Sports Science, University of Michigan",
    department: "swimming",
    featured: true,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Aqua Fitness Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Passionate about water-based fitness for all ages and abilities. Sarah specializes in developing low-impact, high-resistance workouts that deliver results.",
    specialties: ["Aqua Aerobics", "Senior Fitness", "Rehabilitation"],
    experience: "8 years",
    certifications: ["Aquatic Exercise Association", "Water Safety Instructor", "Rehabilitation Specialist"],
    education: "M.S. in Exercise Physiology, Boston University",
    department: "swimming",
    featured: true,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Fitness Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former professional athlete turned fitness coach. James focuses on functional strength and athletic performance, helping members achieve their personal best.",
    specialties: ["Strength Training", "HIIT Workouts", "Sports Performance"],
    experience: "12 years",
    certifications: ["NSCA Certified Strength Coach", "CrossFit Level 3", "Sports Nutrition"],
    education: "B.S. in Kinesiology, UCLA",
    department: "fitness",
    featured: true,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Wellness Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dedicated to helping clients improve flexibility, core strength, and mind-body connection. Emma brings a holistic approach to fitness and wellness.",
    specialties: ["Yoga", "Pilates", "Meditation"],
    experience: "10 years",
    certifications: ["RYT-500 Yoga Alliance", "Pilates Method Alliance", "Mindfulness Meditation"],
    education: "M.A. in Holistic Health, NYU",
    department: "fitness",
    featured: true,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "David Chen",
    role: "Swimming Coach",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specialized in teaching advanced swimming techniques and preparing athletes for competition. David has coached multiple regional champions.",
    specialties: ["Competitive Swimming", "Stroke Refinement", "Race Strategy"],
    experience: "7 years",
    certifications: ["USA Swimming Coach", "Lifeguard Instructor", "First Aid & CPR"],
    education: "B.S. in Physical Education, Stanford University",
    department: "swimming",
    featured: false,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    name: "Olivia Martinez",
    role: "Kids Program Coordinator",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Specializing in children's swimming and fitness programs. Olivia creates fun, engaging activities that build confidence and skills in young participants.",
    specialties: ["Kids Swimming", "Water Safety", "Youth Fitness"],
    experience: "6 years",
    certifications: ["Child Development", "Swim Instructor", "Pediatric First Aid"],
    education: "B.A. in Early Childhood Education, Columbia University",
    department: "swimming",
    featured: false,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 7,
    name: "Marcus Thompson",
    role: "Personal Trainer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Expert in personalized fitness programs and nutrition planning. Marcus helps clients transform their bodies and reach their fitness goals.",
    specialties: ["Weight Loss", "Muscle Building", "Nutrition Planning"],
    experience: "9 years",
    certifications: ["NASM Certified Personal Trainer", "Precision Nutrition", "TRX Suspension Training"],
    education: "B.S. in Nutrition Science, Penn State University",
    department: "fitness",
    featured: false,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 8,
    name: "Sophia Lee",
    role: "Group Fitness Instructor",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Energetic and motivating group fitness instructor. Sophia's classes combine fun and effective workouts that keep members coming back for more.",
    specialties: ["Zumba", "Spin Classes", "Boot Camp"],
    experience: "5 years",
    certifications: ["ACE Group Fitness Instructor", "Zumba Licensed Instructor", "Spinning Certified"],
    education: "B.F.A. in Dance, Juilliard School",
    department: "fitness",
    featured: false,
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
]

// Department categories
const departments = [
  { id: "all", name: "All Team Members" },
  { id: "swimming", name: "Swimming Department" },
  { id: "fitness", name: "Fitness Department" },
]

export default function TeamPage() {
  const [activeDepartment, setActiveDepartment] = useState("all")
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  // Filter team members based on active department
  const filteredMembers =
    activeDepartment === "all" ? teamMembers : teamMembers.filter((member) => member.department === activeDepartment)

  // Featured team members
  const featuredMembers = teamMembers.filter((member) => member.featured)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Meet Our Team"
        subtitle="Get to know our expert trainers, coaches, and staff members"
        backgroundImage="/website/s5.webp"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Featured Team Members */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-2 text-blue">Leadership Team</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Meet the experts who lead our departments and ensure we deliver the highest quality services to our members.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{member.bio}</p>
                  <button
                    className="text-blue font-medium text-sm flex items-center hover:text-pink transition-colors"
                    onClick={() => setSelectedMember(member)}
                  >
                    View Profile
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1.5">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setActiveDepartment(department.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDepartment === department.id
                    ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                    : "text-gray-700 hover:text-blue"
                }`}
              >
                {department.name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeDepartment} // Re-render animation when department changes
        >
          {filteredMembers.map((member) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-64 cursor-pointer">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue font-medium text-sm mb-2">{member.role}</p>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Award className="h-4 w-4 mr-1 text-pink" />
                  <span>{member.experience}</span>
                </div>
                <div className="flex space-x-2 mt-3">
                  <a
                    href={member.social.facebook}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue hover:text-white transition-colors"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue hover:text-white transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.instagram}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Member Profile Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 overflow-y-auto"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-80 md:h-full">
                    <Image
                      src={selectedMember.image || "/placeholder.svg"}
                      alt={selectedMember.name}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                      <p className="text-blue-300 font-medium">{selectedMember.role}</p>
                    </div>
                  </div>
                  <div className="p-6 max-h-[80vh] overflow-y-auto">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">About</h4>
                      <p className="text-gray-700">{selectedMember.bio}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Specialties</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specialties.map((specialty, index) => (
                          <span key={index} className="bg-blue/10 text-blue px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Certifications</h4>
                      <ul className="space-y-1">
                        {selectedMember.certifications.map((cert, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <Star className="h-4 w-4 text-pink mr-2" />
                            {cert}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Education</h4>
                      <p className="text-gray-700">{selectedMember.education}</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 bg-blue text-white px-4 py-2 rounded-lg hover:bg-blue-dark transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Contact
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 border border-blue text-blue px-4 py-2 rounded-lg hover:bg-blue/10 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                        Book Session
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={() => setSelectedMember(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No team members found</h3>
            <p className="text-gray-500">No team members match the selected department. Please try another filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
