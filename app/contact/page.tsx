import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Contact Us"
        subtitle="Have questions or need more information? We're here to help"
        backgroundImage="/website/s2.webp"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue to-pink text-white p-6">
                <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
                <p className="text-white/80">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <form className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue to-pink text-white py-3 px-6 font-medium hover:shadow-lg transition-shadow"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-blue">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">(123) 456-7890</p>
                    <p className="text-gray-700">(123) 456-7891</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">info@aquafit.com</p>
                    <p className="text-gray-700">support@aquafit.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                    <p className="text-gray-700">123 Fitness Avenue</p>
                    <p className="text-gray-700">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Hours of Operation</h3>
                    <div className="grid grid-cols-2 gap-x-4 text-gray-700">
                      <p>Monday - Friday:</p>
                      <p>5:00 AM - 10:00 PM</p>
                      <p>Saturday:</p>
                      <p>7:00 AM - 8:00 PM</p>
                      <p>Sunday:</p>
                      <p>8:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-[300px] bg-gray-200 relative">
                {/* In a real application, you would embed a Google Map here */}
                <div className="absolute inset-0 flex items-center justify-center bg-blue/10">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue mx-auto mb-2" />
                    <p className="font-bold text-blue">Interactive Map Would Be Here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
