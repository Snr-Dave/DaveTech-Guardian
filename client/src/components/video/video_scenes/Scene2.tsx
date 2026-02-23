import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { sceneTransitions } from '@/lib/video';

export function Scene2() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),    // robot shifts
      setTimeout(() => setPhase(2), 600),  // shield deploys
      setTimeout(() => setPhase(3), 1500), // text appears
      setTimeout(() => setPhase(4), 4000), // exit motion
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      {...sceneTransitions.morphExpand}
    >
      {/* Robot shifts to side */}
      <motion.div 
        className="absolute z-10 w-[70vw] h-[80vh] bottom-0 origin-bottom"
        initial={{ x: '5vw', scale: 1.1, opacity: 1 }}
        animate={{ 
          x: phase >= 4 ? '-10vw' : '20vw', 
          scale: phase >= 4 ? 0.9 : 1.2,
          opacity: phase >= 4 ? 0 : 1
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src="/assets/robot-torso.png" alt="Guardian" className="w-full h-full object-contain object-bottom drop-shadow-[0_0_40px_rgba(0,229,255,0.4)]" />
      </motion.div>

      {/* Shield Projection */}
      {phase >= 2 && (
        <motion.div 
          className="absolute z-20 w-[60vw] h-[60vw] top-[10%] -left-[10%] origin-center mix-blend-screen"
          initial={{ scale: 0, opacity: 0, rotate: -45 }}
          animate={{ 
            scale: phase >= 4 ? 1.5 : 1, 
            opacity: phase >= 4 ? 0 : 0.8,
            rotate: phase >= 4 ? 0 : 15
          }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        >
          <img src="/assets/digital-shield.png" alt="Shield" className="w-full h-full object-contain animate-[pulse_4s_ease-in-out_infinite]" />
        </motion.div>
      )}

      {/* Rippling Light Ring */}
      {phase >= 2 && (
        <motion.div 
          className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full border-[2px] border-[#00E5FF] mix-blend-screen -z-10"
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: phase >= 4 ? 3 : 2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      {/* Foreground Typography */}
      {phase >= 3 && (
        <div className="absolute bottom-[15%] right-[10%] z-30 text-right">
          <motion.div 
            initial={{ opacity: 0, x: '5vw', filter: 'blur(10px)' }}
            animate={{ opacity: phase >= 4 ? 0 : 1, x: phase >= 4 ? '10vw' : 0, filter: phase >= 4 ? 'blur(20px)' : 'blur(0px)' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[4vw] font-display font-bold uppercase leading-tight clip-diagonal bg-[#0A192F] p-4 inline-block shadow-[8px_8px_0px_0px_#00E5FF]">
              DEFENSE PROTOCOL
              <br/>
              <span className="text-[#00E5FF]">ENGAGED</span>
            </h2>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
