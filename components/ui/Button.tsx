interface ButtonProps {
  children: React.ReactNode
  type?: "button" | "submit"
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="px-6 py-3 rounded-full text-white bg-primary-gradient font-medium"
    >
      {children}
    </button>
  )
}