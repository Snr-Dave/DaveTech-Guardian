import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene5() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),    // robot fades back in
      setTimeout(() => setPhase(2), 800),  // logo lockup
      setTimeout(() => setPhase(3), 3500), // final exit
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center bg-[#02040A] z-50"
      {...sceneTransitions.fadeBlur}
    >
      {/* Background robot silhouette */}
      {phase >= 1 && (
        <motion.div 
          className="absolute z-0 w-[80vw] h-[100vh] bottom-0 opacity-20 mix-blend-screen"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img src="/assets/robot-torso.png" alt="Guardian" className="w-full h-full object-contain object-bottom grayscale" />
        </motion.div>
      )}

      {/* Central Lockup */}
      {phase >= 2 && (
        <div className="z-20 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ 
              scale: phase >= 3 ? 0 : 1, 
              opacity: phase >= 3 ? 0 : 1,
              rotate: phase >= 3 ? 180 : 0
            }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="mb-8 relative"
          >
            {/* Logo Ring */}
            <div className="absolute inset-[-20%] rounded-full border border-[#00E5FF]/30 border-t-[#00E5FF] animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-[-40%] rounded-full border border-[#00E5FF]/10 border-b-[#00E5FF]/50 animate-[spin_6s_linear_infinite_reverse]" />
            
            <img src="/assets/token-dl.png" alt="$DL" className="w-[15vw] h-[15vw] object-contain drop-shadow-[0_0_30px_rgba(0,229,255,1)]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: '3vh' }}
            animate={{ 
              opacity: phase >= 3 ? 0 : 1, 
              y: phase >= 3 ? '3vh' : 0 
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-[5vw] font-display font-black text-white tracking-widest leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] uppercase clip-diagonal px-8 py-2 bg-[#0A192F]/80 border-l-4 border-r-4 border-[#00E5FF]">
              $DL TOKEN
            </h1>
            <p className="text-[1.5vw] font-mono text-[#00E5FF] tracking-[0.5em] mt-6 uppercase text-glow">
              SECURE YOUR FUTURE
            </p>
          </motion.div>
        </div>
      )}

      {/* Scanning Laser */}
      {phase >= 2 && phase < 3 && (
        <motion.div 
          className="absolute inset-x-0 h-[2px] bg-[#00E5FF] shadow-[0_0_20px_#00E5FF] z-30"
          initial={{ top: '0%' }}
          animate={{ top: '100%' }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
