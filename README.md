# Spotify Wrapped 2024 (90s Edition)

> An interactive web application that reimagines Spotify Wrapped through the lens of 90s aesthetics and 8-bit graphics.

---

## Overview 
What began as an experimental year-end recap in 2016, Spotify Wrapped quickly evolved into a global tradition, inviting users from all over the world to discover their musical narrative and collectively celebrate the sounds that defined the year.

This project serves as a creative reimagining of Spotify Wrapped and draws design inspiration from 90s aesthetics and 8-bit graphics. It also serves as a technical demonstration of how modern web development technologies can create immersive narrative-driven experiences while embracing nostalgic and retro elements. 

## Tech Stack 
- **Frontend Framework**: Next.js 15.1.0 with React 18.2.0
- **Styling**: TailwindCSS 3.4.1 with custom CSS animations and effects
- **Fonts**: Google Fonts (Pixelify Sans) for retro pixel text aesthetics
- **Data Visualization**: Recharts 2.15.0 for interactive charts and graphs
- **State Management**: React useState and useEffect hooks for component-level state
- **Routing**: Next.js App Router with client-side navigation
- **Animation**: Custom CSS transitions and keyframe animations
- **Responsive Design**: TailwindCSS responsive classes with custom viewport handling
- **Type Safety**: TypeScript for type checking and developer experience

## Features 

