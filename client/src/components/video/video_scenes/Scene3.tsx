import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene3() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),    // robot close up
      setTimeout(() => setPhase(2), 800),  // token orbits
      setTimeout(() => setPhase(3), 1600), // text appears
      setTimeout(() => setPhase(4), 4000), // exit motion
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      {...sceneTransitions.splitHorizontal}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Robot Close Up */}
      <motion.div 
        className="absolute z-10 w-[120vw] h-[120vh] bottom-[-20%] right-[-30%] origin-bottom-left blur-[2px]"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ 
          scale: phase >= 4 ? 1.2 : 1,
          opacity: phase >= 4 ? 0 : 0.6
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src="/assets/robot-torso.png" alt="Guardian" className="w-full h-full object-contain object-bottom mix-blend-luminosity" />
      </motion.div>

      {/* Floating Hologram Token */}
      {phase >= 2 && (
        <motion.div 
          className="absolute z-30 w-[40vw] h-[40vw] top-[20%] left-[15%] origin-center"
          initial={{ scale: 0, opacity: 0, rotateY: -90 }}
          animate={{ 
            scale: phase >= 4 ? 2 : 1, 
            opacity: phase >= 4 ? 0 : 1,
            rotateY: phase >= 4 ? 90 : 0,
            y: phase < 4 ? [0, '-2vh', 0] : '-5vh'
          }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
          }}
        >
          <img src="/assets/token-dl.png" alt="$DL Token" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(0,229,255,0.8)]" />
        </motion.div>
      )}

      {/* Foreground Typography */}
      {phase >= 3 && (
        <div className="absolute top-[30%] right-[15%] z-40 max-w-[40vw]">
          <motion.div 
            initial={{ opacity: 0, x: '-5vw' }}
            animate={{ opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '5vw' : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="border-l-4 border-[#00E5FF] pl-6 py-2 bg-gradient-to-r from-[#00E5FF]/10 to-transparent box-glow">
              <h3 className="text-[2vw] font-mono text-[#8BA4D8] tracking-widest uppercase mb-2">
                RESERVE ASSET
              </h3>
              <h2 className="text-[5vw] font-display font-black leading-none text-white text-glow">
                $DL <span className="text-transparent border-text stroke-white" style={{ WebkitTextStroke: '2px white' }}>TOKEN</span>
              </h2>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
