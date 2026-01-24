"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export function GlobalAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play on first page load
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check if this is the first visit
    const hasVisited = localStorage.getItem("audioHasVisited");
    const isFirstVisit = !hasVisited;

    const tryAutoPlay = async () => {
      try {
        // Set volume to a reasonable level
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
        if (isFirstVisit) {
          localStorage.setItem("audioHasVisited", "true");
        }
      } catch (error) {
        // Auto-play was prevented by browser policy
        // This is normal - browsers require user interaction for audio
        setIsPlaying(false);
      }
    };

    // Try to autoplay on first visit
    if (isFirstVisit) {
      // Wait for audio to be ready
      const handleCanPlay = () => {
        tryAutoPlay();
      };

      if (audio.readyState >= 2) {
        // Audio is already loaded
        tryAutoPlay();
      } else {
        // Wait for audio to be ready
        audio.addEventListener("canplaythrough", handleCanPlay, { once: true });
        audio.addEventListener("loadeddata", handleCanPlay, { once: true });
      }
    }

    // Track playing state from user interactions
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("canplaythrough", tryAutoPlay);
      audio.removeEventListener("loadeddata", tryAutoPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={togglePlayPause}
        className="w-14 h-14 rounded-full bg-divine-saffron text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        autoPlay
        preload="auto"
        className="hidden"
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

