"use client";

import { GRADIENTS } from "@/lib/constants";
import { BookOpen, Heart, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export default function AboutSaiBabaPage() {
  const { language } = useLanguage();
  const t = translations[language].about;
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BookOpen className="w-16 h-16 text-divine-saffron mx-auto mb-4" />
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

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4">{t.whoIs}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t.whoIsText1}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.whoIsText2}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <Heart className="w-8 h-8" />
              {t.coreTeachings}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span>{t.teaching1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span>{t.teaching2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span>{t.teaching3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span>{t.teaching4}</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-divine-saffron mt-1 flex-shrink-0" />
                <span>{t.teaching5}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4">{t.famousSayings}</h2>
            <div className="space-y-4">
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;{t.saying1}&rdquo;
              </blockquote>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;{t.saying2}&rdquo;
              </blockquote>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
                &ldquo;{t.saying3}&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

