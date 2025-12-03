"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ParallaxBeautySection() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const elementTop = rect.top
        const elementBottom = rect.bottom

        if (elementBottom > 0 && elementTop < window.innerHeight) {
          setIsInView(true)
          const scrollProgress = (window.innerHeight - elementTop) / (window.innerHeight + rect.height)
          setScrollY(scrollProgress * 100)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full bg-[#F5F5F5] overflow-hidden">
      <div className="relative w-full min-h-screen px-8 md:px-16 pt-20 md:pt-32">
        {/* LEFT COLUMN - Philosophy Button */}
        <div className="absolute left-8 md:left-16 top-32 z-10">
          <button className="flex items-center gap-3 group hover:opacity-75 transition-opacity">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
            <div className="flex flex-col text-xs font-medium tracking-wide text-stone-700 underline">
              <span>OUR</span>
              <span>PHILOSOPHY</span>
            </div>
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative min-h-[90vh] flex flex-col items-center justify-center">
          {/* Centered Main Headline - Fixed position */}
          <div className="relative z-0 text-center mb-32">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-stone-900 tracking-tighter leading-[0.85]">
              <span
                className={`block transition-all duration-700 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                RADICAL
              </span>
              <span
                className={`block transition-all duration-700 delay-150 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                TRANSPARENCY.
              </span>
              <span
                className={`block italic font-serif transition-all duration-700 delay-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                HIDE
              </span>
              <span
                className={`block transition-all duration-700 delay-500 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                NOTHING.
              </span>
            </h1>
          </div>

          {/* Bottom Section - Image and Features */}
          <div className="relative w-full grid grid-cols-12 gap-8 items-start max-w-7xl mx-auto mt-8">
            {/* LEFT - Product Image with Parallax */}
            <div className="col-span-12 lg:col-span-6 relative flex justify-center lg:justify-start min-h-[500px]">
              <div
                className="relative transition-transform duration-75 ease-out"
                style={{
                  transform: isInView ? `translateY(-${scrollY * 0.8}px)` : "translateY(-100px)",
                }}
              >
                <div
                  className={`relative w-[400px] h-[600px] lg:w-[500px] top-[-50%] transform transition-all duration-700 ${
                    isInView ? "opacity-100 translate-x-0 scale-100 rotate-0" : "opacity-0 translate-x-6 scale-95 rotate-2"
                  }`}
                >
                  <Image
                    src="/texture.png"
                    alt="Product texture swatches"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* RIGHT - Features at extreme right */}
            <div className="col-span-12 lg:col-span-4 flex flex-col justify-start">
              <div className="space-y-12">
                {/* Feature 1 */}
                <div
                  className={`flex gap-6 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <svg
                    className="w-8 h-8 text-stone-900 shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M12 2L12 8M12 16L12 22M2 12L8 12M16 12L22 12" />
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-3 tracking-wide">
                      100% Transparent<br />Formulas
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      We formulate to the highest standards of efficacy and safety – using only proven, verified ingredients in bio-compatible bases; and free from over 1800 questionable ingredients
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div
                  className={`flex gap-6 transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: "550ms" }}
                >
                  <svg
                    className="w-8 h-8 text-stone-900 shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M20 6L9 17L4 12" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-3 tracking-wide">
                      Only Verified<br />Ingredients
                    </h3>
                    <p className="text-sm text-stone-500 leading-relaxed">
                      Skin care packed with anti oxidants, skin replenishing and skin restoring agents in stable pH levels that don&apos;t promise miracles, but deliver real results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
