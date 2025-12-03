import { useState, useEffect, useRef } from 'react'

interface EllipseMaskedBackgroundProps {
  imageUrl: string
  height?: string
  className?: string
  zoomPercent?: number
  parallaxSpeed?: number
}

const ellipseSvg = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="120" ry="60" fill="black" transform="rotate(40 100 100)" />
</svg>
`
const ellipseDataUrl = `data:image/svg+xml,${encodeURIComponent(ellipseSvg)}`

export function EllipseMaskedBackground({ 
  imageUrl, 
  height = "50vh", 
  className = "", 
  zoomPercent = 100,
  parallaxSpeed = 0.5
}: EllipseMaskedBackgroundProps) {
  const [offset, setOffset] = useState(0)
  const [maskOffset, setMaskOffset] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)


  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const scrollProgress = -rect.top
      const parallaxOffset = scrollProgress * parallaxSpeed
      const slowMaskOffset = scrollProgress * (parallaxSpeed * 0.4)
      
      setOffset(parallaxOffset)
      setMaskOffset(slowMaskOffset)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [parallaxSpeed])

  return (
    <section ref={sectionRef} className={`w-full p-5 ${className}`}>
      <figure
        className="relative bg-cover bg-center overflow-hidden"
        style={{
          height,
        }}
        aria-hidden="true"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundSize: `${zoomPercent}%`,
            backgroundPosition: `center calc(50% + ${offset}px)`,
            backgroundRepeat: 'no-repeat',
            maskImage: `url("${ellipseDataUrl}")`,
            WebkitMaskImage: `url("${ellipseDataUrl}")`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: `center calc(50% + ${maskOffset}px)`,
            WebkitMaskPosition: `center calc(50% + ${maskOffset}px)`,
          }}
        />
      </figure>
    </section>
  )
}

// Demo component
export default function Demo() {
  return (
    <div className="min-h-[300vh] bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="h-[30vh] flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Scroll down to see the parallax effect</h1>
      </div>
      
      <EllipseMaskedBackground
        imageUrl="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
        height="60vh"
        zoomPercent={120}
        parallaxSpeed={0.5}
        className="my-20"
      />
      
      <div className="h-[30vh] flex items-center justify-center text-white">
        <p className="text-xl">Keep scrolling...</p>
      </div>
      
      <EllipseMaskedBackground
        imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200"
        height="60vh"
        zoomPercent={150}
        parallaxSpeed={0.3}
        className="my-20"
      />
      
      <div className="h-[30vh] flex items-center justify-center text-white">
        <p className="text-xl">End of demo</p>
      </div>
    </div>
  )
}