"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Pixelify_Sans } from 'next/font/google';
import { useEffect, useState } from 'react';
import UserStats from '@/app/components/UserStats';
import ArtistQuiz from '@/app/components/ArtistQuiz';
import TopArtists from '@/app/components/TopArtists';
import TopAlbums from '@/app/components/TopAlbums';
import TopHits from '@/app/components/TopHits';
import HitsAnalysis from '@/app/components/HitsAnalysis';

const pixelifySans = Pixelify_Sans({ 
  subsets: ['latin'],
  weight: ['400', '700']
});

const ANIMATION_DURATION = 3100;
const TRANSITION_DELAY = 500;
const FADE_DURATION = 1000;
const USER_STATS_DURATION = 5000;

export default function Wrapped() {
  const router = useRouter();
  // States for main visibility and text
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('WELCOME TO SPOTIFY WRAPPED!');
  const [isAnimating, setIsAnimating] = useState(true);
  const [showText, setShowText] = useState(true);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [showReturnPrompt, setShowReturnPrompt] = useState(false);

  // Component visibility states
  const [showUserStats, setShowUserStats] = useState(false);
  const [showArtistQuiz, setShowArtistQuiz] = useState(false);
  const [showTopArtists, setShowTopArtists] = useState(false);
  const [showTopAlbums, setShowTopAlbums] = useState(false);
  const [showTopHits, setShowTopHits] = useState(false);
  const [showHitsAnalysis, setShowHitsAnalysis] = useState(false);

  // Fading states
  const [isUserStatsFading, setIsUserStatsFading] = useState(false);
  const [isArtistQuizFading, setIsArtistQuizFading] = useState(false);
  const [isTopArtistsFading, setIsTopArtistsFading] = useState(false);
  const [isTopAlbumsFading, setIsTopAlbumsFading] = useState(false);
  const [isTopHitsFading, setIsTopHitsFading] = useState(false);
  const [isHitsAnalysisFading, setIsHitsAnalysisFading] = useState(false);
  const [isFinalFading, setIsFinalFading] = useState(false);

  const showMessage = async (message: string) => {
    if (showTopHits || showHitsAnalysis || showFinalMessage) return;
  
    setCurrentText(message);
    setShowText(true);
    setIsAnimating(true);
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));
    if (!showTopHits && !showHitsAnalysis && !showFinalMessage) {
      setShowText(false);
      await new Promise(resolve => setTimeout(resolve, TRANSITION_DELAY));
    }
  };

  const fadeOutComponent = async (
    setFading: (value: boolean) => void,
    setShow: (value: boolean) => void
  ) => {
    setFading(true);
    await new Promise(resolve => setTimeout(resolve, FADE_DURATION));
    setShow(false);
    setFading(false);
  };

  const handleFinalReturn = async () => {
    setIsFinalFading(true);
    await new Promise(resolve => setTimeout(resolve, FADE_DURATION));
    router.push('/');
  };

  const sequence = async () => {
    // Initial sequence
    await showMessage('WELCOME TO SPOTIFY WRAPPED!');
    await showMessage('THIS YEAR WAS FULL OF\nMEMORABLE MUSIC MOMENTS');
    
    // UserStats sequence
    setShowUserStats(true);
    await new Promise(resolve => setTimeout(resolve, USER_STATS_DURATION));
    await fadeOutComponent(setIsUserStatsFading, setShowUserStats);
    
    // Pre-quiz messages
    await showMessage('BUT ONE ARTIST TOOK THE SPOTLIGHT');
    await showMessage('...WITH OVER 26.6 BILLION STREAMS!');
    await showMessage('CAN YOU GUESS WHO CLAIMED\nTHE CROWN THIS YEAR?');
    
    // Show Artist Quiz
    setShowArtistQuiz(true);
  };

  const handleQuizComplete = async () => {
    await fadeOutComponent(setIsArtistQuizFading, setShowArtistQuiz);
    setShowTopArtists(true);
  };

  const handleTopArtistsComplete = async () => {
    await fadeOutComponent(setIsTopArtistsFading, setShowTopArtists);
    
    // Album sequence messages
    await showMessage('THESE TOP ARTISTS DOMINATED CHARTS');
    await showMessage('...BUT WHICH ALBUMS');
    await showMessage('HAD EVERYONE HITTING REPEAT?');
    
    setShowTopAlbums(true);
  };

  const handleTopAlbumsComplete = async () => {
    if (showHitsAnalysis) return;
  
    await fadeOutComponent(setIsTopAlbumsFading, setShowTopAlbums);
    
    if (!showTopHits) {
      await showMessage('NOW, LET\'S DIVE SONGS THAT DEFINED SPOTIFY THIS YEAR');
      await showMessage('DID ANY OF YOUR FAVORITES MAKE THE LIST?');
      setShowTopHits(true);
    }
  };

  const handleTopHitsComplete = async () => {
    if (showHitsAnalysis) return;
    
    await fadeOutComponent(setIsTopHitsFading, setShowTopHits);
    setShowHitsAnalysis(true);
  };

  const handleHitsAnalysisComplete = async () => {
    await fadeOutComponent(setIsHitsAnalysisFading, setShowHitsAnalysis);
    
    // Reset all component states to ensure they don't reappear
    setShowUserStats(false);
    setShowArtistQuiz(false);
    setShowTopArtists(false);
    setShowTopAlbums(false);
    setShowTopHits(false);
    
    // Show final message with typing animation
    setShowFinalMessage(true);
    setCurrentText('AND THAT\'S A WRAP, STAY TUNED FOR NEXT TIME!');
    
    // Wait for typing animation to complete before showing return prompt
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));
    setShowReturnPrompt(true);
  };

  // Initial sequence trigger
  useEffect(() => {
    setIsVisible(true);
    sequence();
  }, []);

  // Component-specific keyboard handlers
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space') return;
      event.preventDefault();

      if (showTopArtists && !isTopArtistsFading) {
        handleTopArtistsComplete();
      } else if (showTopHits && !isTopHitsFading) {
        handleTopHitsComplete();
      } else if (showHitsAnalysis && !isHitsAnalysisFading) {
        handleHitsAnalysisComplete();
      } else if (showFinalMessage && showReturnPrompt && !isFinalFading) {
        handleFinalReturn();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    showTopArtists, isTopArtistsFading,
    showTopHits, isTopHitsFading,
    showHitsAnalysis, isHitsAnalysisFading,
    showFinalMessage, showReturnPrompt, isFinalFading
  ]);

  // Class names for component containers
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

  const hitsAnalysisClassNames = `absolute inset-0 flex items-center justify-center 
    ${showHitsAnalysis ? 'block' : 'hidden'}
    ${isHitsAnalysisFading ? 'fade-out' : 'fade-in'}`;

  return (
    <div className={`min-h-screen w-full bg-[#000412] flex items-center justify-center ${isVisible ? 'fade-in' : 'opacity-0'} ${isFinalFading ? 'fade-out' : ''}`}>
      <div className="relative w-5/6 aspect-video">
        <Image
          src="/wrapped-bg.png"
          alt="Wrapped background"
          fill
          className="object-contain"
          priority
        />
        
        {/* Centered Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {(showText || showFinalMessage) && (
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
                onAnimationEnd={() => setIsAnimating(false)}
              >
                {currentText}
              </h1>
            </div>
          )}

          {/* Return Prompt */}
          {showReturnPrompt && (
            <h2 className={`
              ${pixelifySans.className}
              text-[2vw] sm:text-[2vw] md:text-[2vw] lg:text-[24px]
              text-center mt-8
              fade-in
            `}>
              PRESS THE <span className="font-bold text-[#2FFD2F] blink-animation">( SPACEBAR )</span> TO RETURN
            </h2>
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

        <div className={hitsAnalysisClassNames}>
          <HitsAnalysis />
        </div>
      </div>
    </div>
  );
}