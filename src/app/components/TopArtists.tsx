"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface TopArtistsProps {
  forceReset?: boolean;
}

const TopArtists: React.FC<TopArtistsProps> = ({ forceReset = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTaylorSwift, setShowTaylorSwift] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);
  const [isMysteryFading, setIsMysteryFading] = useState(false);
  const [isWinnerFading, setIsWinnerFading] = useState(false);
  const [showTopTen, setShowTopTen] = useState(false);

  // Reset animation states when forceReset changes
  useEffect(() => {
    if (forceReset) {
      setIsVisible(false);
      setShowTaylorSwift(false);
      setShowFinalText(false);
      setIsMysteryFading(false);
      setIsWinnerFading(false);
      setShowTopTen(false);
    }
  }, [forceReset]);

  useEffect(() => {
    let mounted = true;
    const timeouts: NodeJS.Timeout[] = [];

    const addTimeout = (callback: () => void, delay: number) => {
      const timeout = setTimeout(() => {
        if (mounted) {
          callback();
        }
      }, delay);
      timeouts.push(timeout);
      return timeout;
    };

    // Reset all states before starting animation
    setShowTaylorSwift(false);
    setShowFinalText(false);
    setIsMysteryFading(false);
    setIsWinnerFading(false);
    setShowTopTen(false);

    // Start animation sequence
    addTimeout(() => setIsVisible(true), 100);
    addTimeout(() => setIsMysteryFading(true), 2000);
    addTimeout(() => setShowTaylorSwift(true), 3500);
    addTimeout(() => setShowFinalText(true), 4300);
    addTimeout(() => setIsWinnerFading(true), 7000);
    addTimeout(() => setShowTopTen(true), 8000);

    return () => {
      mounted = false;
      timeouts.forEach(clearTimeout);
    };
  }, [forceReset]); // Add forceReset as dependency

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {!showTopTen ? (
        // Winner Reveal Container
        <div className={`flex flex-col items-center transform transition-all duration-[1500ms] ease-in-out ${isWinnerFading ? 'opacity-0 scale-105' : ''}`}>
          {/* Images Container */}
          <div className="relative flex flex-col items-center mb-2">
            {/* Crown Image */}
            <div className="relative w-[8vw] h-[8vw] max-w-[60px] max-h-[100px] min-w-[20px] min-h-[20px] -mb-[2vw] z-10">
              <Image
                src="/crown.svg"
                alt="Crown icon"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Mystery/Taylor Image Container */}
            <div className="relative w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] min-w-[150px] min-h-[150px]">
              {/* Mystery Icon */}
              <div className={`absolute inset-0 transform transition-all duration-[1500ms] ease-in-out
                ${isMysteryFading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                <Image
                  src="/mystery.svg"
                  alt="Mystery icon"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>

              {/* Taylor Swift Image */}
              <div className={`absolute inset-0 transform transition-all duration-[1500ms] ease-in-out
                ${showTaylorSwift ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Image
                  src="/taylor-swift.png"
                  alt="Taylor Swift"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Winner Text */}
          <h2 className={`
            ${pixelifySans.className}
            text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
            transform transition-all duration-[1500ms] ease-in-out
            ${showFinalText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}>
            {!showFinalText ? (
              <span className="text-white font-bold">WINNER</span>
            ) : (
              <>
                <span className="text-white">( </span>
                <span className="font-bold text-[#2FFD2F]">TAYLOR SWIFT</span>
                <span className="text-white"> TAKES THE CROWN! )</span>
              </>
            )}
          </h2>
        </div>
      ) : (
        // Top Ten List Container
        <div className="w-full flex flex-col items-center justify-between h-full py-12 fade-in">
          {/* Top Text */}
          <h2 className={`
            ${pixelifySans.className}
            text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
            text-white mb-8
          `}>
            TOP 10 ARTISTS GLOBALLY
          </h2>

          {/* Top Artists Image */}
          <div className="relative w-[80%] h-[60%]">
            <Image
              src="/top-artists.png"
              alt="Top 10 artists list"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Text */}
          <h2 className={`
            ${pixelifySans.className}
            text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]
            text-center mt-8
          `}>
            PRESS THE <span className="font-bold text-[#2FFD2F] blink-animation">( SPACEBAR )</span> TO CONTINUE
          </h2>
        </div>
      )}
    </div>
  );
};

export default TopArtists;