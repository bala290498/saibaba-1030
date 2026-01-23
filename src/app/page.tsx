import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Quote } from "@/components/quote";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Quote />
      <Features />
      <Testimonials />
      <CTASection />
    </div>
  );
}

