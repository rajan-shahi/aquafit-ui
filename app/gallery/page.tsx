"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import PageHeader from "@/components/page-header"

// Gallery categories
const categories = [
  { id: "all", name: "All" },
  { id: "facilities", name: "Facilities" },
  { id: "swimming", name: "Swimming" },
  { id: "fitness", name: "Fitness" },
  { id: "events", name: "Events" },
]

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Olympic-sized swimming pool",
    category: "facilities",
    title: "Olympic-sized Swimming Pool",
    description: "Our state-of-the-art Olympic-sized swimming pool with 8 lanes and professional starting blocks.",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Modern gym equipment",
    category: "fitness",
    title: "Modern Fitness Center",
    description: "Fully equipped fitness center with the latest cardio and strength training equipment.",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Swimming lesson",
    category: "swimming",
    title: "Professional Swimming Lessons",
    description: "Expert instructors providing swimming lessons for all ages and skill levels.",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Group fitness class",
    category: "fitness",
    title: "Group Fitness Classes",
    description: "Energetic group fitness classes led by certified trainers.",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Annual swimming competition",
    category: "events",
    title: "Annual Swimming Competition",
    description: "Our annual swimming competition bringing together athletes from across the region.",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Aqua aerobics class",
    category: "swimming",
    title: "Aqua Aerobics",
    description: "Low-impact, high-resistance water workouts suitable for all fitness levels.",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Locker rooms",
    category: "facilities",
    title: "Modern Locker Rooms",
    description: "Spacious and clean locker rooms with all the amenities you need.",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Personal training session",
    category: "fitness",
    title: "Personal Training",
    description: "One-on-one training sessions tailored to your specific fitness goals.",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Charity swim event",
    category: "events",
    title: "Charity Swim Marathon",
    description: "Our annual charity event raising funds for local community initiatives.",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Kids swimming class",
    category: "swimming",
    title: "Kids Swimming Program",
    description: "Fun and educational swimming classes designed specifically for children.",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Wellness area",
    category: "facilities",
    title: "Wellness Area",
    description: "Relaxation and recovery area with saunas, steam rooms, and cold plunge pools.",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=800&width=1200",
    alt: "Fitness challenge",
    category: "events",
    title: "Annual Fitness Challenge",
    description: "Test your limits in our annual fitness challenge with prizes for top performers.",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  // Filter images based on active category
  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

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
        title="Our Gallery"
        subtitle="Explore our facilities, classes, and events through our photo gallery"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4">
          <div className="inline-flex bg-white rounded-full shadow-lg p-1.5">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                    : "text-gray-700 hover:text-blue"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory} // Re-render animation when category changes
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <ZoomIn className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Image title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-700">{selectedImage.description}</p>
                </div>
                <button
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No images found</h3>
            <p className="text-gray-500">No images match the selected category. Please try another category.</p>
          </div>
        )}
      </div>
    </div>
  )
}
