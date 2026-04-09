import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#030409] py-24 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background flare effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 mb-8 tracking-tighter">
          THE END.
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto">
          You've reached the bottom of the doom scroll. Step away from the screen, look outside, and reclaim your time.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs uppercase tracking-widest text-gray-500 font-semibold mb-16">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Manifesto</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 tracking-wider w-full">
          <span>&copy; {new Date().getFullYear()} ANTIGRAVITY. STUDIO.</span>
          <span className="mt-4 md:mt-0">MADE WITH PASSION.</span>
        </div>
      </div>
    </footer>
  );
}
