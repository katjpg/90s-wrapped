"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';
import About from '@/app/components/About';
import Contact from '@/app/components/Contact';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function Page() {
  const router = useRouter();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleAboutClick = () => setIsAboutOpen(true);
  const handleContactClick = () => setIsContactOpen(true);

  useEffect(() => {
    const handleKeyPress = async (event: KeyboardEvent) => {
      if (event.code === 'Space' && !isAboutOpen && !isContactOpen) {
        event.preventDefault();
        setIsFading(true);
        // Wait for fade out animation
        await new Promise(resolve => setTimeout(resolve, 500));
        router.push('/pages/wrapped');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [router, isAboutOpen, isContactOpen]);

  return (
    <>
      <div className={`min-h-screen w-full bg-[#000412] flex items-center justify-center ${isFading ? 'fade-out' : ''}`}>
      <div className="relative w-5/6 aspect-video before:absolute before:inset-0 before:animate-[borderGlow_3s_ease-in-out_infinite] before:rounded-lg before:pointer-events-none">        
      <Image
            src="/main-bg.png"
            alt="Green geometric logo"
            fill
            className="object-contain"
            priority
          />
          {/* Icons and Text Container */}
          <div className="absolute inset-0 flex items-center justify-between px-[12%] z-10">
            {/* About Icon + Text Group */}
            <div 
              className="group flex flex-col items-center cursor-pointer"
              onClick={handleAboutClick}
              onKeyDown={(e) => e.key === 'Enter' && handleAboutClick()}
              tabIndex={0}
              role="button"
              aria-label="Open About section"
            >
              <div className="relative w-[4vw] h-[4vw] sm:w-[3.5vw] sm:h-[3.5vw] lg:w-[48px] lg:h-[48px]">
                <Image
                  src="/pixel-folder.svg"
                  alt="Folder icon"
                  fill
                  className="transition-colors duration-200 group-hover:brightness-0 group-hover:invert-[.85] group-hover:sepia-[.35] group-hover:saturate-[2500%] group-hover:hue-rotate-[86deg]"
                />
              </div>
              <span className={`
                ${pixelifySans.className} 
                text-white 
                text-[1.5vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[24px] 
                mt-1
                transition-colors duration-200
                group-hover:text-[#2FFD2F]
              `}>
                ABOUT
              </span>
            </div>
            
            {/* Contact Icon + Text Group */}
            <div 
              className="group flex flex-col items-center cursor-pointer"
              onClick={handleContactClick}
              onKeyDown={(e) => e.key === 'Enter' && handleContactClick()}
              tabIndex={0}
              role="button"
              aria-label="Open Contact section"
            >
              <div className="relative w-[4vw] h-[4vw] sm:w-[3.5vw] sm:h-[3.5vw] lg:w-[48px] lg:h-[48px]">
                <Image
                  src="/pixel-envelope.svg"
                  alt="Envelope icon"
                  fill
                  className="transition-colors duration-200 group-hover:brightness-0 group-hover:invert-[.85] group-hover:sepia-[.35] group-hover:saturate-[2500%] group-hover:hue-rotate-[86deg]"
                />
              </div>
              <span className={`
                ${pixelifySans.className} 
                text-white 
                text-[1.5vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[24px] 
                mt-1
                transition-colors duration-200
                group-hover:text-[#2FFD2F]
              `}>
                CONTACT
              </span>
            </div>
          </div>

          {/* Title Text */}
          <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`${pixelifySans.className} neon-text text-[4vw] sm:text-[4vw] md:text-[4vw] lg:text-[48px] mt-[1.5%] tracking-wider`}>
            SPOTIFY WRAPPED
          </h1>
          </div>
          
          {/* Subtitle Text */}
          <div className="absolute inset-x-0 bottom-[30%] flex justify-center">
            <h2 className={`${pixelifySans.className} text-white text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]`}>
              PRESS THE <span className="font-bold text-[#2FFD2F] blink-animation">( SPACEBAR )</span> TO REVEAL
            </h2>
          </div>
        </div>
      </div>

      {/* Popups */}
      <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}