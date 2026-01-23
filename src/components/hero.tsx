import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { GRADIENTS } from "@/lib/constants";

export function Hero() {
  // Generate SVG grain pattern with small circular dots
  // Using darker amber/orange tones to complement the gradient background
  const grainPattern = `data:image/svg+xml,${encodeURIComponent(`
    <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grain" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="rgba(180, 83, 9, 0.2)"/>
          <circle cx="15" cy="12" r="1" fill="rgba(217, 119, 6, 0.15)"/>
          <circle cx="25" cy="8" r="1" fill="rgba(180, 83, 9, 0.2)"/>
          <circle cx="35" cy="18" r="1" fill="rgba(217, 119, 6, 0.15)"/>
          <circle cx="45" cy="22" r="1" fill="rgba(180, 83, 9, 0.2)"/>
          <circle cx="10" cy="28" r="1" fill="rgba(217, 119, 6, 0.15)"/>
          <circle cx="20" cy="32" r="1" fill="rgba(180, 83, 9, 0.2)"/>
          <circle cx="30" cy="38" r="1" fill="rgba(217, 119, 6, 0.15)"/>
          <circle cx="40" cy="42" r="1" fill="rgba(180, 83, 9, 0.2)"/>
          <circle cx="50" cy="48" r="1" fill="rgba(217, 119, 6, 0.15)"/>
          <circle cx="8" cy="15" r="0.8" fill="rgba(180, 83, 9, 0.18)"/>
          <circle cx="22" cy="25" r="0.8" fill="rgba(217, 119, 6, 0.18)"/>
          <circle cx="38" cy="35" r="0.8" fill="rgba(180, 83, 9, 0.18)"/>
          <circle cx="12" cy="40" r="0.8" fill="rgba(217, 119, 6, 0.18)"/>
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(%23grain)"/>
    </svg>
  `)}`;

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
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: GRADIENTS.dark,
          opacity: 0.4
        }}
      />
      
      {/* SVG Grain Pattern Overlay */}
      <div 
        className="hero-grain-overlay absolute inset-0 z-[2] opacity-20"
        style={{
          backgroundImage: `url("${grainPattern}")`,
          backgroundRepeat: "repeat"
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl z-[2]" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl z-[2]" />

      <div className="relative z-[3] container mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/30 shadow-sm">
          <Sparkles className="w-4 h-4 text-divine-saffron" />
          <span className="text-sm font-medium text-gray-700">
            Divine Blessings
          </span>
        </div>
        
        <h1 
          className="mb-6 text-white"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
            fontSize: "4.5rem",
            lineHeight: "1.1"
          }}
        >
          Sai Baba Vedha Garden
        </h1>
        
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          Experience the divine presence, find inner peace, and receive the
          blessings of Sai Baba in our sacred space.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/events"
            className="group px-8 py-4 bg-white text-divine-saffron rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View Events
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/donations"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/20 transition-colors duration-300"
          >
            Make a Donation
          </Link>
        </div>
      </div>
    </section>
  );
}

