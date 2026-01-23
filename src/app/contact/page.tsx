"use client";

import { GRADIENTS } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon. Om Sai Ram.");
  };

  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.dark
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 text-white mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-white"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Get in touch with us for inquiries and information
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-divine-saffron" />
                <h3 className="text-xl font-bold text-gray-800">Address</h3>
              </div>
              <p className="text-gray-700">
                Sai Baba Vedha Garden
                <br />
                Visit us for prayers and blessings
              </p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-6 h-6 text-divine-saffron" />
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
              </div>
              <p className="text-gray-700">Contact us for temple information</p>
            </Card>

            <Card className="p-6 bg-white/95 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-divine-saffron" />
                <h3 className="text-xl font-bold text-gray-800">Temple Hours</h3>
              </div>
              <p className="text-gray-700">
                6:00 AM - 9:00 PM
                <br />
                Daily Aarti: 6:00 AM & 6:00 PM
              </p>
            </Card>
          </div>

          <Card className="p-8 bg-white/95 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

