"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { EllipseMaskedBackground } from "./ellipse";
import ParallaxCard from "./parallax-card"; // Import ParallaxCard component

type Card = {
  title: string;
  description: string;
  icon: string;
  className: string;
  speed: number;
};

function ScrollHeading() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = headingRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div ref={headingRef} className="max-w-3xl">
      <h2
        className={`text-4xl md:text-6xl font-light leading-tight tracking-tight text-gray-900 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="block">CLEAN, CONSCIOUS,</span>
        <span className="block">PERFORMANCE</span>
      </h2>
      <div className="flex flex-row gap-10 justify-start items-start">
        <p
          className={`mt-4 text-sm md:text-base text-gray-500 transform transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Unreservedly honest products that truly work, be kind to skin and the
          planet – no exceptions!
        </p>
        <span
          className={`mt-2 block text-5xl md:text-8xl underline decoration-4 italic text-gray-700 transform transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          skincare.
        </span>
      </div>
      <svg
        className="block md:hidden w-[122px] h-[195px] mt-6"
        width="122"
        height="195"
        viewBox="0 0 122 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="maskarrowtext_ingredientsM">
          <path
            className="mask-path"
            d="M62.0791 194.046C62.3807 194.003 62.5899 193.723 62.5464 193.421L61.8364 188.506C61.7928 188.204 61.513 187.995 61.2114 188.039C60.9098 188.082 60.7006 188.362 60.7441 188.664L61.3752 193.033L57.0062 193.664C56.7045 193.707 56.4954 193.987 56.5389 194.289C56.5825 194.59 56.8623 194.8 57.1639 194.756L62.0791 194.046ZM121.492 0.948265C56.0968 1.95061 15.1899 30.7812 3.65924 69.2165C-7.86788 107.64 10.058 155.358 61.6698 193.942L62.3306 193.058C10.9425 154.642 -6.6316 107.36 4.7163 69.5336C16.0607 31.719 56.4038 3.04963 121.509 2.05174L121.492 0.948265Z"
            style={{
              strokeDashoffset: 389.9,
              strokeDasharray: "380px, 227.288px",
            }}
          />
        </mask>
        <path
          mask="url(#maskarrowtext_ingredientsM)"
          d="M62.0791 194.046C62.3807 194.003 62.5899 193.723 62.5464 193.421L61.8364 188.506C61.7928 188.204 61.513 187.995 61.2114 188.039C60.9098 188.082 60.7006 188.362 60.7441 188.664L61.3752 193.033L57.0062 193.664C56.7045 193.707 56.4954 193.987 56.5389 194.289C56.5825 194.59 56.8623 194.8 57.1639 194.756L62.0791 194.046ZM121.492 0.948265C56.0968 1.95061 15.1899 30.7812 3.65924 69.2165C-7.86788 107.64 10.058 155.358 61.6698 193.942L62.3306 193.058C10.9425 154.642 -6.6316 107.36 4.7163 69.5336C16.0607 31.719 56.4038 3.04963 121.509 2.05174L121.492 0.948265Z"
          fill="black"
        />
      </svg>
    </div>
  );
}

export default function FeatureSection() {
  const cards: Card[] = [
    {
      title: "Clean, Beyond Reproach",
      description:
        "Truly clean with verified ingredients, free from over 1800 questionable substances.",
      icon: "/globe.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl  px-8 py-8 z-20 md:absolute md:left-[4%] md:top-[38%] md:h-[400px]",
      speed: 3,
    },
    {
      title: "Radical Transparency",
      description:
        "No black boxes, nothing to hide, we disclose our full formulas.",
      icon: "/file.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl  px-8 py-8 z-20 md:absolute md:left-[23%] md:top-[6%] md:h-[400px]",
      speed: 1,
    },
    {
      title: "Potent & Multi Tasking",
      description:
        "Packed with actives backed by dermal science to deliver results.",
      icon: "/window.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:left-[62%] md:bottom-[-20%] md:h-[400px]",
      speed: 3,
    },
    {
      title: "Conscious & Responsible",
      description:
        "Certified vegan and cruelty free, housed in responsible packaging.",
      icon: "/globe.svg",
      className:
        "relative mx-auto mt-6 w-full max-w-[320px] bg-[#f5f5f5] rounded-xl shadow-md px-8 py-8 z-20 md:absolute md:right-[1%] md:top-[50%] md:h-[400px]",
      speed: 2,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 z-0">
      <div className="mx-auto px-16 z-10">
        <ScrollHeading />
        <div className="relative mt-12 md:mt-16 min-h-[720px] md:min-h-[900px] ">
          <svg
            viewBox="0 0 300 300"
            className="absolute -right-6 md:right-6 -top-10 md:-top-6 w-48 md:w-64 h-auto text-gray-400 "
          >
            <path
              d="M20 160c80-100 200-80 240 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <EllipseMaskedBackground
            imageUrl="/ingredients-clip.jpg"
            height="80vh"
            className="w-full"
            zoomPercent={40}
          />

          {cards.map((c, i) => (
            <ParallaxCard
              key={i}
              speed={c.speed}
              index={i}
              className={c.className}
            >
              <div className="flex h-full flex-col items-center justify-evenly text-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 flex items-center justify-center shadow-sm">
                  <Image
                    src={c.icon || "/placeholder.svg"}
                    alt="icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="text-gray-900 font-semibold text-base md:text-lg">
                  {c.title}
                </div>
                <div className="text-gray-600 text-sm md:text-base leading-relaxed max-w-88">
                  {c.description}
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
}
