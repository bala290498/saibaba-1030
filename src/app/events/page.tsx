"use client";

import { EventsList } from "@/components/events-list";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function EventsPage() {
  const { language } = useLanguage();
  const t = translations[language].upcomingEvents;

  return (
    <div
      className="min-h-screen py-16 relative"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 relative z-10">
          <h1
            className="text-5xl font-bold mb-4 text-gray-800"
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

        <div className="relative pb-16 md:pb-24">
          <div
            className="pointer-events-none absolute left-1/2 bottom-0 z-0 w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-56 md:h-64 -translate-x-1/2 bg-center bg-contain bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('/events/background.jpeg')",
            }}
            aria-hidden
          />
          <div className="relative z-10">
            <EventsList />
          </div>
        </div>
      </div>
    </div>
  );
}

