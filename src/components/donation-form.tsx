"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

const donationAmounts = [500, 1000, 2500, 5000];

export function DonationForm() {
  const { language } = useLanguage();
  const t = translations[language].donations.form;
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sevaCategory: "",
  });

  const sevaCategories = [
    translations[language].donations.categories.general.title,
    translations[language].donations.categories.annadanam.title,
    translations[language].donations.categories.festival.title,
    translations[language].donations.categories.pooja.title,
    translations[language].donations.categories.development.title,
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    alert("Thank you for your generous donation! Om Sai Ram.");
  };

  return (
    <Card className="p-6 md:p-8">
      <div className="text-center mb-8">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-2"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 900,
          }}
        >
          {t.title}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {t.donationAmount}
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
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
              placeholder={t.customAmount}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
              className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
            />
          </div>
        </div>

        {/* Donor Details */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">{t.donorDetails}</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.fullName} *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                placeholder={t.fullName}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.email} *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                placeholder={t.email}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.mobile} *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                placeholder={t.mobile}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t.sevaCategory}
              </label>
              <select
                value={formData.sevaCategory}
                onChange={(e) =>
                  setFormData({ ...formData, sevaCategory: e.target.value })
                }
                className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none bg-white"
              >
                <option value="">{t.sevaCategory}</option>
                {sevaCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">{t.paymentMethods}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-divine-saffron/50 transition-colors cursor-pointer">
              <p className="text-sm font-semibold text-gray-700">{t.debitCard}</p>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-divine-saffron/50 transition-colors cursor-pointer">
              <p className="text-sm font-semibold text-gray-700">{t.creditCard}</p>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-divine-saffron/50 transition-colors cursor-pointer">
              <p className="text-sm font-semibold text-gray-700">{t.upi}</p>
            </div>
            <div className="p-4 border-2 border-gray-200 rounded-lg text-center hover:border-divine-saffron/50 transition-colors cursor-pointer">
              <p className="text-sm font-semibold text-gray-700">{t.netBanking}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4 flex items-center gap-2">
            {language === "en" && <Shield className="w-4 h-4 text-divine-saffron" />}
            {t.secureNote}
          </p>
        </div>

        <Button
          type="submit"
          className="w-full py-4 text-lg font-semibold bg-divine-saffron hover:bg-divine-saffron-dark"
          disabled={!selectedAmount && !customAmount}
        >
          {t.proceed}
        </Button>
      </form>
    </Card>
  );
}
