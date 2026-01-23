import { GRADIENTS } from "@/lib/constants";
import { Music, Calendar, Clock } from "lucide-react";

const aartiSchedule = [
  { time: "6:00 AM", name: "Morning Aarti", description: "Start your day with divine blessings" },
  { time: "6:00 PM", name: "Evening Aarti", description: "Evening prayers and aarti ceremony" },
];

const bhajanSchedule = [
  { day: "Every Thursday", time: "7:00 PM - 8:30 PM", description: "Weekly bhajan session with devotional songs" },
  { day: "Special Occasions", time: "As Announced", description: "Special bhajan programs during festivals" },
];

export default function AartiBhajansPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Music className="w-16 h-16 text-divine-saffron mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Aarti & Bhajans
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join us for daily aartis and soulful bhajan sessions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-divine-saffron mb-6 text-center">Daily Aarti Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aartiSchedule.map((aarti, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-divine-saffron" />
                    <span className="text-xl font-bold text-gray-800">{aarti.time}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-divine-saffron mb-2">{aarti.name}</h3>
                  <p className="text-gray-600">{aarti.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-divine-saffron mb-6 text-center">Bhajan Schedule</h2>
            <div className="space-y-4">
              {bhajanSchedule.map((bhajan, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-divine-saffron" />
                    <span className="text-xl font-bold text-gray-800">{bhajan.day}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-divine-saffron" />
                    <span className="font-semibold text-gray-700">{bhajan.time}</span>
                  </div>
                  <p className="text-gray-600">{bhajan.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h3 className="text-2xl font-bold text-divine-saffron mb-4">Join Us</h3>
            <p className="text-gray-700 mb-4">
              Experience the divine energy through our daily aartis and weekly bhajan sessions. 
              All devotees are welcome to participate and seek blessings.
            </p>
            <p className="text-divine-saffron font-semibold text-lg">Om Sai Ram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