<div style="display: flex; justify-content: center; margin: 30px 0;">
  <div style="width: 800px; background-color: #0F2331; border-radius: 8px; font-family: 'DM Sans', sans-serif; color: white; padding: 20px; position: relative; overflow: hidden; box-shadow: 0 0 15px rgba(47, 253, 47, 0.3), 0 0 30px rgba(47, 253, 47, 0.2);">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 30px; background-color: #066A73; display: flex; align-items: center; padding: 0 10px; font-family: 'DM Mono', monospace; font-size: 14px;">
      <span style="color: #2FFD2F; margin-right: 5px;">●</span> Key Components Overview
    </div>
    <div style="margin-top: 40px; height: calc(100% - 50px); overflow: auto; padding: 10px;">
      <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; margin: 0 auto 20px; max-width: 700px;">
        <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">ArtistQuiz.tsx</div>
        <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Interactive quiz where users guess their top artist of the year</p>
        <div style="display: flex; justify-content: space-between; margin-top: 15px;">
          <div style="width: 48%; border: 1px solid rgba(47, 253, 47, 0.3); border-radius: 6px; padding: 10px;">
            <div style="font-family: 'DM Mono', monospace; font-size: 14px; margin-bottom: 8px; color: #2FFD2F;">Key Features</div>
            <ul style="font-size: 13px; padding-left: 20px;">
              <li>Multiple choice artist selection</li>
              <li>Interactive buttons with hover effects</li>
              <li>Mystery icon that hides the answer</li>
              <li>Spacebar progression after selection</li>
            </ul>
          </div>
          <div style="width: 48%; border: 1px solid rgba(47, 253, 47, 0.3); border-radius: 6px; padding: 10px;">
            <div style="font-family: 'DM Mono', monospace; font-size: 14px; margin-bottom: 8px; color: #2FFD2F;">Component Logic</div>
            <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace;">
              <span style="color: #569CD6;">const</span> [<span style="color: #9CDCFE;">selectedArtist</span>, <span style="color: #9CDCFE;">setSelectedArtist</span>] = <span style="color: #569CD6;">useState</span>&lt;Artist | <span style="color: #569CD6;">null</span>&gt;(<span style="color: #569CD6;">null</span>);<br><br>
              <span style="color: #6A9955;">// When spacebar is pressed and artist selected</span><br>
              <span style="color: #9CDCFE;">onComplete</span>(<span style="color: #9CDCFE;">selectedArtist</span> === <span style="color: #CE9178;">"TAYLOR SWIFT"</span>, <span style="color: #9CDCFE;">selectedArtist</span>);
            </div>
          </div>
        </div>
      </div>

      <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; margin: 0 auto 20px; max-width: 700px;">
        <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">HitsAnalysis.tsx</div>
        <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Visual breakdown of user's musical taste using an interactive pie chart</p>
        <div style="display: flex; justify-content: space-between; margin-top: 15px;">
          <div style="width: 48%; border: 1px solid rgba(47, 253, 47, 0.3); border-radius: 6px; padding: 10px;">
            <div style="font-family: 'DM Mono', monospace; font-size: 14px; margin-bottom: 8px; color: #2FFD2F;">Technologies</div>
            <ul style="font-size: 13px; padding-left: 20px;">
              <li>Recharts for data visualization</li>
              <li>Interactive pie segments</li>
              <li>Percentage-based progress bars</li>
            </ul>
          </div>
          <div style="width: 48%; border: 1px solid rgba(47, 253, 47, 0.3); border-radius: 6px; padding: 10px;">
            <div style="font-family: 'DM Mono', monospace; font-size: 14px; margin-bottom: 8px; color: #2FFD2F;">Chart Implementation</div>
            <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace;">
              <span style="color: #569CD6;">const</span> <span style="color: #9CDCFE;">data</span> = [<br>
              &nbsp;&nbsp;{ <span style="color: #9CDCFE;">name</span>: <span style="color: #CE9178;">'Pop'</span>, <span style="color: #9CDCFE;">value</span>: <span style="color: #B5CEA8;">45</span> },<br>
              &nbsp;&nbsp;{ <span style="color: #9CDCFE;">name</span>: <span style="color: #CE9178;">'Hip-Hop'</span>, <span style="color: #9CDCFE;">value</span>: <span style="color: #B5CEA8;">30</span> },<br>
              &nbsp;&nbsp;{ <span style="color: #9CDCFE;">name</span>: <span style="color: #CE9178;">'Rock'</span>, <span style="color: #9CDCFE;">value</span>: <span style="color: #B5CEA8;">15</span> },<br>
              &nbsp;&nbsp;{ <span style="color: #9CDCFE;">name</span>: <span style="color: #CE9178;">'Other'</span>, <span style="color: #9CDCFE;">value</span>: <span style="color: #B5CEA8;">10</span> }<br>
              ];
            </div>
          </div>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <div style="width: 48%; background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">TopAlbums.tsx</div>
          <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Interactive component showing top 3 albums globally</p>
          <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace; margin-bottom: 10px;">
            <span style="color: #9CDCFE;">albums</span> = [<br>
            &nbsp;&nbsp;{ <span style="color: #9CDCFE;">id</span>: <span style="color: #B5CEA8;">1</span>, <span style="color: #9CDCFE;">image</span>: <span style="color: #CE9178;">'/billie-album.png'</span>, <span style="color: #9CDCFE;">revealed</span>: <span style="color: #569CD6;">false</span> },<br>
            &nbsp;&nbsp;{ <span style="color: #9CDCFE;">id</span>: <span style="color: #B5CEA8;">2</span>, <span style="color: #9CDCFE;">image</span>: <span style="color: #CE9178;">'/taylor-album.png'</span>, <span style="color: #9CDCFE;">revealed</span>: <span style="color: #569CD6;">false</span> },<br>
            &nbsp;&nbsp;{ <span style="color: #9CDCFE;">id</span>: <span style="color: #B5CEA8;">3</span>, <span style="color: #9CDCFE;">image</span>: <span style="color: #CE9178;">'/sabrina-album.png'</span>, <span style="color: #9CDCFE;">revealed</span>: <span style="color: #569CD6;">false</span> }<br>
            ]
          </div>
          <div style="font-family: 'DM Mono', monospace; font-size: 13px; color: #2FFD2F;">Features:</div>
          <ul style="font-size: 12px; padding-left: 15px;">
            <li>Click to reveal hidden albums</li>
            <li>Transition animations</li>
            <li>Auto-progress after all revealed</li>
          </ul>
        </div>
        <div style="width: 48%; background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">TopArtists.tsx</div>
          <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Reveals the top artist with animations and transitions to top 10 list</p>
          <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace; margin-bottom: 10px;">
            <span style="color: #6A9955;">// Animation sequence with timeouts</span><br>
            <span style="color: #9CDCFE;">addTimeout</span>(() => <span style="color: #9CDCFE;">setIsShaking</span>(<span style="color: #569CD6;">true</span>), <span style="color: #B5CEA8;">1000</span>);<br>
            <span style="color: #9CDCFE;">addTimeout</span>(() => <span style="color: #9CDCFE;">setIsMysteryFading</span>(<span style="color: #569CD6;">true</span>), <span style="color: #B5CEA8;">2000</span>);<br>
            <span style="color: #9CDCFE;">addTimeout</span>(() => <span style="color: #9CDCFE;">setShowTaylorSwift</span>(<span style="color: #569CD6;">true</span>), <span style="color: #B5CEA8;">3500</span>);
          </div>
          <div style="font-family: 'DM Mono', monospace; font-size: 13px; color: #2FFD2F;">Animations:</div>
          <ul style="font-size: 12px; padding-left: 15px;">
            <li>Sequential animation timeline</li>
            <li>Crown visual indicator</li>
          </ul>
        </div>
      </div>
      
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <div style="width: 48%; background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">TopHits.tsx</div>
          <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Displays top 10 songs globally with responsive layout</p>
          <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace; margin-bottom: 10px;">
            <span style="color: #C586C0;">useEffect</span>(() => {<br>
            &nbsp;&nbsp;<span style="color: #569CD6;">const</span> <span style="color: #9CDCFE;">handleKeyDown</span> = (<span style="color: #9CDCFE;">event</span>) => {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #C586C0;">if</span> (<span style="color: #9CDCFE;">event</span>.<span style="color: #9CDCFE;">code</span> === <span style="color: #CE9178;">'Space'</span> && <span style="color: #9CDCFE;">onComplete</span>) {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #9CDCFE;">onComplete</span>();<br>
            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
            &nbsp;&nbsp;};<br>
            &nbsp;&nbsp;<span style="color: #9CDCFE;">window</span>.<span style="color: #9CDCFE;">addEventListener</span>(<span style="color: #CE9178;">'keydown'</span>, <span style="color: #9CDCFE;">handleKeyDown</span>);<br>
            }, [<span style="color: #9CDCFE;">onComplete</span>]);
          </div>
          <div style="font-family: 'DM Mono', monospace; font-size: 13px; color: #2FFD2F;">Features:</div>
          <ul style="font-size: 12px; padding-left: 15px;">
            <li>Responsive image sizing</li>
            <li>Fade-in animation</li>
            <li>Spacebar navigation</li>
          </ul>
        </div>
        <div style="width: 48%; background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px;">
          <div style="font-weight: bold; margin-bottom: 10px; font-family: 'DM Mono', monospace; color: #2FFD2F; text-align: center;">UserStats.tsx</div>
          <p style="font-size: 13px; text-align: center; margin-bottom: 10px;">Displays Spotify user statistics with engaging visualizations</p>
          <div style="font-size: 12px; background-color: #0F2331; border-radius: 6px; padding: 8px; font-family: 'DM Mono', monospace; margin-bottom: 10px;">
            <span style="color: #569CD6;">return</span> (<br>
            &nbsp;&nbsp;&lt;<span style="color: #9CDCFE;">div</span> <span style="color: #9CDCFE;">className</span>=<span style="color: #CE9178;">{`w-full h-full flex flex-col items-center justify-center ${isVisible ? 'fade-in' : 'opacity-0'}`}</span>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #9CDCFE;">h2</span>&gt;SPOTIFY ACHIEVED&lt;/<span style="color: #9CDCFE;">h2</span>&gt;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span style="color: #9CDCFE;">div</span>&gt;...&lt;/<span style="color: #9CDCFE;">div</span>&gt;<br>
            &nbsp;&nbsp;&lt;/<span style="color: #9CDCFE;">div</span>&gt;<br>
            );
          </div>
          <div style="font-family: 'DM Mono', monospace; font-size: 13px; color: #2FFD2F;">Components:</div>
          <ul style="font-size: 12px; padding-left: 15px;">
            <li>User ranking visualization</li>
            <li>World map visualization</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
