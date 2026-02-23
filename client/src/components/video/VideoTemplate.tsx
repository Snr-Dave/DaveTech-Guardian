// Video Template - Replace ReplitLoadingScene with your scenes

import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

const SCENE_DURATIONS = {
  enter: 4000,
  shield: 4500,
  token: 4500,
  power: 4000,
  outro: 4000,
};

export default function VideoTemplate() {
  const { currentScene } = useVideoPlayer({
    durations: SCENE_DURATIONS,
  });

  return (
    <div
      className="w-full h-screen overflow-hidden relative bg-[#02040A] text-white font-mono"
    >
      {/* Persistent Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src="/assets/cyberpunk-bg.png" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
          animate={{
            scale: [1, 1.05, 1],
            filter: ['brightness(1) contrast(1.2)', 'brightness(1.2) contrast(1.3)', 'brightness(1) contrast(1.2)'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-[#02040A] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040A] via-transparent to-[#02040A] opacity-60" />
        <div className="absolute inset-0 scanline opacity-20" />
        
        {/* Volumetric Fog Effect */}
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#00E5FF]/20 to-transparent blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Drifting Sparks */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00E5FF] box-glow"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, `-${10 + Math.random() * 20}vh`],
              x: [0, `${(Math.random() - 0.5) * 10}vw`],
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Persistent Midground Overlay - Hologram Grid */}
      <motion.div 
        className="absolute inset-0 z-10 opacity-10 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: 'url(/assets/hologram-texture.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        animate={{
          opacity: [0.05, 0.15, 0.05],
          scale: currentScene === 2 ? 1.1 : 1,
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Dynamic Lighting Highlights */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00E5FF]/10 to-transparent blur-3xl mix-blend-screen"
        animate={{
          opacity: currentScene % 2 === 0 ? 0.7 : 0.2,
          x: currentScene === 1 ? '-20%' : '0%'
        }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#00E5FF]/20 to-transparent blur-3xl mix-blend-screen"
        animate={{
          opacity: currentScene === 3 ? 0.9 : 0.3,
          scale: currentScene === 3 ? 1.5 : 1
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Mode="popLayout" = new snaps in while old animates out */}
      <div className="absolute inset-0 z-20">
        <AnimatePresence mode="popLayout">
          {currentScene === 0 && <Scene1 key="enter" />}
          {currentScene === 1 && <Scene2 key="shield" />}
          {currentScene === 2 && <Scene3 key="token" />}
          {currentScene === 3 && <Scene4 key="power" />}
          {currentScene === 4 && <Scene5 key="outro" />}
        </AnimatePresence>
      </div>
    </div>
  );
}
