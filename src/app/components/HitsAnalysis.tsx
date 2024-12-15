"use client";

import { Pixelify_Sans } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis } from 'recharts';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

// Simulated data for audio features (0-1 scale)
const audioFeatures = [
  { feature: 'Danceability', value: 0.85 },
  { feature: 'Energy', value: 0.92 },
  { feature: 'Valence', value: 0.78 },
  { feature: 'Acousticness', value: 0.25 },
  { feature: 'Instrumentalness', value: 0.12 },
  { feature: 'Speechiness', value: 0.35 },
];

// Convert data to percentage for better visualization
const chartData = audioFeatures.map(item => ({
  ...item,
  value: item.value * 100
}));

const HitsAnalysis = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`w-full h-full flex flex-col items-center justify-between py-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      {/* Top Text */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2.5vw] sm:text-[2.5vw] md:text-[2.5vw] lg:text-[32px]
        text-white mb-4
      `}>
        TOP 10 HITS ANALYSIS
      </h2>

      {/* Chart Container with maxHeight and aspect ratio control */}
      <div className="w-[100%] h-[70vh] max-h-[800px] mx-auto">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%">
            <PolarGrid 
              stroke="#2FFD2F" 
              strokeOpacity={0.2}
            />
            <PolarAngleAxis 
              dataKey="feature" 
              data={chartData}
              tick={{ 
                fill: '#2FFD2F',
                fontSize: 'clamp(12px, 1.5vw, 20px)', // Responsive font size
                fontFamily: pixelifySans.style.fontFamily,
                dy: 10
              }}
            />
            <Radar
              name="Audio Features"
              dataKey="value"
              data={chartData}
              fill="#2FFD2F"
              fillOpacity={0.3}
              stroke="#2FFD2F"
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom Text */}
      <h2 className={`
        ${pixelifySans.className}
        text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]
        text-center mt-4
      `}>
        PRESS THE <span className="font-bold text-[#2FFD2F] blink-animation">( SPACEBAR )</span> TO CONTINUE
      </h2>
    </div>
  );
};

export default HitsAnalysis;