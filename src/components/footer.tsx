"use client";

import Link from "next/link";
import { Heart, Facebook, Instagram, Youtube } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";
import { useLanguage } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language];
  const navT = t.nav;
  const footerT = t.footer;
  return (
    <footer 
      className="border-t border-amber-300/50"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Sai Baba Vedha Garden
            </h3>
            <p className="text-gray-700">
              {footerT.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {footerT.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-sai-baba"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.aboutSaiBaba}
                </Link>
              </li>
              <li>
                <Link
                  href="/temple-info"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.templeInfo}
                </Link>
              </li>
              <li>
                <Link
                  href="/aarti-bhajans"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.aartiBhajans}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.events}
                </Link>
              </li>
              <li>
                <Link
                  href="/donations"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.donations}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  {navT.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {footerT.contact}
            </h4>
            <p className="text-gray-700 mb-4">
              {footerT.visitUs}
              <br />
              <span className="text-divine-saffron font-medium">
                {footerT.omSaiRam}
              </span>
            </p>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                {footerT.followUs}
              </h4>
              <p className="text-gray-600 text-sm mb-3">
                {footerT.socialMedia}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#E4405F] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#FF0000] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-300/50 pt-8 text-center">
          <p className="text-gray-700 flex items-center justify-center gap-2">
            {footerT.madeWith} <Heart className="w-4 h-4 text-divine-saffron" /> {footerT.forDevotees}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            © {new Date().getFullYear()} Sai Baba Vedha Garden. {footerT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

