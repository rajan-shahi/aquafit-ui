import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="About AquaFit"
        subtitle="Learn about our mission, values, and the team behind our success"
        backgroundImage="/placeholder.svg?height=800&width=1600"
        primaryButtonText="Our Services"
        primaryButtonLink="/services"
        secondaryButtonText="Meet Our Team"
        secondaryButtonLink="/about#team"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, AquaFit has grown from a small local gym to a premier fitness and swimming facility. Our
              mission is to provide a comprehensive approach to health and wellness through both land and water-based
              activities.
            </p>
            <p className="text-gray-700 mb-4">
              We believe that combining swimming and traditional gym workouts creates the perfect balance for overall
              fitness, catering to all ages and fitness levels.
            </p>
            <p className="text-gray-700">
              Our team of certified trainers and swimming coaches are dedicated to helping you achieve your fitness
              goals in a supportive and motivating environment.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Our facility" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue">
            <h3 className="text-2xl font-bold mb-4 text-blue">Our Vision</h3>
            <p className="text-gray-700">
              To be the leading fitness facility that combines aquatic and gym-based training, setting new standards in
              holistic fitness approaches.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-pink">
            <h3 className="text-2xl font-bold mb-4 text-blue">Our Mission</h3>
            <p className="text-gray-700">
              To empower individuals to achieve their fitness goals through innovative programs that combine the
              benefits of swimming and gym workouts.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue">
            <h3 className="text-2xl font-bold mb-4 text-blue">Our Values</h3>
            <p className="text-gray-700">
              Excellence, innovation, inclusivity, and community. We believe fitness should be accessible to everyone
              and tailored to individual needs.
            </p>
          </div>
        </div>

        <div id="team" className="bg-gradient-to-r from-blue to-pink text-white p-12 rounded-xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="max-w-2xl mx-auto">
              Meet the dedicated professionals who make AquaFit an exceptional place for your fitness journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white">
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={`Team member ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">John Doe</h3>
                <p className="text-white/80 font-medium mb-2">Fitness Director</p>
                <p className="text-white/70 text-sm">
                  Certified personal trainer with 10+ years of experience in fitness and nutrition.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
