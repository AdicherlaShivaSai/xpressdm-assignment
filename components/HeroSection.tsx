"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* Heading */}
      <h1 className="text-5xl font-bold mb-6 text-black dark:text-gray-50">
        Manage Conversations <br />
        With AI Automation
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 max-w-xl mb-10">
        Automate responses, engage customers faster, and scale your messaging
        workflows with AI.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        {/* See Our Plans */}
        <Link href="/pricing">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-white">
            See Our Plans
          </button>
        </Link>

        {/* Get Started */}
        <Link href="/login">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary-gradient text-white">
            Get Started
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
              <ArrowUpRight size={15} />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
}
