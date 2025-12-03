"use client"

import type React from "react"

interface VideoHeroBackgroundProps {
  videoSrc: string
  children: React.ReactNode
  overlayOpacity?: number
}

export function VideoHeroBackground({ videoSrc, children, overlayOpacity = 0.3 }: VideoHeroBackgroundProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
