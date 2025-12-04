import Image from "next/image"

export default function JArticle() {
  const articles = [
    {
      id: 1,
      title: "Is a Toner necessary in your skincare routine?",
      date: "28 Jan 2025",
      image: "/j3.jpg",
      alt: "Product bottle with applicator pad",
    },
    {
      id: 2,
      title: "How to Make Your Routine More Eco-Friendly",
      date: "25 Jan 2025",
      image: "/j2.jpg",
      alt: "Face mask application with natural elements",
    },
  ]

  return (
    <main className="min-h-screen bg-background flex items-center justify-center mt-12 lg:mt-52">
      <div className="w-full px-6 md:px-16 justify-end">
        <div className="flex flex-col lg:flex-row justify-end gap-6 lg:gap-4">
          {articles.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative w-full lg:w-[600px] h-[220px] lg:h-[350px] mb-4 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-light text-foreground leading-tight group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-muted-foreground">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