<div style="display: flex; justify-content: center; margin: 30px 0;"> <div style="width: 800px; height: 500px; background-color: #0F2331; border-radius: 8px; font-family: 'DM Sans', sans-serif; color: white; padding: 20px; position: relative; overflow: hidden; box-shadow: 0 0 15px rgba(47, 253, 47, 0.3), 0 0 30px rgba(47, 253, 47, 0.2);"> <div style="position: absolute; top: 0; left: 0; right: 0; height: 30px; background-color: #066A73; display: flex; align-items: center; padding: 0 10px; font-family: 'DM Mono', monospace; font-size: 14px;"> <span style="color: #2FFD2F; margin-right: 5px;">●</span> Core Features </div> <div style="margin-top: 40px; height: calc(100% - 50px); overflow: auto; padding: 10px;"> <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;"> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 10px;">Interactive Artist Quiz</div> <div style="height: 120px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center;"> <div style="width: 100px; height: 100px; background-color: #066A73; border-radius: 50%; display: flex; justify-content: center; align-items: center; border: 2px dashed #2FFD2F;"> <span style="font-size: 36px;">?</span> </div> </div> <div style="font-size: 14px;">Guess your top artist from multiple choices with interactive feedback</div> </div> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 10px;">Musical Taste Analysis</div> <div style="height: 120px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center;"> <div style="width: 100px; height: 100px; border-radius: 50%; position: relative; overflow: hidden;"> <div style="position: absolute; width: 50%; height: 50%; background-color: #2FFD2F; top: 0; left: 0;"></div> <div style="position: absolute; width: 50%; height: 50%; background-color: #066A73; top: 0; right: 0;"></div> <div style="position: absolute; width: 50%; height: 50%; background-color: #1C5860; bottom: 0; left: 0;"></div> <div style="position: absolute; width: 50%; height: 50%; background-color: #0F2331; bottom: 0; right: 0;"></div> </div> </div> <div style="font-size: 14px;">Interactive pie chart visualization of your musical preferences</div> </div> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 10px;">Top Albums Reveal</div> <div style="height: 120px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center;"> <div style="display: flex; gap: 5px;"> <div style="width: 30px; height: 30px; background-color: #066A73; border: 1px solid #2FFD2F;"></div> <div style="width: 30px; height: 30px; background-color: #066A73; border: 1px solid #2FFD2F;"></div> <div style="width: 30px; height: 30px; background-color: #066A73; border: 1px solid #2FFD2F;"></div> </div> </div> <div style="font-size: 14px;">Interactive reveal of top albums with animated transitions</div> </div> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 10px;">Typewriter Messages</div> <div style="height: 120px; margin-bottom: 10px; display: flex; justify-content: center; align-items: center;"> <div style="font-family: 'DM Mono', monospace; position: relative;"> YOUR MUSICAL JOURNEY<span style="background-color: #2FFD2F; width: 2px; height: 14px; display: inline-block; vertical-align: middle; margin-left: 2px; animation: blink 1s infinite;"></span> </div> </div> <div style="font-size: 14px;">Animated typewriter effect for messages with retro cursor</div> </div> </div> </div> </div> </div>


