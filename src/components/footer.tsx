import Link from "next/link";
import { Heart } from "lucide-react";
import { GRADIENTS } from "@/lib/constants";

export function Footer() {
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
              A sacred space dedicated to Sai Baba, spreading love, peace, and
              divine blessings to all devotees.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-sai-baba"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  About Sai Baba
                </Link>
              </li>
              <li>
                <Link
                  href="/temple-info"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Temple Info
                </Link>
              </li>
              <li>
                <Link
                  href="/aarti-bhajans"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Aarti & Bhajans
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/donations"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Donations
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <p className="text-white/90">
              Visit us for prayers and blessings
              <br />
              <span className="text-white font-medium">
                Om Sai Ram
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-amber-200/50 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-white" /> for
            devotees
          </p>
          <p className="text-white/70 text-sm mt-2">
            © {new Date().getFullYear()} Sai Baba Vedha Garden. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

