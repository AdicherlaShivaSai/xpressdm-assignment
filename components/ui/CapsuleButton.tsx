interface CapsuleButtonProps {
  children: React.ReactNode;
  active?: boolean;
}

export default function CapsuleButton({
  children,
  active = false,
}: CapsuleButtonProps) {
  return (
    <button className=" px-4 py-2 rounded-full text-sm font-medium hover:scale-105 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition">
      {children}
    </button>
  );
}
