"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const JHero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-visible bg-white">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-16 py-6 z-20">
        {/* Logo */}
        <div className="text-[#454545] text-2xl font-light tracking-wide">
          <Link href="/">
            true<span className="font-bold">Kind</span>.
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[#454545] text-sm font-medium ">
          <a href="/shop" className="px-4 py-2 hover:opacity-70 transition">
            SHOP
          </a>
          <a
            href="/philosophy"
            className="px-4 py-2 hover:opacity-70 transition"
          >
            PHILOSOPHY
          </a>
          <a href="/journal" className="px-4 py-2 hover:opacity-70 transition">
            JOURNAL
          </a>
        </nav>

        {/* Right column - Menu button pushed to extreme end on mobile */}
        <div className="md:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#454545] p-0 m-0"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className="pt-24 flex flex-col items-center justify-center px-6 md:px-16">
        <h1 className="text-[#454545] text-6xl md:text-7xl lg:text-8xl font-serif italic leading-none">
          clean
        </h1>
        <h2 className="text-[#454545] text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wide uppercase mt-2">
          JOURNAL
        </h2>
        <p className="mt-6 max-w-xl text-left text-sm md:text-base text-gray-400">
          Our simple philosophy in all that we do. We are passionate about skin care, we are truekind.
        </p>

        </div>
        <div className="mt-24 w-full max-w-6xl px-6 md:px-16">
          <div className="relative bg-white ">
            <div className="relative w-full aspect-video overflow-hidden  bg-[#e9dccf]">
              <Image src="/journal.jpg" alt="Beauty Secrets article cover" fill className="object-cover" priority />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-xl md:text-2xl font-medium text-[#454545] mb-3">
                Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create
                transparent skincare that is incredibly effective, safe and without harming the environment or the planet.
              </p>
              <p className="mt-4 text-xs text-gray-400">8 Feb 2025</p>
            </div>
          </div>

        <svg
          viewBox="0 0 300 300"
          className="absolute right-1 md:right-100 top-10 md:top-72 w-48 md:w-100 h-auto text-gray-800 transform rotate-12 md:rotate-90"
        >
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
            </marker>
          </defs>
          <path
            d="M20 160 C 80 60 220 80 260 160"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>
    </div>
  );
};

export default JHero;
