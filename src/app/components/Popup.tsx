"use client";

import React, { useEffect, type ReactNode } from 'react';
import { Pixelify_Sans } from 'next/font/google';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface PopupProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-5/6 aspect-video relative">
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-[#0F2331] bg-opacity-65 backdrop-blur-[5px] rounded-lg"
          aria-hidden="true"
        />
        
        {/* Content */}
        <div className="relative h-full w-full">
          {children}
          
          {/* Exit Text */}
          <div className="absolute bottom-[8%] left-0 right-0 flex justify-center">
            <p className={`${pixelifySans.className} text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]`}>
              <span className="text-white">PRESS THE </span>
              <span className="text-[#2FFD2F]">ESC</span>
              <span className="text-white"> KEY TO EXIT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;