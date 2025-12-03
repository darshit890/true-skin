interface EllipseMaskedBackgroundProps {
  imageUrl: string
  height?: string
  className?: string
  zoomPercent?: number
}

const ellipseSvg = `
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="100" rx="120" ry="58" fill="black" transform="rotate(45 100 100)" />
</svg>
`

const ellipseDataUrl = `data:image/svg+xml,${encodeURIComponent(ellipseSvg)}`

export function EllipseMaskedBackground({ imageUrl, height = "50vh", className = "", zoomPercent = 100 }: EllipseMaskedBackgroundProps) {
  return (
    <section className={`w-full p-5 ${className}`}>
      <figure
        className="relative bg-fixed bg-cover bg-center"
        style={{
          height,
          backgroundImage: `url('${imageUrl}')`,
          backgroundSize: `${zoomPercent}%`,
          maskImage: `url("${ellipseDataUrl}")`,
          WebkitMaskImage: `url("${ellipseDataUrl}")`,
          maskSize: "contain",
          WebkitMaskSize: "contain",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
        aria-hidden="true"
      />
    </section>
  )
}
