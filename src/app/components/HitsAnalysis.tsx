"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

interface HitsAnalysisProps {
  onComplete: () => void;
}

const HitsAnalysis: React.FC<HitsAnalysisProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onComplete]);

  const data = [
    { name: 'Pop', value: 45 },
    { name: 'Hip-Hop', value: 30 },
    { name: 'Rock', value: 15 },
    { name: 'Other', value: 10 }
  ];

  const COLORS = ['#2FFD2F', '#066A73', '#1C5860', '#0F2331'];

  return (
    <div className={`w-full h-full flex flex-col items-center justify-between py-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {/* Title */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
        text-white mb-8
      `}>
        YOUR MUSICAL TASTE BREAKDOWN
      </h2>

      {/* Chart Container */}
      <div className="w-full h-[50vh] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className={`
              ${pixelifySans.className}
              text-[1.5vw] sm:text-[1.5vw] md:text-[1.5vw] lg:text-[20px]
              text-white
            `}>
              {entry.name} ({entry.value}%)
            </span>
          </div>
        ))}
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

export default HitsAnalysis;