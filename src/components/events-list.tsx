"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Weekly Bhajan Session",
    date: "Every Thursday",
    time: "7:00 PM - 8:30 PM",
    location: "Main Hall",
    description:
      "Join us for soulful bhajans and prayers every Thursday evening.",
    type: "Regular",
  },
  {
    id: 2,
    title: "Guru Purnima Celebration",
    date: "July 21, 2024",
    time: "6:00 AM - 9:00 PM",
    location: "Temple Premises",
    description:
      "Special celebration honoring our gurus with prayers, bhajans, and prasad distribution.",
    type: "Special",
  },
  {
    id: 3,
    title: "Sai Baba Aarti",
    date: "Every Day",
    time: "6:00 PM",
    location: "Main Shrine",
    description: "Daily evening aarti to seek blessings from Sai Baba.",
    type: "Regular",
  },
  {
    id: 4,
    title: "Navratri Special Pooja",
    date: "October 3-12, 2024",
    time: "6:00 AM - 9:00 PM",
    location: "Temple Premises",
    description:
      "Nine days of special prayers and celebrations during Navratri.",
    type: "Festival",
  },
];

export function EventsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {event.title}
                </h3>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    event.type === "Special" || event.type === "Festival"
                      ? "bg-divine-saffron text-white"
                      : "bg-divine-cream text-divine-saffron"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {event.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <Calendar className="w-5 h-5 text-divine-saffron" />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Clock className="w-5 h-5 text-divine-saffron" />
                <span className="font-medium">{event.time}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="w-5 h-5 text-divine-saffron" />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

