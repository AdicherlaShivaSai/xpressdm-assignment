import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen grid md:grid-cols-2 items-center gap-12 lg:gap-20 px-6">

      {/* LEFT SIDE */}
      <div className="flex items-center justify-center">
        <LoginForm />
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center justify-center">

        <div className="relative bg-primary-gradient rounded-3xl w-[400px] h-[480px] flex items-center justify-center">

          <img
            src="/Hero.png"
            className="
              absolute
              w-[460px]
              max-w-none
              -right-12
              drop-shadow-2xl
            "
          />

        </div>

      </div>

    </div>
  );
}