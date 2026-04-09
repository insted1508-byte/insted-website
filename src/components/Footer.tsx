import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#060913] py-20 border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00BEF2]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 w-full">
        <div className="flex items-center justify-center gap-2 mb-8">
           <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="15" width="22" height="12" rx="2" fill="#E5E7EB" transform="rotate(-5 5 15)" />
              <rect x="10" y="10" width="22" height="12" rx="2" fill="#00BEF2" />
              <rect x="8" y="12" width="22" height="12" rx="2" fill="white" />
            </svg>
            <span className="text-white font-bold text-xl tracking-tight">InstEd</span>
        </div>
        
        <p className="text-gray-400 text-base md:text-lg font-light mb-12 max-w-lg mx-auto leading-relaxed">
          Interactive and cinematic learning experiences designed for the next generation of curious minds.
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-12">
          <a href="#" className="hover:text-[#00BEF2] transition-colors">Insights</a>
          <a href="#" className="hover:text-[#00BEF2] transition-colors">Flicks</a>
          <a href="#" className="hover:text-[#00BEF2] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#00BEF2] transition-colors">Privacy</a>
        </div>
        
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 tracking-widest w-full uppercase">
          <span>&copy; {new Date().getFullYear()} InstEd Interactive.</span>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
