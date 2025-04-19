"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import SectionHeading from "./section-heading"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const classes = {
  Monday: [
    {
      time: "06:00 - 07:00",
      name: "Early Bird Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 8,
    },
    {
      time: "08:00 - 09:00",
      name: "Aqua Aerobics",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 5,
    },
    {
      time: "10:00 - 11:00",
      name: "HIIT Training",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Intermediate",
      spots: 10,
    },
    {
      time: "12:00 - 13:00",
      name: "Lunch Express Workout",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 12,
    },
    {
      time: "17:00 - 18:00",
      name: "Competitive Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "Advanced",
      spots: 3,
    },
    {
      time: "19:00 - 20:00",
      name: "Body Pump",
      instructor: "Alex Thompson",
      type: "gym",
      level: "Intermediate",
      spots: 7,
    },
  ],
  Tuesday: [
    {
      time: "06:00 - 07:00",
      name: "Lap Swimming",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 10,
    },
    {
      time: "09:00 - 10:00",
      name: "Senior Swim",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 8,
    },
    {
      time: "11:00 - 12:00",
      name: "Strength Training",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Intermediate",
      spots: 6,
    },
    {
      time: "13:00 - 14:00",
      name: "Yoga Flow",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 4,
    },
    {
      time: "18:00 - 19:00",
      name: "Water Polo",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "Intermediate",
      spots: 2,
    },
    {
      time: "20:00 - 21:00",
      name: "Core Conditioning",
      instructor: "Alex Thompson",
      type: "gym",
      level: "All Levels",
      spots: 9,
    },
  ],
  Wednesday: [
    {
      time: "06:00 - 07:00",
      name: "Early Bird Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 8,
    },
    {
      time: "08:00 - 09:00",
      name: "Aqua Aerobics",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 5,
    },
    {
      time: "10:00 - 11:00",
      name: "HIIT Training",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Intermediate",
      spots: 10,
    },
    {
      time: "12:00 - 13:00",
      name: "Lunch Express Workout",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 12,
    },
    {
      time: "17:00 - 18:00",
      name: "Competitive Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "Advanced",
      spots: 3,
    },
    {
      time: "19:00 - 20:00",
      name: "Body Pump",
      instructor: "Alex Thompson",
      type: "gym",
      level: "Intermediate",
      spots: 7,
    },
  ],
  Thursday: [
    {
      time: "06:00 - 07:00",
      name: "Lap Swimming",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 10,
    },
    {
      time: "09:00 - 10:00",
      name: "Senior Swim",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 8,
    },
    {
      time: "11:00 - 12:00",
      name: "Strength Training",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Intermediate",
      spots: 6,
    },
    {
      time: "13:00 - 14:00",
      name: "Yoga Flow",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 4,
    },
    {
      time: "18:00 - 19:00",
      name: "Water Polo",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "Intermediate",
      spots: 2,
    },
    {
      time: "20:00 - 21:00",
      name: "Core Conditioning",
      instructor: "Alex Thompson",
      type: "gym",
      level: "All Levels",
      spots: 9,
    },
  ],
  Friday: [
    {
      time: "06:00 - 07:00",
      name: "Early Bird Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 8,
    },
    {
      time: "08:00 - 09:00",
      name: "Aqua Aerobics",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 5,
    },
    {
      time: "10:00 - 11:00",
      name: "HIIT Training",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Intermediate",
      spots: 10,
    },
    {
      time: "12:00 - 13:00",
      name: "Lunch Express Workout",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 12,
    },
    {
      time: "17:00 - 18:00",
      name: "Competitive Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "Advanced",
      spots: 3,
    },
    {
      time: "19:00 - 20:00",
      name: "Body Pump",
      instructor: "Alex Thompson",
      type: "gym",
      level: "Intermediate",
      spots: 7,
    },
  ],
  Saturday: [
    {
      time: "08:00 - 09:00",
      name: "Weekend Warrior Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 15,
    },
    {
      time: "10:00 - 11:00",
      name: "Family Swim",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "Beginner",
      spots: 20,
    },
    {
      time: "12:00 - 13:00",
      name: "Bootcamp",
      instructor: "James Rodriguez",
      type: "gym",
      level: "Advanced",
      spots: 8,
    },
    {
      time: "14:00 - 15:00",
      name: "Pilates",
      instructor: "Emma Wilson",
      type: "gym",
      level: "All Levels",
      spots: 10,
    },
  ],
  Sunday: [
    {
      time: "09:00 - 10:00",
      name: "Open Swim",
      instructor: "Michael Johnson",
      type: "swimming",
      level: "All Levels",
      spots: 25,
    },
    {
      time: "11:00 - 12:00",
      name: "Aqua Yoga",
      instructor: "Sarah Williams",
      type: "swimming",
      level: "All Levels",
      spots: 12,
    },
    {
      time: "13:00 - 14:00",
      name: "Gentle Fitness",
      instructor: "Emma Wilson",
      type: "gym",
      level: "Beginner",
      spots: 15,
    },
    {
      time: "15:00 - 16:00",
      name: "Stretch & Recover",
      instructor: "Alex Thompson",
      type: "gym",
      level: "All Levels",
      spots: 20,
    },
  ],
}

export default function ClassSchedule() {
  const [activeDay, setActiveDay] = useState("Monday")
  const [filter, setFilter] = useState("all") // all, swimming, gym

  const filteredClasses =
    filter === "all"
      ? classes[activeDay as keyof typeof classes]
      : classes[activeDay as keyof typeof classes].filter((cls) => cls.type === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Class Schedule" subtitle="Weekly Classes" center={true} />

        <div className="mb-8 flex justify-center">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                  : "text-gray-700 hover:text-blue"
              }`}
            >
              All Classes
            </button>
            <button
              onClick={() => setFilter("swimming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "swimming"
                  ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                  : "text-gray-700 hover:text-blue"
              }`}
            >
              Swimming
            </button>
            <button
              onClick={() => setFilter("gym")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === "gym"
                  ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                  : "text-gray-700 hover:text-blue"
              }`}
            >
              Gym
            </button>
          </div>
        </div>

        <div className="mb-8 overflow-x-auto">
          <div className="inline-flex space-x-2 min-w-full px-4 py-2">
            {days.map((day) => (
              <motion.button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeDay === day
                    ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {day}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls, index) => (
            <motion.div
              key={`${activeDay}-${index}`}
              className={`bg-white rounded-xl shadow-md overflow-hidden border-t-4 ${
                cls.type === "swimming" ? "border-blue" : "border-pink"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cls.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{cls.time}</span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      cls.type === "swimming" ? "bg-blue/10 text-blue" : "bg-pink/10 text-pink"
                    }`}
                  >
                    {cls.type === "swimming" ? "Swimming" : "Gym"}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <User className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-700">{cls.instructor}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {cls.level}
                  </span>
                  <div className="text-sm">
                    <span className="font-medium text-blue">{cls.spots}</span>{" "}
                    <span className="text-gray-500">spots left</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-blue to-pink text-white py-2 rounded-lg font-medium hover:shadow-md transition-shadow">
                  Book Class
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.button
            className="bg-blue text-white px-8 py-3 rounded-full font-medium hover:bg-blue-dark transition-colors inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="mr-2 h-5 w-5" />
            View Full Schedule
          </motion.button>
        </div>
      </div>
    </section>
  )
}
