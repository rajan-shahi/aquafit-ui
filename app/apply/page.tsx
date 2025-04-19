"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle, ChevronRight, User, Mail, Phone, Calendar, Info, CreditCard } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function ApplyPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    address: "",
    city: "",
    membershipType: "",
    healthConditions: "",
    emergencyContact: "",
    emergencyPhone: "",
    paymentMethod: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
    agreeTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const nextStep = () => {
    setStep(step + 1)
    window.scrollTo(0, 0)
  }

  const prevStep = () => {
    setStep(step - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would submit the form data to your backend here
    setStep(4) // Move to success step
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Apply Online"
        subtitle="Join our community of fitness enthusiasts"
        backgroundImage="/placeholder.svg?height=800&width=1600"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 ${
                      step >= item ? "bg-gradient-to-r from-blue to-pink" : "bg-gray-300"
                    }`}
                  >
                    {step > item ? <CheckCircle className="h-6 w-6" /> : item}
                  </div>
                  <div className={`text-sm font-medium ${step >= item ? "text-blue" : "text-gray-500"}`}>
                    {item === 1 && "Personal Info"}
                    {item === 2 && "Membership"}
                    {item === 3 && "Payment"}
                    {item === 4 && "Complete"}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full"></div>
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue to-pink transition-all duration-500"
                style={{ width: `${(step - 1) * 33.33}%` }}
              ></div>
            </div>
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue mb-6">Personal Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                        placeholder="John"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="dob"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="123 Main St"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="New York"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue to-pink text-white px-8 py-3 font-medium hover:shadow-lg transition-shadow"
                  >
                    Next Step
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-blue mb-6">Membership Details</h2>

                <div>
                  <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700 mb-1">
                    Membership Type
                  </label>
                  <select
                    id="membershipType"
                    name="membershipType"
                    value={formData.membershipType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    required
                  >
                    <option value="">Select Membership Type</option>
                    <option value="basic">Basic (Gym Only) - $49.99/month</option>
                    <option value="swim">Swim (Pool Only) - $59.99/month</option>
                    <option value="premium">Premium (Gym & Pool) - $79.99/month</option>
                    <option value="family">Family (Up to 4 members) - $149.99/month</option>
                    <option value="student">Student (With valid ID) - $39.99/month</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="healthConditions" className="block text-sm font-medium text-gray-700 mb-1">
                    Health Conditions or Concerns
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                      <Info className="h-5 w-5 text-gray-400" />
                    </div>
                    <textarea
                      id="healthConditions"
                      name="healthConditions"
                      value={formData.healthConditions}
                      onChange={handleChange}
                      rows={4}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Please list any health conditions, injuries, or concerns we should be aware of."
                    ></textarea>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="emergencyContact" className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Name
                    </label>
                    <input
                      type="text"
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="emergencyPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Emergency Contact Phone
                    </label>
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="(123) 456-7890"
                      required
                    />
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center justify-center rounded-lg border border-blue text-blue px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue to-pink text-white px-8 py-3 font-medium hover:shadow-lg transition-shadow"
                  >
                    Next Step
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-blue mb-6">Payment Information</h2>

                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                    required
                  >
                    <option value="">Select Payment Method</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <CreditCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="1234 5678 9012 3456"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      id="cardExpiry"
                      name="cardExpiry"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cardCvc"
                      name="cardCvc"
                      value={formData.cardCvc}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start mt-6">
                  <div className="flex items-center h-5">
                    <input
                      id="agreeTerms"
                      name="agreeTerms"
                      type="checkbox"
                      checked={formData.agreeTerms as boolean}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue focus:ring-blue border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                      I agree to the{" "}
                      <a href="#" className="text-blue underline">
                        Terms and Conditions
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue underline">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center justify-center rounded-lg border border-blue text-blue px-8 py-3 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                  <button
                    type="submit"
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue to-pink text-white px-8 py-3 font-medium hover:shadow-lg transition-shadow"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue to-pink flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue mb-4">Application Submitted!</h2>
                <p className="text-gray-700 mb-8 max-w-md mx-auto">
                  Thank you for applying to join AquaFit. We've received your application and will contact you shortly
                  to confirm your membership.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mb-8 max-w-md mx-auto">
                  <h3 className="font-bold text-blue mb-2">What's Next?</h3>
                  <ol className="text-left text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">1.</span> Our team will review your application
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">2.</span> You'll receive a confirmation email within 24 hours
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">3.</span> Visit our facility to complete your registration and get
                      your membership card
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">4.</span> Start your fitness journey with AquaFit!
                    </li>
                  </ol>
                </div>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue to-pink text-white px-8 py-3 font-medium hover:shadow-lg transition-shadow"
                >
                  Return to Homepage
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
