import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-white font-black tracking-widest text-xl">
          DMMMM01
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 tracking-wide">
          <a href="#" className="hover:text-white transition-colors">EXPERIENCES</a>
          <a href="#" className="hover:text-white transition-colors">STORIES</a>
          <a href="#" className="hover:text-white transition-colors">MANIFESTO</a>
        </nav>
        <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold tracking-widest hover:bg-gray-200 transition-colors uppercase">
          Join Now
        </button>
      </div>
    </header>
  );
}
