"use client";

import Image from 'next/image';
import { Pixelify_Sans } from 'next/font/google';
import { useCallback, useEffect, useState, useRef } from 'react';
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

// Constants
const ANIMATION_DURATION = 3100;
const TRANSITION_DELAY = 500;
const FADE_DURATION = 1000;
const USER_STATS_DURATION = 5000;

// Updated sequence states type
type SequenceState = 
  | 'INITIAL'
  | 'USER_STATS'
  | 'ARTIST_QUIZ'
  | 'TOP_ARTISTS'
  | 'TOP_ALBUMS'
  | 'TOP_HITS'
  | 'HITS_ANALYSIS'
  | 'COMPLETE';

export default function Wrapped() {
  // Main state
  const [sequenceState, setSequenceState] = useState<SequenceState>('INITIAL');
  const [isVisible, setIsVisible] = useState(false);
  
  // Text state
  const [messageState, setMessageState] = useState({
    text: 'WELCOME TO SPOTIFY WRAPPED!',
    isVisible: true
  });

  // Component states with single fading state
  const [componentStates, setComponentStates] = useState({
    userStats: { show: false, fading: false },
    artistQuiz: { show: false, fading: false },
    topArtists: { show: false, fading: false },
    topAlbums: { show: false, fading: false },
    topHits: { show: false, fading: false },
    hitsAnalysis: { show: false, fading: false }
  });

  // Refs for preventing race conditions
  const isTransitioning = useRef(false);
  const currentSequence = useRef<SequenceState>('INITIAL');

  // Helper function to show message with proper timing
  const showMessage = useCallback(async (message: string): Promise<void> => {
    if (isTransitioning.current) return;
    
    setMessageState({ text: message, isVisible: true });
    await new Promise(resolve => setTimeout(resolve, ANIMATION_DURATION));
    
    if (currentSequence.current !== 'COMPLETE') {
      setMessageState(prev => ({ ...prev, isVisible: false }));
      await new Promise(resolve => setTimeout(resolve, TRANSITION_DELAY));
    }
  }, []);

  // Helper function to fade out a component
  const fadeOutComponent = useCallback(async (
    componentKey: keyof typeof componentStates
  ): Promise<void> => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    setComponentStates(prev => ({
      ...prev,
      [componentKey]: { ...prev[componentKey], fading: true }
    }));

    await new Promise(resolve => setTimeout(resolve, FADE_DURATION));

    setComponentStates(prev => ({
      ...prev,
      [componentKey]: { show: false, fading: false }
    }));
    
    isTransitioning.current = false;
  }, []);

  // Component completion handlers
  const handleQuizComplete = useCallback(async () => {
    if (currentSequence.current !== 'ARTIST_QUIZ') return;
    
    await fadeOutComponent('artistQuiz');
    setSequenceState('TOP_ARTISTS');
    setComponentStates(prev => ({
      ...prev,
      topArtists: { show: true, fading: false }
    }));
  }, [fadeOutComponent]);

  const handleTopArtistsComplete = useCallback(async () => {
    if (currentSequence.current !== 'TOP_ARTISTS') return;

    await fadeOutComponent('topArtists');
    await showMessage('THESE TOP ARTISTS DOMINATED CHARTS');
    await showMessage('...BUT WHICH ALBUMS');
    await showMessage('HAD EVERYONE HITTING REPEAT?');
    
    setSequenceState('TOP_ALBUMS');
    setComponentStates(prev => ({
      ...prev,
      topAlbums: { show: true, fading: false }
    }));
  }, [fadeOutComponent, showMessage]);

  const handleTopAlbumsComplete = useCallback(async () => {
    if (currentSequence.current !== 'TOP_ALBUMS') return;

    await fadeOutComponent('topAlbums');
    await showMessage('NOW, LET\'S DIVE INTO SONGS THAT DEFINED SPOTIFY THIS YEAR');
    await showMessage('DID ANY OF YOUR FAVORITES MAKE THE LIST?');
    
    setSequenceState('TOP_HITS');
    setComponentStates(prev => ({
      ...prev,
      topHits: { show: true, fading: false }
    }));
  }, [fadeOutComponent, showMessage]);

  const handleTopHitsComplete = useCallback(async () => {
    if (currentSequence.current !== 'TOP_HITS') return;

    await fadeOutComponent('topHits');
    await showMessage('LET\'S ANALYZE YOUR MUSICAL TASTE');
    
    setSequenceState('HITS_ANALYSIS');
    setComponentStates(prev => ({
      ...prev,
      hitsAnalysis: { show: true, fading: false }
    }));
  }, [fadeOutComponent, showMessage]);

  const handleHitsAnalysisComplete = useCallback(async () => {
    if (currentSequence.current !== 'HITS_ANALYSIS') return;

    await fadeOutComponent('hitsAnalysis');
    setSequenceState('COMPLETE');
    await showMessage('THANKS FOR RELIVING YOUR YEAR IN MUSIC!');
  }, [fadeOutComponent, showMessage]);

  // Main sequence controller
  const sequence = useCallback(async () => {
    await showMessage('WELCOME TO SPOTIFY WRAPPED!');
    await showMessage('THIS YEAR WAS FULL OF\nMEMORABLE MUSIC MOMENTS');
    
    setSequenceState('USER_STATS');
    setComponentStates(prev => ({
      ...prev,
      userStats: { show: true, fading: false }
    }));

    await new Promise(resolve => setTimeout(resolve, USER_STATS_DURATION));
    await fadeOutComponent('userStats');
    
    await showMessage('BUT ONE ARTIST TOOK THE SPOTLIGHT');
    await showMessage('...WITH OVER 26.6 BILLION STREAMS!');
    await showMessage('CAN YOU GUESS WHO CLAIMED\nTHE CROWN THIS YEAR?');
    
    setSequenceState('ARTIST_QUIZ');
    setComponentStates(prev => ({
      ...prev,
      artistQuiz: { show: true, fading: false }
    }));
  }, [showMessage, fadeOutComponent]);

  // Initial sequence trigger
  useEffect(() => {
    setIsVisible(true);
    void sequence();
  }, [sequence]);

  // Sequence state tracker
  useEffect(() => {
    currentSequence.current = sequenceState;
  }, [sequenceState]);

  // Global spacebar handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== 'Space' || isTransitioning.current) return;
      event.preventDefault();
      
      switch (currentSequence.current) {
        case 'TOP_ARTISTS':
          void handleTopArtistsComplete();
          break;
        case 'TOP_HITS':
          void handleTopHitsComplete();
          break;
        case 'HITS_ANALYSIS':
          void handleHitsAnalysisComplete();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTopArtistsComplete, handleTopHitsComplete, handleHitsAnalysisComplete]);

  // Generate component class names
  const getComponentClassNames = (key: keyof typeof componentStates) => `
    absolute inset-0 flex items-center justify-center 
    ${componentStates[key].show ? 'block' : 'hidden'}
    ${componentStates[key].fading ? 'fade-out' : 'fade-in'}
  `;

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
        
        {/* Centered Message */}
        <div className="absolute inset-0 flex items-center justify-center">
          {messageState.isVisible && (
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
                {messageState.text}
              </h1>
            </div>
          )}
        </div>

        {/* Components */}
        <div className={getComponentClassNames('userStats')}>
          <UserStats />
        </div>

        <div className={getComponentClassNames('artistQuiz')}>
          <ArtistQuiz onComplete={handleQuizComplete} />
        </div>

        <div className={getComponentClassNames('topArtists')}>
          <TopArtists />
        </div>

        <div className={getComponentClassNames('topAlbums')}>
          <TopAlbums onComplete={handleTopAlbumsComplete} />
        </div>

        <div className={getComponentClassNames('topHits')}>
          <TopHits />
        </div>

        <div className={getComponentClassNames('hitsAnalysis')}>
          <HitsAnalysis onComplete={handleHitsAnalysisComplete} />
        </div>
      </div>
    </div>
  );
}