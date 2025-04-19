import { Calendar, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function SchedulePage() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const swimmingSchedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Early Bird Swim" },
        { time: "9:00 AM - 10:00 AM", name: "Aqua Aerobics" },
        { time: "4:00 PM - 5:00 PM", name: "Kids Swimming Lessons" },
        { time: "6:00 PM - 7:00 PM", name: "Adult Swimming Lessons" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Lap Swimming" },
        { time: "10:00 AM - 11:00 AM", name: "Senior Aqua Fitness" },
        { time: "5:00 PM - 6:00 PM", name: "Water Polo" },
        { time: "7:00 PM - 8:00 PM", name: "Advanced Swimming Techniques" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Early Bird Swim" },
        { time: "9:00 AM - 10:00 AM", name: "Aqua Aerobics" },
        { time: "4:00 PM - 5:00 PM", name: "Kids Swimming Lessons" },
        { time: "6:00 PM - 7:00 PM", name: "Adult Swimming Lessons" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Lap Swimming" },
        { time: "10:00 AM - 11:00 AM", name: "Senior Aqua Fitness" },
        { time: "5:00 PM - 6:00 PM", name: "Water Polo" },
        { time: "7:00 PM - 8:00 PM", name: "Advanced Swimming Techniques" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Early Bird Swim" },
        { time: "9:00 AM - 10:00 AM", name: "Aqua Aerobics" },
        { time: "4:00 PM - 5:00 PM", name: "Kids Swimming Lessons" },
        { time: "6:00 PM - 7:00 PM", name: "Adult Swimming Lessons" },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { time: "8:00 AM - 9:00 AM", name: "Family Swim" },
        { time: "10:00 AM - 11:00 AM", name: "Aqua Zumba" },
        { time: "1:00 PM - 2:00 PM", name: "Competitive Swim Training" },
      ],
    },
    {
      day: "Sunday",
      classes: [
        { time: "9:00 AM - 10:00 AM", name: "Open Swim" },
        { time: "11:00 AM - 12:00 PM", name: "Aqua Yoga" },
      ],
    },
  ]

  const gymSchedule = [
    {
      day: "Monday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Morning HIIT" },
        { time: "9:00 AM - 10:00 AM", name: "Body Pump" },
        { time: "12:00 PM - 1:00 PM", name: "Lunch Express Workout" },
        { time: "5:30 PM - 6:30 PM", name: "Spin Class" },
        { time: "7:00 PM - 8:00 PM", name: "Yoga Flow" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Strength Training" },
        { time: "9:00 AM - 10:00 AM", name: "Pilates" },
        { time: "12:00 PM - 1:00 PM", name: "Lunch Express Workout" },
        { time: "5:30 PM - 6:30 PM", name: "Zumba" },
        { time: "7:00 PM - 8:00 PM", name: "Core Conditioning" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Morning HIIT" },
        { time: "9:00 AM - 10:00 AM", name: "Body Pump" },
        { time: "12:00 PM - 1:00 PM", name: "Lunch Express Workout" },
        { time: "5:30 PM - 6:30 PM", name: "Spin Class" },
        { time: "7:00 PM - 8:00 PM", name: "Yoga Flow" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Strength Training" },
        { time: "9:00 AM - 10:00 AM", name: "Pilates" },
        { time: "12:00 PM - 1:00 PM", name: "Lunch Express Workout" },
        { time: "5:30 PM - 6:30 PM", name: "Zumba" },
        { time: "7:00 PM - 8:00 PM", name: "Core Conditioning" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "6:00 AM - 7:00 AM", name: "Morning HIIT" },
        { time: "9:00 AM - 10:00 AM", name: "Body Pump" },
        { time: "12:00 PM - 1:00 PM", name: "Lunch Express Workout" },
        { time: "5:30 PM - 6:30 PM", name: "Spin Class" },
        { time: "7:00 PM - 8:00 PM", name: "Yoga Flow" },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { time: "8:00 AM - 9:00 AM", name: "Weekend Warrior Workout" },
        { time: "10:00 AM - 11:00 AM", name: "Bootcamp" },
        { time: "12:00 PM - 1:00 PM", name: "Stretch & Recover" },
      ],
    },
    {
      day: "Sunday",
      classes: [
        { time: "9:00 AM - 10:00 AM", name: "Gentle Yoga" },
        { time: "11:00 AM - 12:00 PM", name: "Meditation & Mindfulness" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Class Schedule"
        subtitle="Find the perfect class to fit your schedule"
        backgroundImage="/website/g2.webp"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-blue flex items-center justify-center mr-4">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-blue">Swimming Schedule</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-blue to-pink text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Day</th>
                  <th className="py-4 px-6 text-left">Time</th>
                  <th className="py-4 px-6 text-left">Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {swimmingSchedule.map((day) =>
                  day.classes.map((cls, idx) => (
                    <tr key={`${day.day}-${idx}`} className="hover:bg-gray-50">
                      {idx === 0 ? (
                        <td rowSpan={day.classes.length} className="py-4 px-6 font-medium border-r border-gray-200">
                          {day.day}
                        </td>
                      ) : null}
                      <td className="py-4 px-6 flex items-center">
                        <Clock className="h-4 w-4 text-blue mr-2" />
                        {cls.time}
                      </td>
                      <td className="py-4 px-6">{cls.name}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 rounded-full bg-pink flex items-center justify-center mr-4">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-blue">Gym Schedule</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
              <thead className="bg-gradient-to-r from-blue to-pink text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Day</th>
                  <th className="py-4 px-6 text-left">Time</th>
                  <th className="py-4 px-6 text-left">Class</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {gymSchedule.map((day) =>
                  day.classes.map((cls, idx) => (
                    <tr key={`${day.day}-${idx}`} className="hover:bg-gray-50">
                      {idx === 0 ? (
                        <td rowSpan={day.classes.length} className="py-4 px-6 font-medium border-r border-gray-200">
                          {day.day}
                        </td>
                      ) : null}
                      <td className="py-4 px-6 flex items-center">
                        <Clock className="h-4 w-4 text-pink mr-2" />
                        {cls.time}
                      </td>
                      <td className="py-4 px-6">{cls.name}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
