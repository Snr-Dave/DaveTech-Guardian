import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
  "Welcome to Dave-Tech 🚀",
  "Powering innovation with $DL",
  "Join the Web3 revolution.",
  "Built for the future. Built by Dave."
];

export const DLMascot: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const speechTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.1;
      utterance.pitch = 1.2;
      window.speechSynthesis.speak(utterance);
    }
  }, []);

  // Auto welcome and message rotation
  useEffect(() => {
    const welcomeTimeout = setTimeout(() => {
      const welcomeText = "Welcome to Dave-Tech. Powering the future with $DL.";
      speak(welcomeText);
      setShowSpeechBubble(true);
      
      // Hide welcome bubble after 5s and start rotation
      speechTimeoutRef.current = setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);
    }, 2000);

    const rotationInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % MESSAGES.length);
      setShowSpeechBubble(true);
      
      // Hide bubble after 5s of being shown
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
      speechTimeoutRef.current = setTimeout(() => {
        setShowSpeechBubble(false);
      }, 5000);
    }, 10000);

    return () => {
      clearTimeout(welcomeTimeout);
      clearInterval(rotationInterval);
      if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    };
  }, [speak]);

  // Random blinking logic
  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
      
      const nextBlink = Math.random() * 3000 + 3000; // 3-6s
      setTimeout(blink, nextBlink);
    };

    const timeout = setTimeout(blink, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = () => {
    const msg = MESSAGES[currentMessageIndex];
    speak(msg);
    setShowSpeechBubble(true);
    
    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    speechTimeoutRef.current = setTimeout(() => {
      setShowSpeechBubble(false);
    }, 4000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Speech Bubble */}
      <AnimatePresence>
        {showSpeechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 bg-[#0A192F]/90 border border-[#00E5FF]/50 p-3 rounded-2xl rounded-br-none backdrop-blur-md shadow-[0_0_20px_rgba(0,229,255,0.2)] max-w-[200px] text-sm text-[#00E5FF] font-mono pointer-events-auto"
          >
            {MESSAGES[currentMessageIndex]}
            <div className="absolute -bottom-2 right-0 w-4 h-4 bg-[#0A192F]/90 border-r border-b border-[#00E5FF]/50 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Container */}
      <motion.div
        className="relative cursor-pointer pointer-events-auto group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Glow Aura */}
        <motion.div
          className="absolute inset-0 bg-[#00E5FF] rounded-full blur-[40px] opacity-20"
          animate={{
            opacity: isHovered ? 0.4 : 0.2,
            scale: isHovered ? 1.2 : 1,
          }}
        />

        {/* Robot Image */}
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <img
            src="/assets/dl-mascot.png"
            alt="DL AI Mascot"
            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]"
          />
          
          {/* Eyes Overlay (Blinking) */}
          <AnimatePresence>
            {isBlinking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute top-[28.5%] left-[24%] right-[24%] h-[12%] bg-[#1a1a1a] z-10"
                style={{ borderRadius: '4px' }}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
