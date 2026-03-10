"use client";

import Button from "./ui/Button";
import Input from "./ui/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    alert("Login successful (UI Demo)")
    router.push("/")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center px-20 w-full max-w-md"
    >

      <Link href="/">
        <div className="mb-8">
          <img src="/BrandW.png" className="w-32 dark:hidden" />
          <img src="/Brand.png" className="w-32 hidden dark:block" />
        </div>
      </Link>

      <h1 className="text-3xl font-semibold mb-2">
        <span className="bg-gradient-to-r from-primary1 to-primary2 bg-clip-text text-transparent">
          Welcome
        </span>
        <span className="text-black dark:text-gray-50"> Back!</span>
      </h1>

      <p className="mb-6 text-black dark:text-white">
        Enter your credentials to access your account
      </p>

      <div className="w-full p-[2px] rounded-full bg-primary-gradient">
        <button className="flex items-center justify-center gap-2 w-full bg-white text-black rounded-full py-2 font-medium">
          <img src="/google.png" className="w-5" />
          Sign in with Google
        </button>
      </div>

      <div className="flex items-center gap-3 my-6">
        <div className="flex-1 h-px bg-gray-700"></div>
        <span className="text-gray-400 text-sm">or</span>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-black dark:text-white">Email</label>
        <Input placeholder="Your email address" />

        <label className="text-black dark:text-white">Password</label>
        <Input placeholder="Your password" type="password" />
      </div>

      <div className="text-right text-sm mt-2 mb-6 text-primary1 dark:text-gray-400">
        Forgot Password?
      </div>

      <Button type="submit">Sign In</Button>

      <p className="text-sm mt-4 text-black dark:text-white">
        Don't have an account?
        <Link
          href="/signup"
          className="bg-gradient-to-r from-primary1 to-primary2 bg-clip-text text-transparent ml-1"
        >
          Sign up
        </Link>
      </p>

    </form>
  );
}