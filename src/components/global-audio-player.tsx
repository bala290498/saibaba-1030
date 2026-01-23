"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

// MP3 Logo Icon Component
const MP3Icon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" opacity="0.1" />
    <path
      d="M7 7h10v10H7V7z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <text
      x="12"
      y="15"
      textAnchor="middle"
      fontSize="8"
      fontWeight="bold"
      fill="currentColor"
      fontFamily="Arial, sans-serif"
    >
      MP3
    </text>
  </svg>
);

export function GlobalAudioPlayer() {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);

  // Load preferences from localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem("audioVolume");
    const savedMuted = localStorage.getItem("audioMuted");
    const savedPlaying = localStorage.getItem("audioPlaying");

    if (savedVolume) {
      setVolume(parseFloat(savedVolume));
    }
    if (savedMuted === "true") {
      setIsMuted(true);
    }
    if (savedPlaying === "true" && audioRef.current) {
      audioRef.current.play().catch(() => {
        // Auto-play may be blocked by browser
        setIsPlaying(false);
      });
    }
  }, []);

  // Auto-play on mount (with user interaction fallback)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set volume
    audio.volume = isMuted ? 0 : volume;

    // Try to auto-play
    const tryAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        localStorage.setItem("audioPlaying", "true");
      } catch (error) {
        // Auto-play was prevented, user needs to interact first
        setIsPlaying(false);
      }
    };

    // Small delay to ensure audio is loaded
    const timer = setTimeout(() => {
      tryAutoPlay();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
      localStorage.setItem("audioVolume", volume.toString());
    }
  }, [volume, isMuted]);

  // Handle play/pause
  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        localStorage.setItem("audioPlaying", "false");
      } else {
        await audio.play();
        setIsPlaying(true);
        localStorage.setItem("audioPlaying", "true");
      }
    } catch (error) {
      console.error("Error toggling audio:", error);
    }
  };

  // Handle mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    localStorage.setItem("audioMuted", (!isMuted).toString());
  };

  // Handle volume change
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
      localStorage.setItem("audioMuted", "false");
    }
  };

  // Handle audio ended (loop)
  const handleEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isMinimized ? (
        <>
          <button
            onClick={() => setIsMinimized(false)}
            className="w-14 h-14 rounded-full bg-divine-saffron text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
            aria-label="Open audio player"
          >
            <MP3Icon className="w-7 h-7" />
          </button>
          <audio
            ref={audioRef}
            loop
            onEnded={handleEnded}
            preload="auto"
          >
            <source src="/audio/background-music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </>
      ) : (
        <div className="bg-white rounded-t-2xl md:rounded-2xl shadow-2xl border border-amber-200/40 p-4 w-full md:w-80">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-divine-cream flex items-center justify-center">
                <MP3Icon className="w-5 h-5 text-divine-saffron" />
              </div>
              <h3 className="text-sm font-semibold text-gray-800">
                {language === "en" ? "Background Music" : "பின்னணி இசை"}
              </h3>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600 text-sm md:text-base px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              aria-label="Minimize"
            >
              ↓
            </button>
          </div>

          <audio
            ref={audioRef}
            loop
            onEnded={handleEnded}
            preload="auto"
          >
            <source src="/audio/background-music.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <div className="flex items-center gap-3 mb-3">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 rounded-full bg-divine-saffron text-white flex items-center justify-center hover:bg-divine-saffron-dark transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

            <div className="flex-1">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-divine-saffron"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center">
            {language === "en" 
              ? "Om Sai Ram - Divine Blessings" 
              : "ஓம் சாய் ராம் - தெய்வீக ஆசீர்வாதங்கள்"}
          </p>
        </div>
      )}
    </div>
  );
}

