"use client"

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { ReactLenis } from "lenis/react"
import { useRef } from "react"
import Image from "next/image"

const projects = [
  {
    title: "AI-Powered Learning",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&h=600&fit=crop&q=80",
  },
  {
    title: "Interactive Classrooms",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&h=600&fit=crop&q=80",
  },
  {
    title: "Cinematic Education",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000&h=600&fit=crop&q=80",
  },
  {
    title: "Digital Exploration",
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&h=600&fit=crop&q=80",
  },
  {
    title: "The Future of EdTech",
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1000&h=600&fit=crop&q=80",
  },
]

const StickyCard_001 = ({
  i,
  title,
  src,
  progress,
  range,
  targetScale,
}: {
  i: number
  title: string
  src: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)

  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={container} className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 h-screen">
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="rounded-3xl relative top-0 flex origin-top flex-col overflow-hidden border border-white/10 shadow-2xl bg-[#060913]
                   h-[300px] w-[320px] 
                   sm:h-[400px] sm:w-[500px] 
                   md:h-[450px] md:w-[650px] 
                   lg:h-[500px] lg:w-[850px]"
      >
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-10 flex flex-col justify-end p-8">
           <span className="text-white/50 text-xs font-mono tracking-widest uppercase mb-2">Module 0{i + 1}</span>
           <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">{title}</h3>
        </div>
        <Image 
          src={src || "/placeholder.svg"} 
          alt={title} 
          fill
          className="object-cover transition-transform duration-700 hover:scale-105" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  )
}

const ImagesScrollingAnimation = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center 
                   pb-[20vh] pt-[10vh] bg-[#060913]"
      >
        <div className="mb-20 text-center px-4">
           <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 uppercase tracking-tighter">Explore Learning</h2>
           <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
             Dive into our curated modules where technology meets creative storytelling to redefine how you learn.
           </p>
        </div>

        {projects.map((project, i) => {
          const targetScale = Math.max(0.6, 1 - (projects.length - i - 1) * 0.05)
          return (
            <StickyCard_001
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          )
        })}
      </main>
    </ReactLenis>
  )
}

export { ImagesScrollingAnimation, StickyCard_001 }
