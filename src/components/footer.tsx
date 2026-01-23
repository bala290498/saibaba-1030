"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
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
      className="border-t border-amber-200/50"
      style={{
        background: GRADIENTS.dark
      }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Sai Baba Vedha Garden
            </h3>
            <p className="text-white/90">
              {footerT.description}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {footerT.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-sai-baba"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.aboutSaiBaba}
                </Link>
              </li>
              <li>
                <Link
                  href="/temple-info"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.templeInfo}
                </Link>
              </li>
              <li>
                <Link
                  href="/aarti-bhajans"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.aartiBhajans}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.events}
                </Link>
              </li>
              <li>
                <Link
                  href="/donations"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.donations}
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.gallery}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  {navT.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {footerT.contact}
            </h4>
            <p className="text-white/90">
              {footerT.visitUs}
              <br />
              <span className="text-white font-medium">
                {footerT.omSaiRam}
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-amber-200/50 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            {footerT.madeWith} <Heart className="w-4 h-4 text-white" /> {footerT.forDevotees}
          </p>
          <p className="text-white/70 text-sm mt-2">
            © {new Date().getFullYear()} Sai Baba Vedha Garden. {footerT.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

