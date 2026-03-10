"use client";

import { useState } from "react";
import Link from "next/link";
import CapsuleButton from "./ui/CapsuleButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between relative ">

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img src="/BrandW.png" className="w-28 dark:hidden" />
        <img src="/Brand.png" className="w-28 hidden dark:block" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex bg-gray-100 dark:bg-[#111827] rounded-full p-2 gap-2 items-center shadow-sm dark:shadow-none">
        <Link href="/">
          <CapsuleButton>Home</CapsuleButton>
        </Link>
        <Link href="/features">
          <CapsuleButton>Features</CapsuleButton>
        </Link>
        <Link href="/pricing">
          <CapsuleButton>Pricing</CapsuleButton>
        </Link>
        <Link href="/use-cases">
          <CapsuleButton>Use Cases</CapsuleButton>
        </Link>
        <Link href="/login">
          <CapsuleButton>Login / Signup</CapsuleButton>
        </Link>
      </div>

      {/* Right Side Controls */}
      <div className="flex items-center gap-4">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* CTA */}
        <Link href="/login">
          <button className="hidden md:block px-6 py-2 rounded-full text-white font-semibold bg-primary-gradient">
            Start Free Trial
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-black dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111827] flex flex-col items-center gap-4 py-6 md:hidden rounded-xl shadow-xl">

          <Link href="/" onClick={() => setMenuOpen(false)}>
            <CapsuleButton>Home</CapsuleButton>
          </Link>

          <Link href="/features" onClick={() => setMenuOpen(false)}>
            <CapsuleButton>Features</CapsuleButton>
          </Link>

          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            <CapsuleButton>Pricing</CapsuleButton>
          </Link>

          <Link href="/use-cases" onClick={() => setMenuOpen(false)}>
            <CapsuleButton>Use Cases</CapsuleButton>
          </Link>

          <Link href="/login" onClick={() => setMenuOpen(false)}>
            <CapsuleButton>Login / Signup</CapsuleButton>
          </Link>

          <Link href="/signup"><button className="px-6 py-2 rounded-full text-white font-semibold bg-primary-gradient">
            Start Free Trial
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
}