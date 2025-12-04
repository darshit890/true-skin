import React from "react";

const TPackaging = () => {
  return (
    <div className="w-full relative min-h-screen">
      {/* Background Image Section */}
      <div className="w-full h-64 md:h-80 lg:h-[800px]">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(/footer.jpg)",
          }}
        />
      </div>
      <div className="flex flex-col justify-between px-16 py-24 min-h-screen">
        {/* Main heading area */}
        <div className="mb-32 text-right">
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-[#454545] mb-12">
            Clean Ingredients,
            <br />
            <span className="italic text-[#454545] font-bold">Radical</span> Transparency.
          </h1>
        </div>

        {/* Leaf icon and content grid */}
        <div className="flex gap-x-200 items-center">
          {/* Leaf icon */}
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#454545] text-white flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.53177 15.0134C15.67 15.0134 16.4867 6.3882 16.552 2.28932C16.5526 2.17783 16.5308 2.06734 16.488 1.96441C16.4451 1.86147 16.382 1.76818 16.3025 1.69005C16.2229 1.61193 16.1285 1.55055 16.0248 1.50956C15.9211 1.46857 15.8103 1.44879 15.6988 1.4514C1.29126 1.71601 1.29126 8.70097 1.29126 15.0134V18.4058"
                  stroke="currentColor"
                  strokeWidth="1.6962"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.29126 15.0148C1.29126 15.0148 1.29126 9.92623 8.07607 9.07812"
                  stroke="currentColor"
                  strokeWidth="1.6962"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Two column text content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left column */}
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We formulate to the highest standards of efficacy and safety – using only proven, verified ingredients
                in bio-compatible bases, and free from over 1800 questionable ingredients.
              </p>
            </div>

            {/* Right column */}
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                With no black boxes, and nothing to hide, we strive for radical formulation transparency, so you will
                never have to guess what and how much of it is in the products you use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TPackaging;
