import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"
import PageHeader from "@/components/page-header"

const blogPosts = [
  {
    id: 1,
    title: "10 Swimming Techniques to Improve Your Freestyle",
    excerpt:
      "Master these essential freestyle techniques to swim faster, more efficiently, and with better form. Perfect for beginners and intermediate swimmers looking to improve.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Swimming",
    author: "Michael Phelps",
    date: "May 15, 2023",
    readTime: "8 min read",
    tags: ["Swimming", "Techniques", "Freestyle"],
  },
  {
    id: 2,
    title: "The Ultimate Full-Body Gym Workout for Beginners",
    excerpt:
      "Start your fitness journey with this comprehensive full-body workout designed specifically for beginners. Build strength, improve endurance, and boost confidence.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Fitness",
    author: "John Smith",
    date: "June 3, 2023",
    readTime: "6 min read",
    tags: ["Gym", "Workout", "Beginners"],
  },
  {
    id: 3,
    title: "Nutrition Tips for Swimmers: What to Eat Before and After Training",
    excerpt:
      "Optimize your swimming performance with these nutrition strategies. Learn what to eat before and after your swim sessions to maximize energy and recovery.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Nutrition",
    author: "Emma Wilson",
    date: "July 12, 2023",
    readTime: "10 min read",
    tags: ["Swimming", "Nutrition", "Recovery"],
  },
  {
    id: 4,
    title: "5 Benefits of Combining Swimming and Weight Training",
    excerpt:
      "Discover why combining swimming and weight training creates the perfect fitness regimen. Learn how this powerful combination can transform your physique and health.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Training",
    author: "Sarah Johnson",
    date: "August 22, 2023",
    readTime: "7 min read",
    tags: ["Swimming", "Weight Training", "Fitness"],
  },
  {
    id: 5,
    title: "How to Prevent Common Swimming Injuries",
    excerpt:
      "Stay injury-free in the pool with these prevention strategies. Learn proper techniques and exercises to protect your shoulders, knees, and back while swimming.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Health",
    author: "Dr. Robert Chen",
    date: "September 5, 2023",
    readTime: "9 min read",
    tags: ["Swimming", "Injury Prevention", "Health"],
  },
  {
    id: 6,
    title: "The Science Behind HIIT Workouts: Why They're So Effective",
    excerpt:
      "Explore the science and benefits of High-Intensity Interval Training (HIIT). Learn why these short, intense workouts deliver remarkable results for fitness and weight loss.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Fitness",
    author: "Alex Thompson",
    date: "October 18, 2023",
    readTime: "8 min read",
    tags: ["HIIT", "Workout", "Fitness Science"],
  },
]

const categories = [
  { name: "Swimming", count: 12 },
  { name: "Fitness", count: 15 },
  { name: "Nutrition", count: 8 },
  { name: "Training", count: 10 },
  { name: "Health", count: 7 },
  { name: "Equipment", count: 5 },
]

const popularTags = [
  "Swimming",
  "Gym",
  "Fitness",
  "Nutrition",
  "Workout",
  "Training",
  "Health",
  "Recovery",
  "Techniques",
  "Equipment",
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Blog"
        subtitle="Latest articles, tips, and insights from our fitness experts"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 md:h-56">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.date}</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 hover:text-blue transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="text-sm font-medium">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue hover:text-pink font-medium text-sm flex items-center"
                      >
                        Read More
                        <svg
                          className="ml-1 w-4 h-4"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="py-2 px-4 bg-blue text-white font-medium rounded-l-md hover:bg-blue-dark transition-colors"
                >
                  1
                </a>
                <a href="#" className="py-2 px-4 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  2
                </a>
                <a href="#" className="py-2 px-4 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                  3
                </a>
                <a
                  href="#"
                  className="py-2 px-4 bg-white text-gray-700 font-medium rounded-r-md hover:bg-gray-50 transition-colors"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                />
                <button className="absolute right-3 top-2.5">
                  <svg
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className="flex items-center justify-between py-2 text-gray-700 hover:text-blue transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="bg-gray-100 text-gray-700 hover:bg-blue hover:text-white transition-colors text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Featured Post</h3>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image src="/placeholder.svg?height=400&width=600" alt="Featured post" fill className="object-cover" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-gray-900 hover:text-blue transition-colors">
                <Link href="/blog/featured">The Complete Guide to Swimming and Gym Workouts</Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                This comprehensive guide covers everything you need to know about combining swimming and gym workouts
                for maximum fitness results.
              </p>
              <Link href="/blog/featured" className="text-blue hover:text-pink font-medium text-sm flex items-center">
                Read More
                <svg
                  className="ml-1 w-4 h-4"
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
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue to-pink p-6 rounded-xl shadow-lg text-white">
              <h3 className="text-lg font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-white/90 text-sm mb-4">
                Get the latest articles, tips, and offers delivered directly to your inbox.
              </p>
              <form>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full py-2 px-4 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue font-medium py-2 px-4 rounded-lg hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
