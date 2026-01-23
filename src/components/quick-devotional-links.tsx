"use client";

import Link from "next/link";
import { BookOpen, Heart, Info, Sparkles } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function QuickDevotionalLinks() {
  const { language } = useLanguage();
  const t = translations[language].devotionalLinks;

  const links = [
    {
      href: "/aarti-bhajans",
      label: t.aartiBhajans,
      icon: Sparkles,
      color: "from-divine-saffron to-divine-saffron-dark",
    },
    {
      href: "/devotion",
      label: t.devotion,
      icon: Heart,
      color: "from-divine-gold to-divine-gold-dark",
    },
    {
      href: "/temple-info",
      label: t.templeInfo,
      icon: Info,
      color: "from-divine-saffron-dark to-divine-saffron",
    },
    {
      href: "/about-sai-baba",
      label: t.aboutSaiBaba,
      icon: BookOpen,
      color: "from-divine-gold-dark to-divine-gold",
    },
  ];

  return (
    <section 
      className="py-16 relative"
      style={{
        background: GRADIENTS.light,
      }}
    >
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          {t.title}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                href={link.href}
                className="group bg-white p-6 rounded-2xl shadow-md border border-amber-200/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {language === "en" && (
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-divine-saffron transition-colors">
                  {link.label}
                </h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

