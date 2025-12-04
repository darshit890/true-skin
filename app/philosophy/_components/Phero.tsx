'use client'

import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Phero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-visible">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-16 py-6 z-20">
        {/* Logo */}
        <div className="text-[#454545] text-2xl font-light tracking-wide">
          true<span className="font-bold">Kind</span>.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-[#454545] text-sm font-medium ">
          <a href="#shop" className="px-4 py-2 hover:opacity-70 transition">
            SHOP
          </a>
          <a
            href="/philosophy"
            className="px-4 py-2 hover:opacity-70 transition"
          >
            PHILOSOPHY
          </a>
          <a href="#gallery" className="px-4 py-2 hover:opacity-70 transition">
            GALLERY
          </a>
          <a href="#journal" className="px-4 py-2 hover:opacity-70 transition">
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

      <div className="w-full min-h-screen flex items-center justify-center px-4 md:px-16 pt-32 md:pt-20 pb-12 flex-col">
        <div className="w-full  relative h-[600px] md:h-[700px]">
          {/* Left Text - "Be True" */}
          <div className="absolute left-0 top-0 md:top-12 z-10">
            <h1 className="font-serif italic text-5xl md:text-9xl text-[#454545] leading-tight text-balance whitespace-nowrap">
              <span className="font-normal">Be </span>
              <span className="font-extrabold">True</span>
            </h1>
          </div>
        {/* Bottom-left paragraph like the reference image */}
        <div className="absolute left-0 bottom-6 md:bottom-8 z-10">
          <p className="text-sm text-[#666] leading-relaxed max-w-xs">
            Our simple philosophy in all that we do. We are passionate about skin care, we are truekind.
          </p>
        </div>
          {/* Center Image - Diagonal positioned */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-115">
            <div className="relative w-96 h-96 md:w-[1400px] md:h-[620px]">
              <Image
                src="/philosophy-m.png"
                alt="Philosophy - Be True Be Kind"
                fill
                className="object-contain object-center"
                sizes="(min-width: 768px) 1400px, 384px"
                priority
              />
            </div>
          </div>

          {/* Right Text - "Be Kind" */}
          <div className="absolute right-0 bottom-0 md:bottom-12 text-right z-10">
            <h2 className="font-serif italic text-5xl md:text-9xl text-[#454545] leading-tight text-balance whitespace-nowrap">
              <span className="font-normal">Be </span>
              <span className="font-extrabold">Kind</span>
            </h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Phero;
