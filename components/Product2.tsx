"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const VARNAYA_PRODUCTS = [
  {
    id: 1,
    name: "MANJISTHA AND SAFFRON MOISTURE GEL",
    price: "₹899",
    image: "/p.png",
  },
  {
    id: 2,
    name: "ROSEHIP & BAKUCHIOL SKIN PERFECTING OIL",
    price: "₹899",
    image: "/p.png",
  },
  {
    id: 3,
    name: "TURMERIC BRIGHTENING FACE MASK",
    price: "₹899",
    image: "/p.png",
  },
  {
    id: 4,
    name: "AYURVEDIC CLEANSING OIL",
    price: "₹899",
    image: "/p.png",
  },
]

const scrollbarHideStyle = `
  .carousel-hide-scroll::-webkit-scrollbar {
    display: none;
  }
  .carousel-hide-scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

export default function VarnayaBlendsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const handleScroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const first = carouselRef.current.firstElementChild as HTMLElement | null
    const cardWidth = first ? first.offsetWidth : 320
    const scrollAmount = cardWidth + 16
    const maxScroll = cardWidth * Math.max(0, VARNAYA_PRODUCTS.length - 2)
    const newPosition =
      direction === "right"
        ? Math.min(scrollPosition + scrollAmount, maxScroll)
        : Math.max(scrollPosition - scrollAmount, 0)
    setScrollPosition(newPosition)
    carouselRef.current.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })
  }

  return (
    <section ref={sectionRef} className="relative w-full bg-white">
      <style>{scrollbarHideStyle}</style>

      <div className="flex min-h-screen items-center justify-stretch">
        {/* Left: Products section - 50% width */}
        <div
          className={`relative h-full w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 py-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
          }`}
        >
          <div
            className={`mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-4xl font-light text-gray-800 md:text-5xl">Varnaya</p>
            <p className="text-5xl font-light italic text-gray-600 md:text-6xl">Blends</p>
          </div>

          <div className="relative w-full mb-8">
            <div ref={carouselRef} className="flex gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth carousel-hide-scroll snap-x snap-mandatory">
              {VARNAYA_PRODUCTS.map((product, index) => (
                <div
                  key={product.id}
                  className={`shrink-0 w-[85%] sm:w-64 md:w-72 lg:w-80 snap-center rounded-3xl bg-[#D8CEC3] p-6 transition-transform hover:scale-105 relative transform duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${700 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="absolute inset-0 rounded-3xl bg-white/50 flex items-center justify-center z-10">
                    <span className="text-2xl font-semibold text-gray-800">Coming Soon</span>
                  </div>

                  <div className="flex h-full flex-col items-center justify-between gap-4">
                    {/* Label & Bag Icon */}
                    <div className="flex w-full items-center justify-between">
                      <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold tracking-wide text-gray-700">
                        VARNAYA BLENDS
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                        <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Product Image */}
                    <div className="flex h-56 items-center justify-center py-4">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={224}
                        className="h-full w-auto object-contain drop-shadow-lg rounded-2xl"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="text-center">
                      <p className="text-xs font-semibold tracking-wide text-gray-700 uppercase line-clamp-2">
                        {product.name}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-gray-800">{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex w-full items-center justify-end gap-4">
            <button
              onClick={() => handleScroll("left")}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition-transform duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous products"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white transition-transform duration-300 hover:scale-110 active:scale-95"
              aria-label="Next products"
            >
              <svg
                className="h-6 w-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-xs font-light tracking-widest text-gray-600 uppercase">
            NATURAL BLENDS FOR RADIANT AND GLOWING SKIN.
          </p>
        </div>

        {/* Right: Full height image - 50% width */}
        <div
          className={`relative min-h-[60vh] md:min-h-screen w-full md:w-1/2 overflow-hidden transform transition-all duration-1000 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <Image
            src="/explore-1.jpg"
            alt="Varnaya Blends skincare product on face"
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export { VarnayaBlendsSection }
