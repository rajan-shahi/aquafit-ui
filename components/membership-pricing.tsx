"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import SectionHeading from "./section-heading"

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners",
    price: {
      monthly: 49.99,
      annually: 39.99,
    },
    features: [
      { name: "Gym Access", included: true },
      { name: "Basic Equipment", included: true },
      { name: "Locker Room Access", included: true },
      { name: "Swimming Pool Access", included: false },
      { name: "Group Classes", included: false },
      { name: "Personal Training", included: false },
      { name: "Nutrition Consultation", included: false },
    ],
    color: "blue",
    popular: false,
  },
  {
    name: "Premium",
    description: "Most popular choice",
    price: {
      monthly: 79.99,
      annually: 69.99,
    },
    features: [
      { name: "Gym Access", included: true },
      { name: "All Equipment", included: true },
      { name: "Locker Room Access", included: true },
      { name: "Swimming Pool Access", included: true },
      { name: "Group Classes", included: true },
      { name: "Personal Training (1/month)", included: true },
      { name: "Nutrition Consultation", included: false },
    ],
    color: "pink",
    popular: true,
  },
  {
    name: "Ultimate",
    description: "For serious athletes",
    price: {
      monthly: 99.99,
      annually: 89.99,
    },
    features: [
      { name: "Gym Access", included: true },
      { name: "All Equipment", included: true },
      { name: "Locker Room Access", included: true },
      { name: "Swimming Pool Access", included: true },
      { name: "Unlimited Group Classes", included: true },
      { name: "Personal Training (2/month)", included: true },
      { name: "Nutrition Consultation", included: true },
    ],
    color: "blue",
    popular: false,
  },
]

export default function MembershipPricing() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="Membership Plans" subtitle="Join Us Today" center={true} />

        <div className="mb-10 flex justify-center">
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                  : "text-gray-700 hover:text-blue"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annually")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "annually"
                  ? "bg-gradient-to-r from-blue to-pink text-white shadow-md"
                  : "text-gray-700 hover:text-blue"
              }`}
            >
              Annually <span className="text-xs font-bold text-pink">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border ${
                plan.popular ? "border-pink" : "border-gray-200"
              } relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-pink text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Most Popular</div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.annually}
                  </span>
                  <span className="text-gray-500">/month</span>
                  {billingCycle === "annually" && (
                    <div className="text-sm text-pink font-medium mt-1">Billed annually</div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full py-3 rounded-lg font-medium ${
                    plan.popular ? "bg-gradient-to-r from-blue to-pink text-white" : "bg-blue text-white"
                  } hover:shadow-lg transition-shadow`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Choose Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">All memberships include access to our mobile app and free parking.</p>
          <p className="text-sm text-gray-500">
            Prices are subject to change. Additional fees may apply for certain services.
          </p>
        </div>
      </div>
    </section>
  )
}
