'use client'
import { Menu } from 'lucide-react'
import Link from 'next/link';
import React from 'react'

import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="overflow-visible bg-white mb-20">
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
      </header></div>
  )
}

export default Header