/* trunk-ignore-all(prettier) */
"use client";

import { useEffect, useRef } from "react";

interface Ingredient {
  id: string;
  name: string;
  icon: string;
  delay: number;
}

function Star() {
  return (
    <svg
      className="w-8 h-8"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 0C16.5 0 17.9497 8.10256 21.4236 11.5764C24.8974 15.0503 33 16.5 33 16.5C33 16.5 24.8974 17.9497 21.4236 21.4236C17.9497 24.8974 16.5 33 16.5 33C16.5 33 15.0503 24.8974 11.5764 21.4236C8.10256 17.9497 0 16.5 0 16.5C0 16.5 8.10256 15.0503 11.5764 11.5764C15.0503 8.10256 16.5 0 16.5 0Z"
        fill="#FFFFFFFF"
      />
    </svg>
  );
}

const ingredients: Ingredient[] = [
  { id: "1", name: "Glycolic Acid", icon: "🌹", delay: 0 },
  { id: "2", name: "Centella Asiatica", icon: "🌿", delay: 100 },
  { id: "3", name: "Hyaluronic Acid", icon: "💧", delay: 200 },
  { id: "4", name: "Fruit AHA Complex", icon: "🍓", delay: 300 },
  { id: "5", name: "Glycolic Acid", icon: "🌹", delay: 0 },
  { id: "6", name: "Centella Asiatica", icon: "🌿", delay: 100 },
  { id: "7", name: "Hyaluronic Acid", icon: "💧", delay: 200 },
  { id: "8", name: "Fruit AHA Complex", icon: "🍓", delay: 300 },
];

export function IngredientShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes continuousSlideDown {
        0% {
          opacity: 0;
          transform: translateY(-150%);
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: translateY(120vh);
        }
      }

      .ingredient-card {
        animation: continuousSlideDown 12s linear infinite;
      }

      .ingredient-card:nth-child(1) {
        animation-delay: 0s;
      }

      .ingredient-card:nth-child(2) {
        animation-delay: -3s;
      }

      .ingredient-card:nth-child(3) {
        animation-delay: -6s;
      }

      .ingredient-card:nth-child(4) {
        animation-delay: -9s;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-[#232323] text-white py-20 px-6 overflow-hidden">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch gap-y-10">
          {/* Left Column - Small Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-y-10">
            <div
              ref={containerRef}
              className="flex flex-col gap-y-4 relative h-[300px] md:h-[360px] lg:h-[400px]"
            >
              {ingredients.slice(0, 5).map((ingredient) => (
                <div
                  key={ingredient.id}
                  className="ingredient-card bg-white text-gray-900 p-6 absolute w-[240px] h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px]"
                >
                  <div className="flex items-start gap-3 mb-8">
                    <div className="text-2xl">{ingredient.icon}</div>
                  </div>
                  <p className="text-sm font-medium text-gray-600">
                    {ingredient.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Middle Column - Large Featured Card */}
            {/* Middle Column - Large Featured Card */}
          <div
            className="flex flex-col gap-4 relative h-[300px] md:h-[360px] lg:h-[400px]"
          >
              {ingredients.slice(0, 4).map((ingredient) => (
              <div
                key={`middle-${ingredient.id}`}
                className="ingredient-card bg-white text-gray-900 p-8 flex flex-col justify-between absolute w-[240px] h-[300px] md:w-[300px] md:h-[360px] lg:w-[350px] lg:h-[400px]"
              >
                  <div className="flex items-start gap-3 mb-12">
                    <div className="text-3xl">{ingredient.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {ingredient.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Deep hydration & plumping
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div className="flex flex-col justify-between items-center mx-auto">
            {/* Star and Heading */}
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <Star />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-center">
                Only proven
                <br />
                Ingredients, <span className="italic font-light">quality</span>
                <br />
                <span className="italic font-light">over quantity</span> always!
              </h2>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col items-center justify-between gap-y-24 md:gap-y-40 lg:gap-y-52">
              <div className="w-32 md:w-40 lg:w-48 h-px bg-gray-500 transform rotate-45 mt-25"></div>
              <div>
                <p className="text-6xl font-bold text-center">1800+</p>
                <p className="text-gray-300 mt-2 text-center">
                  unsafe ingredients <span className="italic">excluded</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
