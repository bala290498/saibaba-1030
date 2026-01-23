"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function AboutSaiBabaPage() {
  const { language } = useLanguage();
  const t = translations[language].about;

  const sections = [
    {
      id: 1,
      heading: t.section1.heading,
      copy: t.section1.copy,
      layout: "left-content",
      image: "/about/sai-baba-1.jpg",
    },
    {
      id: 2,
      heading: t.section2.heading,
      copy: t.section2.copy,
      layout: "right-content",
      image: "/about/sai-baba-2.jpg",
    },
    {
      id: 3,
      heading: t.section3.heading,
      copy: t.section3.copy,
      layout: "left-content",
      image: "/about/sai-baba-3.jpg",
    },
    {
      id: 4,
      heading: t.section4.heading,
      copy: t.section4.copy,
      layout: "right-content",
      image: "/about/sai-baba-4.jpg",
    },
    {
      id: 5,
      heading: t.section5.heading,
      quote: t.section5.quote,
      copy: t.section5.copy,
      layout: "left-content",
      image: "/about/sai-baba-5.jpg",
    },
    {
      id: 6,
      heading: t.section6.heading,
      copy: t.section6.copy,
      layout: "right-content",
      image: "/about/sai-baba-6.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div 
        className="py-16"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.title}
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => {
        const isEven = index % 2 === 1;
        const bgGradient = isEven ? GRADIENTS.light : GRADIENTS.dark;
        const textColor = isEven ? "text-gray-800" : "text-white";
        const headingColor = isEven ? "text-divine-saffron" : "text-white";

        return (
          <section
            key={section.id}
            className="py-16 md:py-20"
            style={{
              background: bgGradient,
            }}
          >
            <div className="container mx-auto px-4">
              <div
                className={`flex flex-col ${
                  section.layout === "left-content" ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 max-w-7xl mx-auto`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ${
                    section.layout === "left-content" ? "lg:w-[70%]" : "lg:w-[70%]"
                  }`}
                >
                  <h2
                    className={`text-3xl md:text-4xl font-bold mb-6 ${headingColor}`}
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontWeight: 900,
                    }}
                  >
                    {section.heading}
                  </h2>

                  {section.quote && (
                    <blockquote
                      className={`text-2xl md:text-3xl font-medium italic mb-6 ${textColor}`}
                      style={{
                        fontFamily: "var(--font-playfair)",
                      }}
                    >
                      &ldquo;{section.quote}&rdquo;
                    </blockquote>
                  )}

                  <p
                    className={`text-lg md:text-xl leading-relaxed ${textColor} ${
                      isEven ? "text-gray-700" : "text-white/90"
                    }`}
                  >
                    {section.copy}
                  </p>
                </div>

                {/* Image */}
                <div
                  className={`flex-shrink-0 ${
                    section.layout === "left-content" ? "lg:w-[30%]" : "lg:w-[30%]"
                  } w-full lg:w-auto`}
                >
                  <div 
                    className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg flex items-center justify-center"
                    style={{
                      background: isEven
                        ? "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)"
                        : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                    }}
                  >
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3/4 h-3/4 opacity-30"
                    >
                      {/* Om Symbol */}
                      <path
                        d="M100 40C120 40 140 50 150 70C160 90 160 110 150 130C140 150 120 160 100 160C80 160 60 150 50 130C40 110 40 90 50 70C60 50 80 40 100 40Z"
                        stroke={isEven ? "#d97706" : "#fef3c7"}
                        strokeWidth="3"
                        fill="none"
                      />
                      <path
                        d="M100 80L100 120M80 100L120 100"
                        stroke={isEven ? "#d97706" : "#fef3c7"}
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {/* Decorative circles */}
                      <circle cx="50" cy="50" r="8" fill={isEven ? "#d97706" : "#fef3c7"} opacity="0.5" />
                      <circle cx="150" cy="50" r="8" fill={isEven ? "#d97706" : "#fef3c7"} opacity="0.5" />
                      <circle cx="50" cy="150" r="8" fill={isEven ? "#d97706" : "#fef3c7"} opacity="0.5" />
                      <circle cx="150" cy="150" r="8" fill={isEven ? "#d97706" : "#fef3c7"} opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
