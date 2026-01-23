"use client";

import { Clock } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function DailyAartiTimings() {
  const { language } = useLanguage();
  const t = translations[language].aartiTimings;

  return (
    <section 
      className="py-16 relative"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            {t.title}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-divine-saffron to-divine-saffron-dark flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t.morning}</h3>
              </div>
              <p className="text-2xl font-semibold text-divine-saffron">{t.morningTime}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-amber-200/40">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-divine-gold to-divine-gold-dark flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{t.evening}</h3>
              </div>
              <p className="text-2xl font-semibold text-divine-saffron">{t.eveningTime}</p>
            </div>
          </div>

          <p className="text-center text-gray-700 mt-6 text-sm md:text-base">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}

