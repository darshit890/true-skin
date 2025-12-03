"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function ConnectSection() {
  const sectionRef = useRef<HTMLElement>(null)
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
    <section ref={sectionRef} className="w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto  px-4 sm:px-6 lg:px-16">
        {/* Main heading */}
        <div className={`mb-16 text-center lg:mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            <span className={`inline-block transition-all ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>CONNECT</span>
            <br />
            <span className={`inline-block transition-all delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>WITH</span>
            <span className={`inline-block transition-all delay-300 ml-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>US</span>
          </h2>
        </div>

        {/* Main content with diagonal image layout */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-x--12 mb-16">
          {/* Left small image - top left */}
          <div className={`hidden lg:flex items-start justify-start shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '150ms' }}>
            <div className="relative w-48 h-48 overflow-hidden rounded-sm bg-stone-200 shadow-md transition-transform duration-75 ease-out" style={{ transform: `translateY(-${scrollY * 1}px)` }}>
              <Image src="/c3.jpg" alt="Woman applying skincare" fill className="object-cover" priority />
            </div>
          </div>

          {/* Center main image - takes majority of space */}
          <div className="flex-1">
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-sm bg-linear-to-br from-stone-100 via-orange-50 to-rose-100 shadow-lg transition-transform duration-75 ease-out" >
              <Image src="/connect.jpg" alt="Woman skincare profile" fill className="object-cover" priority />
            </div>
          </div>

          {/* Right small image - bottom right */}
          <div className={`hidden lg:flex items-end justify-end shrink-0 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative w-48 h-48 overflow-hidden rounded-sm bg-stone-200 shadow-md transition-transform duration-75 ease-out" style={{ transform: `translateY(${scrollY * 1}px)` }}>
              <Image src="/connect-1.jpg" alt="Skincare details" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom section with text and Instagram CTA */}
        <div className={`grid grid-cols-1 gap-8 lg:grid-cols-3 mt-12 lg:mt-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '450ms' }}>
          {/* Left side - description text */}
          <div className="flex flex-col justify-start">
            <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              Get the latest news about skincare tips and new products.
            </p>
          </div>

          {/* Center - Instagram text and button */}
          <div className="flex flex-col items-center justify-start gap-6">
            <h3 className={`text-3xl italic font-light text-gray-800 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>on instagram</h3>

            <a
              href="https://instagram.com"
              className="flex items-center gap-3 px-6 py-2 border border-gray-400 rounded-full hover:border-gray-600 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900 uppercase tracking-wide">Instagram</span>
              <Instagram className="w-5 h-5 text-gray-900" />
            </a>
          </div>

          {/* Right side - empty for spacing */}
          <div />
        </div>
      </div>
    </section>
  )
}
