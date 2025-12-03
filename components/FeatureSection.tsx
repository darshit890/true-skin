"use client"

import type React from "react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type Card = {
  title: string
  description: string
  icon: string
  className: string
  speed: number
}

function ParallaxCard({
  children,
  speed,
  index,
  className,
}: {
  children: React.ReactNode
  speed: number
  index: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const scrollProgress = Math.max(0, 1 - rect.top / window.innerHeight)

        const translate = scrollProgress * speed * 100
        const opacity = Math.max(0.5, 1 - Math.abs(scrollProgress - 0.5) * 0.3)

        el.style.transform = `translateY(${-translate}px)`
        el.style.opacity = String(opacity)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [speed])

  return (
    <div ref={ref} className={`${className} transform will-change-transform transition-all duration-300`}>
      {children}
    </div>
  )
}

function ScrollHeading() {
  const headingRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const el = headingRef.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <div ref={headingRef} className="text-center max-w-3xl mx-auto">
      <h2
        className={`text-4xl md:text-6xl font-light leading-tight tracking-tight text-gray-900 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="block">CLEAN, CONSCIOUS,</span>
        <span className="block">PERFORMANCE</span>
      </h2>
      <p
        className={`mt-4 text-sm md:text-base text-gray-500 transform transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Unreservedly honest products that truly work, be kind to skin and the planet – no exceptions!
      </p>
      <span
        className={`mt-2 block text-5xl md:text-6xl italic text-gray-700 transform transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        skincare.
      </span>
    </div>
  )
}

export default function FeatureSection() {
  const cards: Card[] = [
    {
      title: "Clean, Beyond Reproach",
      description: "Truly clean with verified ingredients, free from over 1800 questionable substances.",
      icon: "/globe.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:left-[-25%] md:top-[380px] md:h-[400px]",
      speed: 1.4,
    },
    {
      title: "Radical Transparency",
      description: "No black boxes, nothing to hide, we disclose our full formulas.",
      icon: "/file.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:left-[6%] md:top-10 md:h-[400px]",
      speed: 1.1,
    },
    {
      title: "Potent & Multi Tasking",
      description: "Packed with actives backed by dermal science to deliver results.",
      icon: "/window.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:right-[-20%] md:bottom-[-35%] md:h-[400px]",
      speed: 1.3,
    },
    {
      title: "Conscious & Responsible",
      description: "Certified vegan and cruelty free, housed in responsible packaging.",
      icon: "/globe.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:right-[10%] md:top-16 md:h-[400px]",
      speed: 1.0,
    },
  ]

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <ScrollHeading />
        <div className="relative mt-12 md:mt-16 min-h-[520px] md:min-h-[640px]">
          <svg
            viewBox="0 0 300 300"
            className="absolute -right-6 md:right-6 -top-10 md:-top-6 w-48 md:w-64 h-auto text-gray-400"
          >
            <path d="M20 160c80-100 200-80 240 0" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div
            className="relative left-1/2 -translate-x-1/2 top-16 md:top-8 w-[85vw] max-w-[520px] md:max-w-[680px] aspect-[4/3] overflow-hidden"
            style={{
              borderRadius: "65% 35% 60% 40% / 55% 60% 40% 45%",
              transform: "rotate(20deg)",
            }}
          >
            <Image src="/ingredients-clip.jpg" alt="Model" fill priority className="object-cover" />
          </div>
          {cards.map((c, i) => (
            <ParallaxCard key={i} speed={c.speed} index={i} className={c.className}>
              <div className="flex h-full flex-col items-center justify-evenly text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                  <Image src={c.icon || "/placeholder.svg"} alt="icon" width={32} height={32} />
                </div>
                <div className="text-gray-900 font-semibold text-base md:text-lg">{c.title}</div>
                <div className="text-gray-600 text-sm md:text-base leading-relaxed max-w-88">{c.description}</div>
              </div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  )
}
