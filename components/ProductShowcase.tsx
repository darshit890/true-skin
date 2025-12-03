"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function ProductShowcase() {
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
    <div ref={sectionRef} className="relative w-full min-h-screen bg-white overflow-hidden">
      <style jsx>{`
        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-reveal {
          animation: text-reveal 0.6s ease-out;
        }
      `}</style>
      {/* Two-column layout: left content, right image */}
      <div className="grid grid-cols-2 min-h-screen">
        {/* Left Section - Product Details */}
        <div className={`flex flex-col justify-between p-8 lg:p-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          {/* Top decorative line */}
          <div className="absolute top-0 left-0 w-20 h-32 border-l-2 border-t-2 border-gray-900/20"></div>

          <div className="space-y-8">
            {/* Serum/Dropper Image */}
            <div className="relative w-48 h-56 transition-transform duration-75 ease-out hover:scale-105 cursor-pointer" style={{ transform: `translateY(-${scrollY * 0.5}px)` }}>
              <Image src="/1.jpg" alt="Serum dropper" fill className="object-cover" priority />
            </div>

            {/* Decorative curved line */}
            <svg
              className={`absolute left-48 top-32 w-32 h-48 pointer-events-none transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              viewBox="0 0 100 200"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 0 0 Q 50 50, 100 100"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-gray-900/30"
              />
            </svg>

            {/* Quality Badge */}
            <div>
              <span className={`inline-block px-4 py-2 border border-gray-400 rounded-full text-xs font-medium text-gray-600 uppercase tracking-widest transition-all duration-700 delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                Quality
              </span>
            </div>

            {/* Content */}
            <div className="max-w-sm">
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight mb-6">
                <span className={`inline-block transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  {"Only proven ingredients,".split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block animate-text-reveal"
                      style={{
                        animationDelay: `${i * 0.03}s`,
                        animationFillMode: 'backwards'
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
                <br />
                <span className={`inline-block transition-all duration-700 delay-150 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                  {"quality over quantity always!".split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block animate-text-reveal"
                      style={{
                        animationDelay: `${(i + 22) * 0.03}s`,
                        animationFillMode: 'backwards'
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </span>
              </h2>
              <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                Its about what we don&apos;t put in. Squeaky clean formulas with over 1500 Negative Ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Full Image */}
        <div className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-75 ease-out" style={{ transform: `translateY(-${scrollY * 0.4}px)` }}>
            <Image src="/offer.jpg" alt="Exciting offers" fill className="object-cover" priority />
          </div>

          {/* Top right action button overlay */}
          <div className={`absolute top-8 right-8 flex flex-col items-center gap-4 z-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center cursor-pointer group hover:scale-110 transition-all duration-300 hover:bg-gray-900 hover:shadow-2xl">
              <ArrowRight className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <span className="text-xs font-medium text-gray-800 uppercase tracking-widest">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  )
}