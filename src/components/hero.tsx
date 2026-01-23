"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section 
      className="hero-section relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home/hero-image/hero.jpg"
          alt="Sai Baba Vedha Garden"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      <div className="relative z-[3] container mx-auto px-4 text-center">
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/events"
            className="group px-8 py-4 bg-white text-divine-saffron rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            {t.viewEvents}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/donations"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300"
          >
            {t.makeDonation}
          </Link>
        </div>
      </div>
    </section>
  );
}

