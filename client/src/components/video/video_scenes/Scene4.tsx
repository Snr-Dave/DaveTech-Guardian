import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene4() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),    // energy surges
      setTimeout(() => setPhase(2), 600),  // token pulses
      setTimeout(() => setPhase(3), 1400), // text appears
      setTimeout(() => setPhase(4), 3500), // exit motion
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      {...sceneTransitions.zoomThrough}
    >
      {/* Intense Background Surge */}
      {phase >= 1 && (
        <motion.div 
          className="absolute inset-0 bg-[#00E5FF]/20 mix-blend-color-dodge z-0 pointer-events-none"
          animate={{ opacity: [0, 0.8, 0.2, 0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        />
      )}

      {/* Grid Floor */}
      <div 
        className="absolute bottom-0 w-full h-[50vh] z-10 opacity-30"
        style={{
          background: 'linear-gradient(transparent 95%, #00E5FF 100%), linear-gradient(90deg, transparent 95%, #00E5FF 100%)',
          backgroundSize: '5vw 5vw',
          transform: 'perspective(50vw) rotateX(60deg)',
          transformOrigin: 'bottom'
        }}
      />

      {/* Pulsing Token Central */}
      <motion.div 
        className="absolute z-30 w-[50vw] h-[50vw] top-[5%] origin-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: phase >= 4 ? 3 : 1, 
          opacity: phase >= 4 ? 0 : 1,
          y: phase < 4 ? [0, '-1vh', 0] : '-10vh'
        }}
        transition={{ 
          duration: phase >= 4 ? 0.8 : 1.2, 
          ease: "easeOut",
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <img src="/assets/token-dl.png" alt="$DL Token" className="w-full h-full object-contain" />
        
        {/* Core Glow */}
        <motion.div 
          className="absolute inset-0 bg-[#00E5FF] rounded-full blur-[80px] -z-10"
          animate={{ opacity: [0.3, 0.8, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      {/* Action Typography */}
      {phase >= 3 && (
        <div className="absolute bottom-[20%] text-center z-40 w-full">
          <motion.div 
            initial={{ opacity: 0, y: '5vh', scale: 0.9 }}
            animate={{ opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '5vh' : 0, scale: phase >= 4 ? 0.8 : 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            <h2 className="text-[6vw] font-display font-black leading-none text-white tracking-widest drop-shadow-[0_0_20px_rgba(0,229,255,0.8)]">
              POWERING
            </h2>
            <h3 className="text-[3vw] font-mono text-[#00E5FF] tracking-[0.5em] mt-4 uppercase text-glow border-t-2 border-b-2 border-[#00E5FF]/50 py-2 inline-block">
              THE DAVELAB ECOSYSTEM
            </h3>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
