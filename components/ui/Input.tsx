interface InputProps {
  placeholder: string;
  type?: string;
}

export default function Input({ placeholder, type = "text" }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg text-sm bg-white border border-gray-400 text-black outline-none focus:border-primary1 transition"
    />
  );
}