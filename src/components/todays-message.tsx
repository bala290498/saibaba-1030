"use client";

import { MessageCircle } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function TodaysMessage() {
  const { language } = useLanguage();
  const t = translations[language].todaysMessage;

  return (
    <section 
      className="py-16 relative"
      style={{
        background: GRADIENTS.dark,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <MessageCircle className="w-8 h-8 text-white" />
            <h2 
              className="text-3xl md:text-4xl font-bold text-white"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.title}
            </h2>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-white/30">
            <blockquote 
              className="text-xl md:text-2xl text-gray-800 italic mb-6 leading-relaxed"
              style={{
                fontFamily: "var(--font-playfair)",
              }}
            >
              &ldquo;{t.message}&rdquo;
            </blockquote>
            <p className="text-lg md:text-xl text-divine-saffron font-semibold text-right">
              {t.author}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

