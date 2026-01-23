import Link from "next/link";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-divine-cream to-white border-t border-divine-cream mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-divine-saffron mb-4">
              Sai Baba Vedha Garden
            </h3>
            <p className="text-gray-700">
              A sacred space dedicated to Sai Baba, spreading love, peace, and
              divine blessings to all devotees.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/donation"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  Donation
                </Link>
              </li>
              <li>
                <Link
                  href="/poja"
                  className="text-gray-700 hover:text-divine-saffron transition-colors"
                >
                  Pooja
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h4>
            <p className="text-gray-700">
              Visit us for prayers and blessings
              <br />
              <span className="text-divine-saffron font-medium">
                Om Sai Ram
              </span>
            </p>
          </div>
        </div>
        <div className="border-t border-divine-cream pt-8 text-center">
          <p className="text-gray-600 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-divine-saffron" /> for
            devotees
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {new Date().getFullYear()} Sai Baba Vedha Garden. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

