"use client"
import { Menu, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [enter] = useState(true)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }}></div>

      <header className="absolute top-0 left-0 right-0 flex items-center justify-between px-16 py-6 z-20">
        {/* Logo */}
        <div className="text-white text-2xl font-light tracking-wide">
          true<span className="font-bold">Kind</span>.
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-white text-sm font-medium ">
          <a href="#shop" className="px-4 py-2 hover:opacity-70 transition">
            SHOP
          </a>
          <a href="#philosophy" className="px-4 py-2 hover:opacity-70 transition">
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-0 m-0">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className="absolute inset-0 flex flex-col items-center justify-between z-10 px-4 py-16 md:py-20">
        {/* Main Headline and Subheadline - centered with elegant spacing */}
        <div
          className="flex flex-col items-center pt-24 md:pt-32 flex-1 justify-center"
          style={{ transform: `translateY(${-(scrollY * 0.08)}px)` }}
        >
          {/* Main Headline - increased font sizes and adjusted line height for more presence */}
          <h1
            className={`text-white text-6xl md:text-8xl font-light text-center leading-tight mb-8 max-w-5xl transition-all duration-700 ${
              enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="block">True to Oneself</span>
            <span className="block">
              kind to <span className="italic">Nature</span>
            </span>
          </h1>

          {/* Subheadline - refined spacing and sizing for better visual hierarchy */}
          <p
            className={`text-white text-sm md:text-base text-center max-w-2xl font-light leading-relaxed tracking-wide transition-all duration-700 delay-150 ${
              enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
          </p>
        </div>

        {/* CTA Section - improved button styling with better visual balance */}
        <div
          suppressHydrationWarning
          className={`flex items-center justify-center gap-0 bg-white rounded-full px-8 py-4 backdrop-blur-sm mb-16 md:mb-20 hover:bg-gray-50 transition group transform ${
            enter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#products"
            className="text-gray-900 font-medium text-xs md:text-sm underline hover:no-underline transition mr-6"
          >
            EXPLORE ALL PRODUCTS
          </a>
          <button suppressHydrationWarning className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition shrink-0">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/90 z-50 p-6 md:hidden">
          <nav className="flex flex-col gap-4 text-white">
            <a href="#shop" className="px-4 py-2 hover:opacity-70 transition">
              SHOP
            </a>
            <a href="#philosophy" className="px-4 py-2 hover:opacity-70 transition">
              PHILOSOPHY
            </a>
            <a href="#gallery" className="px-4 py-2 hover:opacity-70 transition">
              GALLERY
            </a>
            <a href="#journal" className="px-4 py-2 hover:opacity-70 transition">
              JOURNAL
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
