"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center bg-gray-100 dark:bg-[#111827] p-1 rounded-full">

      {/* Light Mode */}
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full transition ${
          theme === "light"
            ? "bg-white text-black shadow-sm"
            : "text-gray-500 hover:text-black"
        }`}
      >
        <Sun size={18} />
      </button>

      {/* Dark Mode */}
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full transition ${
          theme === "dark"
            ? "bg-black text-white shadow-sm"
            : "text-gray-500 hover:text-white"
        }`}
      >
        <Moon size={18} />
      </button>

    </div>
  )
}