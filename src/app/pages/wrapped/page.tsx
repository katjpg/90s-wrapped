"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useCallback, useEffect, useState } from 'react';
import UserStats from '@/app/components/UserStats';
import ArtistQuiz from '@/app/components/ArtistQuiz';
import TopArtists from '@/app/components/TopArtists';
import TopAlbums from '@/app/components/TopAlbums';
import TopHits from '@/app/components/TopHits';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const ANIMATION_DURATION = 3100;
const TRANSITION_DELAY = 500;
const FADE_DURATION = 1000;
const USER_STATS_DURATION = 5000;

export default function Wrapped() {
  // Main visibility and text states
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('WELCOME TO SPOTIFY WRAPPED!');
  const [showText, setShowText] = useState(true);

  // Component visibility states
  const [showUserStats, setShowUserStats] = useState(false);
  const [showArtistQuiz, setShowArtistQuiz] = useState(false);
  const [showTopArtists, setShowTopArtists] = useState(false);
  const [showTopAlbums, setShowTopAlbums] = useState(false);
  const [showTopHits, setShowTopHits] = useState(false);

  // Fading states
  const [isUserStatsFading, setIsUserStatsFading] = useState(false);
  const [isArtistQuizFading, setIsArtistQuizFading] = useState(false);
  const [isTopArtistsFading, setIsTopArtistsFading] = useState(false);
  const [isTopAlbumsFading, setIsTopAlbumsFading] = useState(false);
  const [isTopHitsFading, setIsTopHitsFading] = useState(false);

  const showMessage = useCallback(async (message: string) => {
    if (showTopHits) return;
  
    setCurrentText(message);
    setShowText(true);
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));
    
    if (!showTopHits) {
      setShowText(false);
      await new Promise(resolve => setTimeout(resolve, TRANSITION_DELAY));
    }
  }, [showTopHits]);

  const fadeOutComponent = useCallback(async (
    setFading: (value: boolean) => void,
    setShow: (value: boolean) => void
  ) => {
    setFading(true);
    await new Promise(resolve => setTimeout(resolve, FADE_DURATION));
    setShow(false);
    setFading(false);
  }, []);

  const handleQuizComplete = useCallback(async () => {
    await fadeOutComponent(setIsArtistQuizFading, setShowArtistQuiz);
    setShowTopArtists(true);
  }, [fadeOutComponent]);

  const handleTopArtistsComplete = useCallback(async () => {
    await fadeOutComponent(setIsTopArtistsFading, setShowTopArtists);
    
    await showMessage('THESE TOP ARTISTS DOMINATED CHARTS');
    await showMessage('...BUT WHICH ALBUMS');
    await showMessage('HAD EVERYONE HITTING REPEAT?');
    
    setShowTopAlbums(true);
  }, [fadeOutComponent, showMessage]);

  const handleTopAlbumsComplete = useCallback(async () => {
    if (showTopHits) return;
  
    await fadeOutComponent(setIsTopAlbumsFading, setShowTopAlbums);
    
    if (!showTopHits) {
      await showMessage('NOW, LET\'S DIVE INTO SONGS THAT DEFINED SPOTIFY THIS YEAR');
      await showMessage('DID ANY OF YOUR FAVORITES MAKE THE LIST?');
      setShowTopHits(true);
    }
  }, [fadeOutComponent, showMessage, showTopHits]);

  const sequence = useCallback(async () => {
    await showMessage('WELCOME TO SPOTIFY WRAPPED!');
    await showMessage('THIS YEAR WAS FULL OF\nMEMORABLE MUSIC MOMENTS');
    
    setShowUserStats(true);
    await new Promise(resolve => setTimeout(resolve, USER_STATS_DURATION));
    await fadeOutComponent(setIsUserStatsFading, setShowUserStats);
    
    await showMessage('BUT ONE ARTIST TOOK THE SPOTLIGHT');
    await showMessage('...WITH OVER 26.6 BILLION STREAMS!');
    await showMessage('CAN YOU GUESS WHO CLAIMED\nTHE CROWN THIS YEAR?');
    
    setShowArtistQuiz(true);
  }, [showMessage, fadeOutComponent]);

  // Initial sequence trigger
  useEffect(() => {
    setIsVisible(true);
    void sequence();
  }, [sequence]);

  // Global spacebar handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault();
        if (showTopArtists && !isTopArtistsFading) {
          void handleTopArtistsComplete();
        } else if (showTopHits && !isTopHitsFading) {
          setIsTopHitsFading(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    showTopArtists,
    isTopArtistsFading,
    showTopHits,
    isTopHitsFading,
    handleTopArtistsComplete
  ]);

  // Dynamic class names for components
  const userStatsClassNames = `absolute inset-0 flex items-center justify-center 
    ${showUserStats ? 'block' : 'hidden'}
    ${isUserStatsFading ? 'fade-out' : ''}`;

  const artistQuizClassNames = `absolute inset-0 flex items-center justify-center 
    ${showArtistQuiz ? 'block' : 'hidden'}
    ${isArtistQuizFading ? 'fade-out' : 'fade-in'}`;

  const topArtistsClassNames = `absolute inset-0 flex items-center justify-center 
    ${showTopArtists ? 'block' : 'hidden'}
    ${isTopArtistsFading ? 'fade-out' : 'fade-in'}`;

  const topAlbumsClassNames = `absolute inset-0 flex items-center justify-center 
    ${showTopAlbums ? 'block' : 'hidden'}
    ${isTopAlbumsFading ? 'fade-out' : 'fade-in'}`;

  const topHitsClassNames = `absolute inset-0 flex items-center justify-center 
    ${showTopHits ? 'block' : 'hidden'}
    ${isTopHitsFading ? 'fade-out' : 'fade-in'}`;

  return (
    <div className={`min-h-screen w-full bg-[#000412] flex items-center justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}>
      <div className="relative w-5/6 aspect-video">
        <Image
          src="/wrapped-bg.png"
          alt="Wrapped background"
          fill
          className="object-contain"
          priority
        />
        
        {/* Centered Content Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {showText && (
            <div className="text-center">
              <h1 
                className={`
                  ${pixelifySans.className} 
                  text-white 
                  text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]
                  dialogue-text
                  whitespace-pre-line
                  inline-block
                `}
              >
                {currentText}
              </h1>
            </div>
          )}
        </div>

        {/* Component Containers */}
        <div className={userStatsClassNames}>
          <UserStats />
        </div>

        <div className={artistQuizClassNames}>
          <ArtistQuiz onComplete={handleQuizComplete} />
        </div>

        <div className={topArtistsClassNames}>
          <TopArtists />
        </div>

        <div className={topAlbumsClassNames}>
          <TopAlbums onComplete={handleTopAlbumsComplete} />
        </div>

        <div className={topHitsClassNames}>
          <TopHits />
        </div>
      </div>
    </div>
  );
}