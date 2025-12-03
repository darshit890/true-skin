"use client"

import type React from "react"
import { useEffect, useRef } from "react"

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
    let current = 0
    let target = 0

    const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v))

    const computeTarget = () => {
      const rect = el.getBoundingClientRect()
      const progress = clamp(1 - rect.top / window.innerHeight)
      target = progress * speed * 100
    }

    const animate = () => {
      current += (target - current) * 0.12
      const approxProgress = clamp(current / (speed * 100))
      const opacity = Math.max(0.5, 1 - Math.abs(approxProgress - 0.5) * 0.3)

      el.style.transform = `translate3d(0, ${-current}px, 0)`
      el.style.opacity = String(opacity)

      if (Math.abs(target - current) > 0.1) {
        raf = requestAnimationFrame(animate)
      }
    }

    const onScroll = () => {
      computeTarget()
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(animate)
    }

    computeTarget()
    animate()

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={`${className} will-change-transform`}>
      {children}
    </div>
  )
}

export default ParallaxCard
