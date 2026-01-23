import { GRADIENTS } from "@/lib/constants";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function TempleInfoPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.dark
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <MapPin className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Temple Information
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Visit us and experience the divine presence
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Timings
            </h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <p className="font-semibold">Morning Aarti</p>
                <p>6:00 AM - 7:00 AM</p>
              </div>
              <div>
                <p className="font-semibold">Temple Hours</p>
                <p>6:00 AM - 9:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Evening Aarti</p>
                <p>6:00 PM - 7:00 PM</p>
              </div>
              <div>
                <p className="font-semibold">Bhajan Sessions</p>
                <p>Every Thursday: 7:00 PM - 8:30 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              Location
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold">Sai Baba Vedha Garden</p>
              <p>Visit us for prayers and blessings</p>
              <p className="text-divine-saffron font-medium mt-4">Om Sai Ram</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <Phone className="w-6 h-6" />
              Contact
            </h2>
            <div className="space-y-3 text-gray-700">
              <p>For inquiries and information, please visit our Contact page.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-divine-saffron mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              Services
            </h2>
            <div className="space-y-2 text-gray-700">
              <p>• Daily Aarti</p>
              <p>• Weekly Bhajans</p>
              <p>• Special Poojas</p>
              <p>• Prasad Distribution</p>
              <p>• Spiritual Guidance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

