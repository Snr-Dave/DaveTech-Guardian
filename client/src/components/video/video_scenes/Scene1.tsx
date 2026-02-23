import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene1() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),  // core glow
      setTimeout(() => setPhase(2), 1200), // robot appears
      setTimeout(() => setPhase(3), 2000), // text appears
      setTimeout(() => setPhase(4), 3500), // exit motion
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      {...sceneTransitions.clipCircle}
    >
      {/* Background flare */}
      {phase >= 1 && (
        <motion.div 
          className="absolute w-[60vw] h-[60vw] rounded-full bg-[#00E5FF]/20 blur-[100px] mix-blend-screen"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}

      {/* Robot Torso */}
      {phase >= 2 && (
        <motion.div 
          className="absolute z-10 w-[70vw] h-[80vh] bottom-0 origin-bottom"
          initial={{ y: '20vh', opacity: 0, scale: 0.9 }}
          animate={{ y: phase >= 4 ? '5vh' : 0, opacity: phase >= 4 ? 0 : 1, scale: phase >= 4 ? 1.1 : 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <img src="/assets/robot-torso.png" alt="Guardian" className="w-full h-full object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]" />
        </motion.div>
      )}

      {/* Foreground Typography */}
      {phase >= 3 && (
        <div className="absolute top-[20%] left-[10%] z-20">
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0, y: '3vh' }}
            animate={{ opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '-2vh' : 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-[6vw] font-display font-bold leading-none tracking-tight text-white drop-shadow-lg uppercase clip-diagonal relative">
              <span className="relative z-10">DAVE-TECH</span>
              <span className="absolute inset-0 bg-[#00E5FF] text-black -z-10 mix-blend-overlay opacity-30 blur-sm">DAVE-TECH</span>
            </h1>
          </motion.div>
          <motion.div 
            className="overflow-hidden mt-2"
            initial={{ opacity: 0, y: '2vh' }}
            animate={{ opacity: phase >= 4 ? 0 : 1, y: phase >= 4 ? '-1vh' : 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="text-[3vw] font-mono text-[#00E5FF] tracking-widest uppercase text-glow">
              GUARDIAN ONLINE
            </h2>
          </motion.div>
        </div>
      )}
      
      {/* Glitch Overlay Effect */}
      {phase === 2 && (
        <motion.div 
          className="absolute inset-0 bg-white z-30 mix-blend-overlay pointer-events-none"
          animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
          transition={{ duration: 0.3, times: [0, 0.2, 0.4, 0.6, 1] }}
        />
      )}
    </motion.div>
  );
}
