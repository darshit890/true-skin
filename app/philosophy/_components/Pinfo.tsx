import { Star } from "@/components/star-icon"
import Image from "next/image"

export default function PInfo() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="flex items-stretch min-h-screen">
        {/* Left Content */}
        <div className="w-1/2 bg-linear-to-br from-amber-50 via-orange-50 to-stone-100 flex flex-col justify-between p-12 md:p-16">
          <div className="flex justify-center pt-8">
            <Star />
          </div>

          <div className="max-w-sm mx-auto text-center flex flex-col items-center">
            <h1 className="text-3xl font-semibold text-[#454545] leading-tight mb-8">
              Honest products{" "}
              <span className="text-[#454545]">
                that truly work <span className="italic text-[#454545] font-bold">no exceptions!</span>
              </span>
            </h1>

            <div>
              <div className="flex flex-col gap-6 mt-20">
                <Image
                  src="/pi.jpg"
                  alt="Skincare product showcase"
                  width={200}
                  height={280}
                  className="rounded-md object-cover mx-auto"
                />
              </div>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed mt-8 text-center">
              Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create
              transparent skincare that is incredibly effective, safe and without harming the environment or the planet.
            </p>
          </div>

          <div className="pb-8" />
        </div>

        {/* Right Image */}
        <div className="w-1/2 relative overflow-hidden">
          <Image src="/explore-1.jpg" alt="Dewy skin beauty showcase" fill className="object-cover" priority />
        </div>
      </section>
    </main>
  )
}
