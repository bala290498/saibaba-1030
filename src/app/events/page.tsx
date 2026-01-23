import { EventsList } from "@/components/events-list";
import { GRADIENTS } from "@/lib/constants";

export default function EventsPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h1 
          className="text-5xl font-bold mb-4 text-gray-800"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          Upcoming Events
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Join us for divine celebrations and spiritual gatherings
        </p>
      </div>
        <EventsList />
      </div>
    </div>
  );
}

