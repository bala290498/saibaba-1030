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
      className="min-h-screen py-16 relative overflow-hidden"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none bg-center bg-cover bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('/events/background.jpeg')",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
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
        <EventsList />
      </div>
    </div>
  );
}

