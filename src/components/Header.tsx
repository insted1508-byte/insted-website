"use client";

import React from 'react';

export default function Header() {
  const categories = ["All", "Insights", "Flicks", "Facts", "Updates", "My Circle"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#060913]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Header Bar */}
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Logo Icon */}
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="5" y="15" width="22" height="12" rx="2" fill="#E5E7EB" transform="rotate(-5 5 15)" />
              <rect x="10" y="10" width="22" height="12" rx="2" fill="#00BEF2" />
              <rect x="8" y="12" width="22" height="12" rx="2" fill="white" />
            </svg>
            <span className="text-white font-bold text-2xl tracking-tight">InstEd</span>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        {/* Category Bar */}
        <div className="flex items-center gap-3 py-3 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                category === "All"
                  ? "bg-[#00BEF2] text-white shadow-[0_0_15px_rgba(0,190,242,0.4)]"
                  : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}
