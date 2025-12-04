import Image from "next/image"

const JArticle2 = () => {
    const articles = [
    {
      id: 1,
      title: "Your Skincare and Makeup Routine Impacts Your Well-Being",
      description:
        "Discover the connection between your skincare and makeup routine and overall well-being. Learn how daily beauty habits impact mental health, self-esteem, and emotional resilience, and find a healthier approach.",
      date: "20 Dec 2024",
      image: "/j4.jpg",
      position: "left",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Choosing the Right Foundation for Your Skin Tone",
      description:
        "Master the art of selecting the perfect foundation shade and formula for your unique skin tone. Learn professional tips for seamless blending and long-lasting coverage.",
      date: "22 Dec 2024",
      image: "/j5.jpg",
      position: "right",
    },
  ]
  return (
    <main className="min-h-screen">
      <div className="relative min-h-screen px-6 py-20">
        <div className="">
          {/* Grid container with two columns - creates the staggered effect */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
            {/* First Card - positioned with top offset */}
            <div className="flex justify-end lg:pt-0">
              <div className="w-full max-w-4xl bg-white overflow-hidden  transition-shadow duration-300">
                <div className="relative w-full overflow-hidden bg-neutral-100 h-[220px] md:h-[300px] lg:h-150">
                  <Image
                    src={articles[0].image || "/placeholder.svg"}
                    alt={articles[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-3 text-pretty">{articles[0].title}</h2>
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed">{articles[0].description}</p>
                  <p className="text-xs text-neutral-500 font-medium">{articles[0].date}</p>
                </div>
              </div>
            </div>

            {/* Second Card - positioned lower with offset */}
            <div className="flex justify-start lg:pt-72">
              <div className="w-full max-w-4xl bg-white overflow-hidden  transition-shadow duration-300">
                <div className="relative w-full overflow-hidden bg-neutral-100 h-[220px] md:h-[300px] lg:h-150">
                  <Image
                    src={articles[1].image || "/placeholder.svg"}
                    alt={articles[1].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-xl font-bold text-neutral-900 mb-3 text-pretty">{articles[1].title}</h2>
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed">{articles[1].description}</p>
                  <p className="text-xs text-neutral-500 font-medium">{articles[1].date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default JArticle2
