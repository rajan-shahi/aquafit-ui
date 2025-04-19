import Image from "next/image"
import { CheckCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  const swimmingServices = [
    "Olympic-sized swimming pool",
    "Professional swimming lessons for all ages",
    "Aqua aerobics classes",
    "Competitive swim training",
    "Rehabilitation swimming sessions",
    "Private swimming coaching",
    "Water polo sessions",
    "Lifeguard training",
  ]

  const gymServices = [
    "State-of-the-art fitness equipment",
    "Personal training sessions",
    "Group fitness classes",
    "Strength and conditioning programs",
    "Cardio zones",
    "Functional training area",
    "Free weights section",
    "Nutrition counseling",
  ]

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Our Services"
        subtitle="Discover our comprehensive range of swimming and gym services"
      backgroundImage="/website/s4.webp"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
              <Image
                src="/website/s2.webp"
                alt="Swimming facilities"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue">Swimming</h2>
            <p className="text-gray-700 mb-6">
              Our state-of-the-art swimming facilities offer everything you need for aquatic fitness, from casual
              swimming to professional training. Water-based exercises provide low-impact, high-resistance workouts
              perfect for all fitness levels.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {swimmingServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-xl mb-8">
              <Image src="/website/g2.webp" alt="Gym facilities" fill className="object-cover" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-blue">Gym</h2>
            <p className="text-gray-700 mb-6">
              Our comprehensive gym facilities feature the latest equipment and expert guidance to help you build
              strength, improve endurance, and enhance overall fitness. Whether you're a beginner or an experienced
              athlete, our gym has everything you need.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {gymServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-pink flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue to-blue-dark text-white p-12 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Membership Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Unlimited Access</h3>
                    <p className="text-gray-300">
                      Full access to both swimming and gym facilities during operating hours.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Free Classes</h3>
                    <p className="text-gray-300">Access to group fitness classes and aqua aerobics sessions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Personal Training</h3>
                    <p className="text-gray-300">Discounted rates on personal training and swimming coaching.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-xl mb-1">Wellness Programs</h3>
                    <p className="text-gray-300">Access to nutrition guidance and wellness workshops.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
               src="/website/s5.webp"
                alt="Membership benefits"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
