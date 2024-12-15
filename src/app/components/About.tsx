"use client";

import React from 'react';
import { Pixelify_Sans } from 'next/font/google';
import Popup from './Popup';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface AboutProps {
  isOpen: boolean;
  onClose: () => void;
}

const About: React.FC<AboutProps> = ({ isOpen, onClose }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center h-full">
        <h1 className={`${pixelifySans.className} text-white text-[4vw] sm:text-[4vw] md:text-[4vw] lg:text-[48px]`}>
          About Content Here
        </h1>
      </div>
    </Popup>
  );
};

export default About;