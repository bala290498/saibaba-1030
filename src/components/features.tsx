import Link from "next/link";
import { Calendar, Heart, Sparkles, Users } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";

const features = [
  {
    icon: Calendar,
    title: "Regular Events",
    description:
      "Join us for weekly prayers, bhajans, and special celebrations throughout the year.",
    href: "/events",
    color: "from-divine-saffron to-divine-saffron-dark",
  },
  {
    icon: Heart,
    title: "Support Us",
    description:
      "Your generous donations help us maintain the temple and serve the community.",
    href: "/donation",
    color: "from-divine-gold to-divine-gold-dark",
  },
  {
    icon: Sparkles,
    title: "Pooja Services",
    description:
      "Book special poojas and seek divine blessings for your family and loved ones.",
    href: "/poja",
    color: "from-divine-saffron-dark to-divine-saffron",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with fellow devotees and be part of our growing spiritual family.",
    href: "/events",
    color: "from-divine-gold-dark to-divine-gold",
  },
];

export function Features() {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        background: GRADIENTS.dark,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Our Services
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover how you can be part of our divine journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href={feature.href}
                className="group p-8 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

