"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { GRADIENTS } from "@/lib/constants";

// Grouped navigation items for better organization
const navGroups = [
  {
    id: "main",
    items: [
      { href: "/", label: "Home" },
      { href: "/about-sai-baba", label: "About Sai Baba" },
      { href: "/temple-info", label: "Temple Info" },
    ],
  },
  {
    id: "spiritual",
    items: [
      { href: "/aarti-bhajans", label: "Aarti & Bhajans" },
      { href: "/devotion", label: "Devotion" },
    ],
  },
  {
    id: "community",
    items: [
      { href: "/events", label: "Events" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    id: "support",
    items: [
      { href: "/donations", label: "Donations" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

// Flattened for mobile menu
const allNavItems = navGroups.flatMap((group) => group.items);

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const pathname = usePathname();

  const languages = [
    { code: "en", label: "English" },
    { code: "ta", label: "தமிழ்" },
  ];

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <nav 
        className="fixed top-0 left-0 right-0 z-[70] shadow-md"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)"
        }}
      >
      {/* Top Bar - Language Selector & Logo */}
      <div 
        className="border-b border-amber-300/50"
        style={{
          background: GRADIENTS.light,
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo & Text - Left */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
            >
              <div className="relative w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center flex-shrink-0">
                <Image
                  src="/home/logo.png"
                  alt="Om Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                  priority
                />
              </div>
              <span 
                className="text-lg lg:text-2xl font-serif font-extrabold text-divine-saffron leading-tight"
                style={{
                  fontFamily: "var(--font-playfair)",
                }}
              >
                Sai Baba Vedha Garden
              </span>
            </Link>

            {/* Language Selector - Right */}
            <div className="relative">
              <button
                onClick={() => setLanguageOpen(!languageOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-divine-saffron hover:bg-white/30 transition-all duration-200"
                style={{ fontWeight: 500 }}
              >
                <Globe className="w-4 h-4" />
                <span>{selectedLanguage}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  languageOpen && "rotate-180"
                )} />
              </button>
              
              {/* Language Dropdown */}
              {languageOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-amber-200/40 overflow-hidden min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLanguage(lang.label);
                        setLanguageOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                        "hover:bg-divine-cream hover:text-divine-saffron",
                        selectedLanguage === lang.label
                          ? "bg-divine-cream text-divine-saffron"
                          : "text-gray-700"
                      )}
                      style={{ fontWeight: 500 }}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Page Links */}
      <div 
        className="border-b border-amber-400/40"
        style={{
          background: GRADIENTS.dark,
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center flex-1 justify-center">
              {allNavItems.map((item, index) => (
                <div key={item.href} className="flex items-center">
                  {index > 0 && (
                    <div className="w-px h-4 bg-white/30 mx-3" />
                  )}
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg whitespace-nowrap",
                      "hover:bg-white/20 hover:text-white",
                      pathname === item.href
                        ? "text-white bg-white/15"
                        : "text-white/90"
                    )}
                    style={{ fontWeight: 500 }}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button - Right Side */}
            <div className="lg:hidden flex items-center justify-end flex-1">
              <button
                className="p-2.5 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X size={22} className="transition-transform duration-200" />
                ) : (
                  <Menu size={22} className="transition-transform duration-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Slide-in Menu */}
          <div
            className={cn(
              "fixed top-0 right-0 h-screen w-80 max-w-[85vw] z-[80] lg:hidden transform transition-transform duration-300 ease-in-out",
              "shadow-2xl",
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            )}
            style={{
              background: GRADIENTS.dark,
            }}
          >
            <div className="flex flex-col h-screen">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/home/logo.png"
                      alt="Om Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span 
                    className="text-lg font-serif font-extrabold text-white"
                    style={{
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    Menu
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
                <nav className="space-y-1 px-2">
                  {allNavItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3.5 text-base font-medium rounded-lg transition-all duration-200 mx-2",
                        "hover:bg-white/20 hover:text-white hover:pl-6",
                        pathname === item.href
                          ? "text-white bg-white/15 border-l-4 border-white"
                          : "text-white/90"
                      )}
                      style={{ fontWeight: 500 }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-4 border-t border-white/20">
                <div className="text-center">
                  <p className="text-white/80 text-sm">Om Sai Ram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Click outside to close language dropdown */}
      {languageOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLanguageOpen(false)}
        />
      )}
    </nav>
    </>
  );
}

