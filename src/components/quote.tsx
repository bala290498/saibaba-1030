import { Quote as QuoteIcon } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";

export function Quote() {
  return (
    <section 
      className="py-20 relative"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <QuoteIcon className="w-12 h-12 text-divine-saffron mx-auto mb-6 opacity-50" />
          <blockquote 
            className="text-3xl md:text-4xl font-medium text-gray-800 italic mb-4"
            style={{
              fontFamily: "var(--font-playfair)",
            }}
          >
            "Love one another and help others to rise to the higher levels,
            simply by pouring out love. Love is infectious and the greatest
            healing energy."
          </blockquote>
          <p className="text-xl text-divine-saffron font-semibold">
            — Sai Baba
          </p>
        </div>
      </div>
    </section>
  );
}

