import { GRADIENTS } from "@/lib/constants";
import { Heart, BookOpen, Sparkles } from "lucide-react";

const devotionPractices = [
  {
    title: "Daily Prayers",
    description: "Start and end your day with prayers to Sai Baba for guidance and protection.",
    icon: Heart,
  },
  {
    title: "Chanting",
    description: "Chant &ldquo;Om Sai Ram&rdquo; with devotion to feel the divine presence.",
    icon: Sparkles,
  },
  {
    title: "Reading Sai Satcharitra",
    description: "Read the life and teachings of Sai Baba to deepen your understanding.",
    icon: BookOpen,
  },
  {
    title: "Service to Others",
    description: "Practice selfless service (seva) as taught by Sai Baba.",
    icon: Heart,
  },
];

export default function DevotionPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.dark
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Heart className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Devotion
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ways to deepen your devotion to Sai Baba
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {devotionPractices.map((practice, index) => {
              const Icon = practice.icon;
              return (
                <div key={index} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-8 h-8 text-divine-saffron" />
                    <h3 className="text-xl font-bold text-gray-800">{practice.title}</h3>
                  </div>
                  <p className="text-gray-600">{practice.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold text-divine-saffron mb-4">Message of Devotion</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Devotion to Sai Baba is not just about rituals, but about living his teachings every day. 
              True devotion means showing love and compassion to all, helping those in need, and maintaining 
              faith even in difficult times.
            </p>
            <blockquote className="text-xl text-gray-700 italic border-l-4 border-divine-saffron pl-4">
              &ldquo;If you look to me, I look to you. If you burden me with your cares, I will surely lighten them. 
              If you seek my advice and help, it shall be given to you at once.&rdquo;
            </blockquote>
            <p className="text-divine-saffron font-semibold mt-4 text-right">— Sai Baba</p>
          </div>
        </div>
      </div>
    </div>
  );
}

