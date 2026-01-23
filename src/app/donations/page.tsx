"use client";

import { DonationForm } from "@/components/donation-form";
import { Heart } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";

export default function DonationsPage() {
  const { language } = useLanguage();
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.dark
      }}
    >
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        {language === "en" && <Heart className="w-16 h-16 text-white mx-auto mb-4" />}
        <h1 
          className="text-5xl font-bold mb-4 text-white"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          Support Our Mission
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Your generous donations help us maintain the temple and serve the community
        </p>
      </div>
        <div className="max-w-2xl mx-auto">
          <DonationForm />
        </div>
      </div>
    </div>
  );
}

