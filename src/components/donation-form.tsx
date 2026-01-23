"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

const donationAmounts = [500, 1000, 2000, 5000, 10000];

export function DonationForm() {
  const { language } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    alert("Thank you for your generous donation! Om Sai Ram.");
  };

  return (
    <Card className="p-8">
      <div className="text-center mb-8">
        {language === "en" && <Heart className="w-12 h-12 text-divine-saffron mx-auto mb-4" />}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Make a Donation
        </h2>
        <p className="text-gray-600">
          Your contribution helps us maintain the temple and serve the community
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Select Amount (₹)
          </label>
          <div className="grid grid-cols-3 gap-3 mb-3">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                  selectedAmount === amount
                    ? "border-divine-saffron bg-divine-cream text-divine-saffron"
                    : "border-gray-200 hover:border-divine-saffron/50 text-gray-700"
                }`}
              >
                ₹{amount.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
            placeholder="Enter your name"
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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message (Optional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none resize-none"
            placeholder="Any special intentions or prayers..."
          />
        </div>

        <Button
          type="submit"
          className="w-full py-4 text-lg font-semibold"
          disabled={!selectedAmount && !customAmount}
        >
          Donate ₹
          {selectedAmount
            ? selectedAmount.toLocaleString()
            : customAmount
            ? parseInt(customAmount).toLocaleString()
            : ""}
        </Button>

        <p className="text-sm text-gray-500 text-center">
          All donations are used for temple maintenance and community service.
          Om Sai Ram.
        </p>
      </form>
    </Card>
  );
}

