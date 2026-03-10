"use client"

type PlanType = "annually" | "quarterly" | "monthly"

interface PricingToggleProps {
  plan: PlanType
  setPlan: (plan: PlanType) => void
}

export default function PricingToggle({ plan, setPlan }: PricingToggleProps) {

  const options: PlanType[] = ["monthly", "quarterly", "annually"]

  return (
    <div className="flex gap-2 bg-gray-100 dark:bg-[#111827] p-2 rounded-full">

      {options.map((item) => (
        <button
          key={item}
          onClick={() => setPlan(item)}
          className="rounded-full"
        >

          {plan === item ? (

            <div className="p-[2px] rounded-full bg-gradient-to-r from-primary1 to-primary2">
              <div className="px-5 py-2 rounded-full bg-white dark:bg-black text-black dark:text-white font-medium">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            </div>

          ) : (

            <div className="px-5 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </div>

          )}

        </button>
      ))}

    </div>
  )
}