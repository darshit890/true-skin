import { Search, Leaf, FlaskConical, User2, Sprout } from "lucide-react"

export default function FeaturesShowcase() {
  const features = [
    {
      id: 1,
      title: "Vegan & Cruelty Free",
      icon: null,
      isLogo: true,
    },
    {
      id: 2,
      title: "100% Transparent & Proven Formula",
      icon: Search,
    },
    {
      id: 3,
      title: "Kind to planet Packaging",
      icon: Leaf,
    },
    {
      id: 4,
      title: "Multitasking Formulas",
      icon: FlaskConical,
    },
    {
      id: 5,
      title: "Sustainable Manufacturing",
      icon: User2,
    },
    {
      id: 6,
      title: "Clean & Pure Beauty",
      icon: Sprout,
    },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap items-start justify-center md:justify-around lg:justify-between gap-4 md:gap-6 overflow-x-auto lg:overflow-visible pb-4">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-1 lg:min-w-max min-w-[140px] md:min-w-[160px] flex-col items-center gap-3 md:gap-4">
              <div className="flex h-24 w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 items-center justify-center rounded-full bg-gray-100">
                {feature.isLogo ? (
                  <span className="text-xl md:text-2xl font-italic text-gray-800">PETA</span>
                ) : feature.icon ? (
                  <feature.icon className="h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 text-gray-700" strokeWidth={1.5} />
                ) : null}
              </div>
              <p className="text-center text-xs md:text-sm font-medium text-gray-700">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
