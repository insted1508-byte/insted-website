"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const FRAME_COUNT = 192;

export default function VideoScrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Read scroll progress tracking the container of 600vh to ensure 192 frames map smoothly
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images once on mount
  useEffect(() => {
    const preloadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      let count = 0;
      for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(4, "0");
        img.src = `/video_frames/frame_${paddedIndex}.jpg`;
        
        img.onload = () => {
          count++;
          setLoadedCount(count);
          if (count === FRAME_COUNT) {
            // Sort to ensure sequential order in the array
            loadedImages.sort((a, b) => {
              const numA = parseInt(a.src.match(/frame_(\d+)/)?.[1] || "0");
              const numB = parseInt(b.src.match(/frame_(\d+)/)?.[1] || "0");
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
        ctx.globalAlpha = alpha;
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.naturalWidth && img.naturalHeight ? (img.naturalWidth / img.naturalHeight) : (1280 / 720);

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };

      drawImageCover(baseImg, 1);

      if (fraction > 0 && baseFrameIndex !== nextFrameIndex) {
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
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#060913]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {!isReady && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#060913] text-[#ededed] font-medium tracking-widest text-sm z-50">
            <div>LOADING VIDEO FRAMES...</div>
            <div className="mt-2 text-xs text-gray-500">
              {loadedCount} / {FRAME_COUNT}
            </div>
            {/* Progress bar */}
            <div className="w-48 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${(loadedCount / FRAME_COUNT) * 100}%` }}
              />
            </div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
      </div>
    </div>
  );
}
