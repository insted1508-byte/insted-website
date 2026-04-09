"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const START_FRAME = 1000;
const END_FRAME = 1219;
const FRAME_COUNT = END_FRAME - START_FRAME + 1;


export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Read scroll progress tracking the container of 500vh to ensure 174 frames map smoothly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images once on mount
  useEffect(() => {
    const preloadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;
      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new Image();
        img.src = `/DOOM_SCROLL_images/${i}.jpg`;

        
        img.onload = () => {
          count++;
          setLoadedCount(count);
          if (count === FRAME_COUNT) {
            // Sort to ensure sequential order in the array
            loadedImages.sort((a, b) => {
              const numA = parseInt(a.src.match(/\/(\d+)\.jpg/)?.[1] || "0");
              const numB = parseInt(b.src.match(/\/(\d+)\.jpg/)?.[1] || "0");

              return numA - numB;
            });
            setImages(loadedImages);
            setIsReady(true);
          }
        };
        // Error handling in case an image fails to load
        img.onerror = () => {
          console.error(`Failed to load frame ${i}`);
          count++;
          setLoadedCount(count);
          if (count === FRAME_COUNT) {
            loadedImages.sort((a, b) => {
              const numA = parseInt(a.src.match(/\/(\d+)\.jpg/)?.[1] || "0");
              const numB = parseInt(b.src.match(/\/(\d+)\.jpg/)?.[1] || "0");

              return numA - numB;
            });
            setImages(loadedImages);
            setIsReady(true);
          }
        };
        loadedImages.push(img);
      }
    };
    
    preloadImages();
  }, []);

  // Sync canvas redraw when scroll updates
  useEffect(() => {
    if (!isReady || images.length === 0 || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(scrollYProgress.get());
    };

    const renderFrame = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const exactFrame = progress * (FRAME_COUNT - 1);
      const baseFrameIndex = Math.floor(exactFrame);
      const nextFrameIndex = Math.min(baseFrameIndex + 1, FRAME_COUNT - 1);
      const fraction = exactFrame - baseFrameIndex;

      const baseImg = images[baseFrameIndex];
      const nextImg = images[nextFrameIndex];

      if (!baseImg) return;

      const drawImageCover = (img: HTMLImageElement, alpha: number) => {
        // Only draw if image is fully loaded
        if (!img.complete || img.naturalHeight === 0) return;
        
        ctx.globalAlpha = alpha;
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.naturalWidth / img.naturalHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        // "Contain" behavior: Make it look like mobile aspect ratio on desktop without cropping
        if (canvasRatio > imgRatio) {
           // Desktop monitors: limit by height
           drawHeight = canvas.height;
           drawWidth = canvas.height * imgRatio;
           offsetX = (canvas.width - drawWidth) / 2;
           offsetY = 0;
        } else {
           // Mobile phones: limit by width
           drawWidth = canvas.width;
           drawHeight = canvas.width / imgRatio;
           offsetX = 0;
           offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      drawImageCover(baseImg, 1);

      if (fraction > 0 && baseFrameIndex !== nextFrameIndex && nextImg && nextImg.complete && nextImg.naturalHeight !== 0) {
        drawImageCover(nextImg, fraction);
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const unsubscribe = scrollYProgress.on("change", (p) => {
      requestAnimationFrame(() => renderFrame(p));
    });

    return () => {
      unsubscribe();
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [isReady, images, scrollYProgress]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#000000]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060913] text-[#ededed] font-medium tracking-widest text-sm z-50">
            <div className="animate-pulse tracking-[0.3em]">LOADING CINEMATIC SEQUENCE...</div>
            <div className="mt-4 text-xs text-neutral-500 font-mono">
              {loadedCount} / {FRAME_COUNT}
            </div>
            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-neutral-900 mt-6 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
              />
            </div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none object-cover"
        />
      </div>
    </div>
  );
}
