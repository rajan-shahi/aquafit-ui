import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Programs from "@/components/programs"
import ClassSchedule from "@/components/class-schedule"
import Trainers from "@/components/trainers"
import MembershipPricing from "@/components/membership-pricing"
import FacilityShowcase from "@/components/facility-showcase"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Programs />
      <FacilityShowcase />
      <ClassSchedule />
      <Trainers />
      <MembershipPricing />
      <Testimonials />
      <CallToAction />
    </div>
  )
}
