import SignupForm from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 items-center px-6">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center">
        <SignupForm />
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative bg-primary-gradient rounded-3xl w-[400px] h-[500px] flex items-center justify-center">
          <img
            src="/Hero.png"
            className="absolute w-[480px] max-w-none -right-12 top-1/2 -translate-y-1/2 drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
