"use client";

import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language].contact;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after showing success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 5000);
  };

  return (
    <div className="min-h-screen" style={{ background: GRADIENTS.light }}>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.hero.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone Card */}
              <Card className="p-6 bg-white shadow-lg border border-amber-200/40 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {language === "en" && <Phone className="w-6 h-6 text-divine-saffron" />}
                  <h3 className="text-xl font-bold text-gray-800">{t.info.phone.title}</h3>
                </div>
                <p className="text-lg font-semibold text-divine-saffron mb-2">{t.info.phone.number}</p>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  {language === "en" && <Clock className="w-4 h-4" />}
                  {t.info.phone.note}
                </p>
              </Card>

              {/* Email Card */}
              <Card className="p-6 bg-white shadow-lg border border-amber-200/40 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {language === "en" && <Mail className="w-6 h-6 text-divine-saffron" />}
                  <h3 className="text-xl font-bold text-gray-800">{t.info.email.title}</h3>
                </div>
                <p className="text-lg font-semibold text-divine-saffron mb-2">{t.info.email.address}</p>
                <p className="text-sm text-gray-600">{t.info.email.note}</p>
              </Card>

              {/* Address Card */}
              <Card className="p-6 bg-white shadow-lg border border-amber-200/40 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {language === "en" && <MapPin className="w-6 h-6 text-divine-saffron" />}
                  <h3 className="text-xl font-bold text-gray-800">{t.info.address.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {t.info.address.line1}
                  <br />
                  {t.info.address.line2}
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-6 md:p-8 bg-white shadow-lg border border-amber-200/40">
              <div className="text-center mb-6">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-3 text-gray-800"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 900,
                  }}
                >
                  {t.form.title}
                </h2>
                <p className="text-gray-600">{t.form.helperText}</p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-divine-cream mb-4">
                    {language === "en" && <CheckCircle className="w-8 h-8 text-divine-saffron" />}
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{t.form.successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.form.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                      placeholder={t.form.fullName}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                      placeholder={t.form.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                      placeholder={t.form.phone}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.form.subject}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none"
                      placeholder={t.form.subject}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.form.message} *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-divine-saffron focus:outline-none resize-none"
                      placeholder={t.form.message}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-4 text-lg font-semibold bg-divine-saffron hover:bg-divine-saffron-dark"
                  >
                    {t.form.sendMessage}
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.map.title}
            </h2>
            <div className="bg-white rounded-2xl shadow-lg border border-amber-200/40 overflow-hidden">
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.1234567890123!2d74.7489!3d19.7598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ1JzM1LjMiTiA3NMKwNDQnNTYuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sai Baba Temple Trust Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Information Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 text-center"
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 900,
              }}
            >
              {t.trust.title}
            </h2>
            <Card className="p-6 md:p-8 bg-white shadow-lg border border-amber-200/40">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
                {t.trust.description}
              </p>
              <div className="space-y-3 text-center">
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">{t.trust.registeredName}</p>
                  <p className="text-lg text-gray-800">Sai Baba Temple Trust</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">{t.trust.registrationNumber}</p>
                  <p className="text-lg text-gray-800">REG-XXXX-XXXX</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">{t.trust.yearEstablished}</p>
                  <p className="text-lg text-gray-800">2020</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Blessing Note */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-amber-200/40 text-center">
              <blockquote
                className="text-2xl md:text-3xl text-divine-saffron italic mb-4 leading-relaxed"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                &ldquo;{t.blessing.quote}&rdquo;
              </blockquote>
              <p className="text-xl text-gray-700 font-semibold">{t.blessing.author}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
