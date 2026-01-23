import { GRADIENTS } from "@/lib/constants";
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  return (
    <div 
      className="min-h-screen py-16"
      style={{
        background: GRADIENTS.light
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <ImageIcon className="w-16 h-16 text-divine-saffron mx-auto mb-4" />
          <h1 
            className="text-5xl font-bold mb-4 text-gray-800"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 900,
            }}
          >
            Gallery
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Moments from our temple and celebrations
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <p className="text-gray-700 text-lg mb-4">
              Gallery images will be displayed here. Please add images to the gallery folder.
            </p>
            <p className="text-divine-saffron font-semibold">Om Sai Ram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

