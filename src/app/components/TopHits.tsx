"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const TopHits = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-between py-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {/* Top Text */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
        text-white mb-8
      `}>
        TOP 10 HITS GLOBALLY
      </h2>

      {/* Top Songs Image */}
      <div className="relative w-[80%] h-[60%]">
        <Image
          src="/top-songs.png"
          alt="Top 10 songs list"
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
  );
};

export default TopHits;