## Architecture

<div style="display: flex; justify-content: center; margin: 30px 0;"> <div style="width: 800px; height: 600px; background-color: #0F2331; border-radius: 8px; font-family: 'DM Sans', sans-serif; color: white; padding: 20px; position: relative; overflow: hidden; box-shadow: 0 0 15px rgba(47, 253, 47, 0.3), 0 0 30px rgba(47, 253, 47, 0.2);"> <div style="position: absolute; top: 0; left: 0; right: 0; height: 30px; background-color: #066A73; display: flex; align-items: center; padding: 0 10px; font-family: 'DM Mono', monospace; font-size: 14px;"> <span style="color: #2FFD2F; margin-right: 5px;">●</span> Component Architecture </div> <div style="margin-top: 40px; height: calc(100% - 50px); overflow: auto; padding: 10px;"> <div style="display: flex; flex-direction: column; align-items: center;"> <!-- Main Container --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 15px; margin: 10px; width: 650px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 10px;">page.tsx</div> <div style="font-size: 12px; margin-bottom: 15px;">Main Controller Component</div> <!-- Sequence State Manager --> <div style="background-color: #066A73; border: 1px dashed #2FFD2F; border-radius: 8px; padding: 10px; margin-bottom: 15px; text-align: left;"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; margin-bottom: 5px; color: #2FFD2F;">Sequence State Manager</div> <div style="font-size: 11px;">Controls flow between message and component states</div> <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px;"> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">INITIAL</div> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">WELCOME</div> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">USER_STATS</div> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">ARTIST_QUIZ</div> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">TOP_ARTISTS</div> <div style="background-color: #0F2331; border-radius: 4px; padding: 3px 6px; font-size: 10px;">...</div> </div> </div> <!-- Component and Message Display --> <div style="display: flex; gap: 15px; margin-bottom: 15px;"> <div style="flex: 1; background-color: #066A73; border: 1px dashed #2FFD2F; border-radius: 8px; padding: 10px; text-align: left;"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; margin-bottom: 5px; color: #2FFD2F;">Message Display</div> <div style="font-size: 11px;">Typewriter effect text system</div> </div> <div style="flex: 1; background-color: #066A73; border: 1px dashed #2FFD2F; border-radius: 8px; padding: 10px; text-align: left;"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; margin-bottom: 5px; color: #2FFD2F;">Component Display</div> <div style="font-size: 11px;">Conditional render with animations</div> </div> </div> </div> <!-- Component Tree --> <div style="width: 650px; display: flex; justify-content: center; margin: 15px 0;"> <div style="width: 0; height: 20px; border-left: 2px dashed #2FFD2F;"></div> </div> <!-- Feature Components Row --> <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; width: 650px;"> <!-- UserStats --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">UserStats</div> <div style="font-size: 10px;">User statistics visualization</div> </div> <!-- ArtistQuiz --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">ArtistQuiz</div> <div style="font-size: 10px;">Interactive artist guessing game</div> </div> <!-- TopArtists --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">TopArtists</div> <div style="font-size: 10px;">Artist reveal & ranking</div> </div> <!-- TopAlbums --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">TopAlbums</div> <div style="font-size: 10px;">Interactive album reveal</div> </div> </div> <!-- Second Row of Components --> <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; width: 650px; margin-top: 15px;"> <!-- TopHits --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">TopHits</div> <div style="font-size: 10px;">Top songs display</div> </div> <!-- HitsAnalysis --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">HitsAnalysis</div> <div style="font-size: 10px;">Music taste visualization</div> </div> <!-- About --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">About</div> <div style="font-size: 10px;">Project information</div> </div> <!-- Contact --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 140px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">Contact</div> <div style="font-size: 10px;">Contact information</div> </div> </div> <!-- Shared Component --> <div style="width: 650px; display: flex; justify-content: center; margin: 15px 0;"> <div style="width: 0; height: 20px; border-left: 2px dashed #2FFD2F;"></div> </div> <!-- Popup Component --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 8px; padding: 10px; width: 300px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-family: 'DM Mono', monospace; font-size: 12px; color: #2FFD2F; margin-bottom: 5px;">Popup</div> <div style="font-size: 10px;">Reusable modal component used by About and Contact</div> </div> </div> </div> </div> </div>
## User Flow

