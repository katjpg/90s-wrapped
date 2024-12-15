"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface Album {
  id: number;
  image: string;
  alt: string;
  revealed: boolean;
}

const TopAlbums = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([
    { id: 1, image: '/billie-album.png', alt: 'Billie album cover', revealed: false },
    { id: 2, image: '/taylor-album.png', alt: 'Taylor album cover', revealed: false },
    { id: 3, image: '/sabrina-album.png', alt: 'Sabrina album cover', revealed: false }
  ]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (albums.every(album => album.revealed)) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000); 
  
      return () => clearTimeout(timer);
    }
  }, [albums, onComplete]);

  const handleAlbumClick = (albumId: number) => {
    if (!albums.find(album => album.id === albumId)?.revealed) {
      setAlbums(prevAlbums =>
        prevAlbums.map(album =>
          album.id === albumId ? { ...album, revealed: true } : album
        )
      );
    }
  };

  return (
    <div className={`w-full h-full flex flex-col items-center justify-between py-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {/* Title */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[32px] mb-8
        text-white
      `}>
        TOP 3 ALBUMS GLOBALLY
      </h2>

      {/* Albums Container */}
      <div className="flex justify-center items-center gap-8 relative">
        {/* Crown Image */}
        <div className="absolute -top-[6vw] left-1/2 -translate-x-1/2 w-[4vw] h-[4vw] max-w-[60px] max-h-[80px]">
          <Image
            src="/crown.svg"
            alt="Crown icon"
            fill
            className="object-contain"
            priority
          />
        </div>

        {albums.map((album) => (
          <div
            key={album.id}
            onClick={() => handleAlbumClick(album.id)}
            className="relative cursor-pointer"
            role="button"
            tabIndex={0}
            aria-label={`Reveal ${album.alt}`}
            onKeyDown={(e) => e.key === 'Enter' && handleAlbumClick(album.id)}
          >
            <div className="relative w-[20vw] h-[20vw] max-w-[300px] max-h-[300px]">
              {/* Mystery Icon */}
              <div className={`absolute inset-0 transform transition-all duration-[1500ms] ease-in-out
                ${album.revealed ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                <Image
                  src="/mystery.svg"
                  alt="Mystery icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Album Cover */}
              <div className={`absolute inset-0 transform transition-all duration-[1500ms] ease-in-out
                ${album.revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <Image
                  src={album.image}
                  alt={album.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px] 
      `}>
        <span className="text-[#2FFD2F]">CLICK</span>
        <span className="text-white"> TO REVEAL</span>
      </h2>
    </div>
  );
};

export default TopAlbums;