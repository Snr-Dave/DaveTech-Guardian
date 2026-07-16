import { motion } from 'framer-motion';

export function InfoSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0A0F1D] border-t border-[#00E5FF]/20 overflow-hidden font-mono">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#00E5FF]/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
        {/* Left side: Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              DaveTech-<br/><span className="text-[#00E5FF] text-glow">Guardian</span>
            </h2>
            <p className="text-xl md:text-2xl text-[#8BA4D8] mt-4 font-medium tracking-wide">
              Empowering digital safety and innovation
            </p>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-[#8BA4D8]/90 leading-relaxed"
          >
            DaveTech-Guardian is a forward-thinking initiative focused on protecting users online while fostering technological growth. It combines security awareness, cutting-edge tools, and community-driven support to ensure safer digital experiences.
          </motion.p>
        </div>

        {/* Right side: Highlights Card */}
        <div className="flex-1 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-[#02040A]/60 border border-[#00E5FF]/20 rounded-3xl p-8 md:p-10 backdrop-blur-md shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:shadow-[0_0_40px_rgba(0,229,255,0.2)] transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Key Highlights
            </h3>
            <ul className="space-y-6">
              {[
                "Cybersecurity awareness and education",
                "Innovative tools for safe browsing",
                "Community support and resources"
              ].map((highlight, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                  className="flex items-start gap-4 text-[#8BA4D8]"
                >
                  <div className="mt-1 w-5 h-5 flex items-center justify-center rounded bg-[#00E5FF]/20 text-[#00E5FF] shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-lg leading-snug">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
