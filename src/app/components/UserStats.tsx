"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useEffect, useState } from 'react';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const UserStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {/* Title */}
      <h2 className={`
        ${pixelifySans.className}
        text-white
        text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
        mb-8
      `}>
        SPOTIFY ACHIEVED
      </h2>

      {/* Images Container */}
      <div className="relative w-full flex justify-center items-center -space-x-16 mb-8">
        {/* User Ranking SVG */}
        <div className="relative w-[40%] aspect-[3/2]">
          <Image
            src="/user-ranking.svg"
            alt="User ranking visualization"
            fill
            className="object-contain"
          />
        </div>

        {/* Map SVG */}
        <div className="relative w-[50%] aspect-[2/1]">
          <Image
            src="/map.svg"
            alt="World map visualization"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Text */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
        text-center
      `}>
        <span className="text-white">OVER </span>
        <span className="font-bold text-[#2FFD2F]">640 MILLION </span>
        <span className="text-white">ACTIVE USERS!</span>
      </h2>
    </div>
  );
};

export default UserStats;