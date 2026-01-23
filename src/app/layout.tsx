import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";
import { GlobalAudioPlayer } from "@/components/global-audio-player";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"], 
  weight: ["800", "900"],
  variable: "--font-playfair" 
});

export const metadata: Metadata = {
  title: "Sai Baba Vedha Garden - Divine Blessings",
  description: "Experience the divine presence of Sai Baba at Vedha Garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <LanguageProvider>
          <Navigation />
          <main className="min-h-screen pt-[120px]">{children}</main>
          <Footer />
          <GlobalAudioPlayer />
        </LanguageProvider>
      </body>
    </html>
  );
}

