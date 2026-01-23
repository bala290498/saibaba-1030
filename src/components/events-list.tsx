"use client";

import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Varushabishekhan",
    date: "24th January",
    time: "TBA",
    location: "Temple Premises",
    description:
      "Join us for the special Varushabishekhan celebration on 24th January.",
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
                  className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-divine-saffron text-white"
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

