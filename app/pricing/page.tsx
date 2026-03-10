"use client"

import { useState } from "react"
import PricingToggle from "@/components/PricingToggle"

type PlanType = "monthly" | "quarterly" | "annually"

export default function PricingPage() {

  const [plan, setPlan] = useState<PlanType>("monthly")

  const pricing = {
    monthly: { beginner: 499, pro: 799, enterprise: 1199 },
    quarterly: { beginner: 1999, pro: 3999, enterprise: 6999 },
    annually: { beginner: 5499, pro: 7499, enterprise: 11999 }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-20">

      <h1 className="text-4xl font-bold mb-6">Our Pricing</h1>

      <div className="mb-12">
        <PricingToggle plan={plan} setPlan={setPlan} />
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="p-6 rounded-xl border">
          <h2 className="text-xl font-semibold">Beginner</h2>
          <p className="text-3xl font-bold mt-3">₹{pricing[plan].beginner}</p>
        </div>

        <div className="p-6 rounded-xl border">
          <h2 className="text-xl font-semibold">Pro</h2>
          <p className="text-3xl font-bold mt-3">₹{pricing[plan].pro}</p>
        </div>

        <div className="p-6 rounded-xl border">
          <h2 className="text-xl font-semibold">Enterprise</h2>
          <p className="text-3xl font-bold mt-3">₹{pricing[plan].enterprise}</p>
        </div>

      </div>

    </div>
  )
}