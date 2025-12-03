"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function CleanJournal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const current = sectionRef.current
    const onScroll = () => {
      const el = current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const progress = Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height))
      setScrollY(progress * 100)
    }

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, { threshold: 0.15 })

    if (current) obs.observe(current)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (current) obs.unobserve(current)
    }
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8 p-8 lg:p-28">
        {/* Left Section - Featured Article */}
        <div className={`flex-1 bg-white text-black rounded-lg overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          {/* Featured Image Area */}
          <div className="relative bg-linear-to-b from-amber-50 to-orange-50 p-8 aspect-square flex items-center justify-center transition-transform duration-75 ease-out" style={{ transform: `translateY(-${scrollY * 0.6}px) scale(${1 + scrollY * 0.001})` }}>
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">FEATURED</span>
            </div>

            <Image
              src="/el.jpg"
              alt="Beauty products with makeup brush, nail polish and swatches"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
              Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create
              transparent skincare that is incredibly effective, safe and without harming the environment or the planet.
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500">8 Feb 2025</span>
              <a href="#" className="text-sm font-semibold text-black underline hover:no-underline">
                Read more
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Dark Side */}
        <div className="flex-1 flex flex-col justify-between text-center">
          {/* Header */}
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1 className="text-5xl lg:text-6xl font-light mb-4 ">
              <span className={`inline-block italic transition-all ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>clean</span>
              <br />
              <span className={`inline-block font-bold transition-all delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>JOURNAL</span>
            </h1>
            <p className={`text-gray-300 text-center leading-relaxed transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              Healthy tips on skincare, regimen and overall a better lifestyle.
            </p>
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Card 1 */}
            <div className={`bg-white text-black rounded-lg overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
              <div className="bg-linear-to-b from-orange-100 to-orange-50 h-48 flex items-center justify-center relative transition-transform duration-75 ease-out" style={{ transform: `translateY(-${scrollY * 0.3}px) scale(${1 + scrollY * 0.0008})` }}>
                <Image
                  src="/el.jpg"
                  alt="Skincare makeup routine"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base leading-snug mb-4">
                  Your Skincare and Makeup Routine Impacts Your Well-Being
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">20 Dec 2024</span>
                  <a href="#" className="text-xs font-semibold underline hover:no-underline">
                    Read more
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`bg-white text-black rounded-lg overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '350ms' }}>
              <div className="bg-linear-to-b from-green-100 to-green-50 h-48 flex items-center justify-center relative transition-transform duration-75 ease-out" style={{ transform: `translateY(-${scrollY * 0.3}px) scale(${1 + scrollY * 0.0008})` }}>
                <Image
                  src="/el.jpg"
                  alt="Eco-friendly routine"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base leading-snug mb-4">
                  How to Make Your Routine More Eco-Friendly
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">25 Jan 2025</span>
                  <a href="#" className="text-xs font-semibold underline hover:no-underline">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Button */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
