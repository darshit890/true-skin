"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PRODUCTS = [
  {
    id: 1,
    name: "AHA BRIGHTENING EXFOLIANT CLEANSER/FACE WASH",
    price: "₹899",
    image: "/p.png",
  },
  {
    id: 2,
    name: "BIO EXFOLIANT BRIGHTENING SLEEPING MASK",
    price: "₹899",
    image: "/p.png",
  },
];

const scrollbarHideStyle = `
  .carousel-hide-scroll::-webkit-scrollbar {
    display: none;
  }
  .carousel-hide-scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default function ProductSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [localScroll, setLocalScroll] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setLocalScroll(Math.max(0, Math.min(1, progress)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const el = carouselRef.current;
    if (!el) return;
    const delta = e.clientX - startX.current;
    el.scrollLeft = scrollStart.current - delta;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      carouselRef.current?.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const onPointerLeave = () => {
    isDragging.current = false;
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden z-0"
    >
      <style>{scrollbarHideStyle}</style>
      {/* Header */}
      <div className="mb-12 pt-20 text-center md:mb-16 px-16">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-5xl font-semibold tracking-widest text-[#454545] md:text-8xl">
            EXPLORE
          </h2>
          <p className="mt-3 text-5xl font-light italic text-gray-600 md:text-6xl">
            pure potency
          </p>
        </div>
      </div>

      <div className="flex min-h-screen items-center justify-stretch overflow-hidden">
        {/* Left: Full height image - 50% width */}
        <div
          className={`relative min-h-[60vh] md:min-h-screen w-full md:w-1/2 overflow-hidden transform transition-all duration-1000`}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/explore-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              WebkitMaskImage: "linear-gradient(to right, black 92%, transparent 100%)",
            }}
            aria-label="Pure Brilliance skincare product on face"
            role="img"
          />
        </div>

        {/* Right: Products section - 50% width */}
        <div
          className={`relative h-full w-full md:w-1/2 flex flex-col items-start justify-center px-6 md:px-8 lg:px-12 overflow-hidden transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
          }`}
        >
          <div
            className={`mb-12 transform transition-all duration-1000 delay-500  ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-4xl font-semibold text-[#454545] md:text-5xl">
              Pure
            </p>
            <p className="text-5xl font-light italic text-gray-600 md:text-6xl">
              Brilliance
            </p>
          </div>

          <div className="relative w-full mb-8 overflow-y-hidden">
            <div
              ref={carouselRef}
              className="flex gap-2 overflow-x-auto overflow-y-hidden md:overflow-x-auto scroll-smooth carousel-hide-scroll snap-x snap-mandatory select-none cursor-grab active:cursor-grabbing"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerLeave}
            >
              {PRODUCTS.map((product, index) => (
                <div
                  key={product.id}
                  className={`shrink-0 w-[85%] sm:w-64 md:w-72 lg:w-100 snap-center rounded-3xl bg-[#EFCDCC] p-6 transition-transform hover:scale-105 relative transform duration-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${700 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex h-[520px] md:h-[560px] flex-col justify-between">
                    {/* Label & Bag Icon */}
                    <div className="flex w-full items-center justify-between">
                      <span className="inline-block rounded-full bg-white px-4 py-2 text-xs font-light tracking-wide text-[#454545]">
                        PURE BRILLIANCE
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <svg
                          className="h-4 w-4 text-gray-700"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 11v2M8 11v4a2 2 0 002 2h4a2 2 0 002-2v-4a2 2 0 00-2-2h-1V7a4 4 0 10-8 0v2h1a2 2 0 012 2z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Product Image - larger container */}
                    <div className="flex h-80 md:h-96 items-center justify-center">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={280}
                        height={360}
                        className="h-full w-auto object-contain drop-shadow-lg"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex w-full items-end justify-between">
                      <p className="text-sm md:text-base font-light tracking-wide text-gray-800 uppercase line-clamp-2">
                        {product.name}
                      </p>
                      <p className="text-sm md:text-base font-light text-gray-800">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p className="mt-8 text-xs font-light tracking-widest text-gray-600 uppercase">
            STAY GLOWING AND HEALTHY WITHOUT HAVING TO THINK ABOUT IT.
          </p>
        </div>
      </div>
    </section>
  );
}

export { ProductSection };