<div style="display: flex; justify-content: center; margin: 30px 0;"> <div style="width: 800px; height: 600px; background-color: #0F2331; border-radius: 8px; font-family: 'DM Sans', sans-serif; color: white; padding: 20px; position: relative; overflow: hidden; box-shadow: 0 0 15px rgba(47, 253, 47, 0.3), 0 0 30px rgba(47, 253, 47, 0.2);"> <div style="position: absolute; top: 0; left: 0; right: 0; height: 30px; background-color: #066A73; display: flex; align-items: center; padding: 0 10px; font-family: 'DM Mono', monospace; font-size: 14px;"> <span style="color: #2FFD2F; margin-right: 5px;">●</span> User Flow </div> <div style="margin-top: 40px; height: calc(100% - 50px); overflow: auto; padding: 10px;"> <div style="display: flex; flex-direction: column; align-items: center;"> <!-- Start --> <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 20px; width: 120px; height: 50px; display: flex; justify-content: center; align-items: center; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);"> <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F;">USER</div> </div>

    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Landing Page -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Landing Page</div>
      <div style="font-size: 12px;">User presses spacebar to begin Wrapped experience</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- User Stats -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">User Stats</div>
      <div style="font-size: 12px;">Global listener statistics and achievements</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Artist Quiz -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Artist Quiz</div>
      <div style="font-size: 12px;">Interactive quiz to guess top artist of the year</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Top Artists -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Top Artists Reveal</div>
      <div style="font-size: 12px;">Animated reveal of top artist and top 10 list</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Top Albums -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Top Albums</div>
      <div style="font-size: 12px;">Interactive album reveal with click mechanics</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Top Hits -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Top Hits</div>
      <div style="font-size: 12px;">Visualization of top 10 songs globally</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- Hits Analysis -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 4px; padding: 15px; width: 500px; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F; margin-bottom: 5px;">Hits Analysis</div>
      <div style="font-size: 12px;">Interactive pie chart of musical taste breakdown</div>
    </div>
    
    <!-- Arrow -->
    <div style="height: 30px; width: 2px; background-color: #2FFD2F; position: relative;">
      <div style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) rotate(45deg); width: 10px; height: 10px; border-right: 2px solid #2FFD2F; border-bottom: 2px solid #2FFD2F;"></div>
    </div>
    
    <!-- End -->
    <div style="background-color: #1C5860; border: 2px solid #2FFD2F; border-radius: 20px; width: 120px; height: 50px; display: flex; justify-content: center; align-items: center; text-align: center; box-shadow: 0 0 10px rgba(47, 253, 47, 0.2);">
      <div style="font-weight: bold; font-family: 'DM Mono', monospace; color: #2FFD2F;">END</div>
    </div>
  </div>
</div>

</div> </div>

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm or yarn package manager
- Minimum viewport width of 700px for optimal experience

### Installation

- Clone the repository:
    
    ```bash
    git clone https://github.com/katjpg/90s-wrapped.git
    cd 90s-wrapped
    ```
    
- Install dependencies:
    
    ```bash
    npm install
    # or
    yarn install
    ```
    
- Run the development server:
    
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    
- Open your browser and navigate to:
    
    ```
    http://localhost:3000
    ```
    

### Project Structure

- `/app` - Main application directory (Next.js App Router)
    - `/components` - Reusable UI components
    - `/hooks` - Custom React hooks
    - `/pages` - Page components including wrapped experience
    - `/public` - Static assets like images and sounds
    - `globals.css` - Global CSS styles including animations
    - `layout.tsx` - Root layout component with font loading

### Development Notes

- The application requires a minimum viewport width of 700px
- Custom cursor is enabled by default and can be styled in globals.css
- All typewriter animations timing can be adjusted in constants
- Component sequence is defined in the `SequenceState` type
- Additional content can be added by extending the sequence states