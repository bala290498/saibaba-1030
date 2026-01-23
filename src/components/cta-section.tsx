import Link from "next/link";
import { ArrowRight, Heart, Calendar } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: GRADIENTS.light,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 text-divine-saffron mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Join Us in Divine Service
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Be part of our spiritual community and experience the blessings of
            Sai Baba. Together, we grow in faith and serve with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/events"
              className="group px-8 py-4 bg-divine-saffron text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              View Upcoming Events
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donation"
              className="px-8 py-4 bg-white text-divine-saffron border-2 border-divine-saffron rounded-full font-semibold text-lg hover:bg-divine-cream transition-colors duration-300 flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-200">
            <p className="text-lg text-gray-700 font-medium">
              &ldquo;All that we are is the result of what we have thought.&rdquo;
            </p>
            <p className="text-divine-saffron font-semibold mt-2">— Sai Baba</p>
          </div>
        </div>
      </div>
    </section>
  );
}

