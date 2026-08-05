"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LegacyReturnButton } from "@/components/LegacyReturnButton";
import { DashboardMockup } from "@/components/DashboardMockup";

export default function LegacySection() {
  const [isPeeking, setIsPeeking] = useState(false);
  const [isModernUI, setIsModernUI] = useState(false);

  return (
    <section className="relative w-full max-w-6xl px-6 md:px-12 py-32 z-20 mx-auto text-center flex flex-col items-center gap-6">
      <h2 className="font-title-base text-[clamp(2rem,4.5vw,3.5rem)] text-(--text-main) leading-none tracking-tighter">
        One click back to legacy
      </h2>
      <p className="text-(--text-muted) text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
        We know change is hard. If you ever need to access the old VTOP for something we haven't ported yet, it's always just one click away right from the sidebar. No lock-in, just a better default.
      </p>
      
      {/* 16:9 Demo Container */}
      <div className="relative w-full aspect-[16/10] mt-8 border border-(--border-subtle) rounded-[2rem] overflow-hidden bg-(--bg-surface)">
        
        {/* Legacy Background (Unthemed Static Skeletons based on image.png) */}
        <div className="absolute inset-0 flex flex-col bg-[#f5f6f8] select-none">
          {/* Legacy Navbar 1 (Dark Blue) */}
          <div className="w-full h-12 bg-[#2172c3] flex items-center px-6 justify-between shrink-0">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-white/20" />
              <div className="w-24 h-4 bg-white/20 rounded" />
              <div className="w-6 h-6 bg-white/20 rounded" />
            </div>
            <div className="w-32 h-6 bg-white/20 rounded border border-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-24 h-4 bg-white/20 rounded" />
              <div className="w-8 h-8 rounded-full bg-white/20" />
            </div>
          </div>
          {/* Legacy Navbar 2 (White with blue text links) */}
          <div className="w-full h-10 bg-white border-b border-[#dee2e6] flex items-center px-6 gap-6 shrink-0">
            <div className="w-4 h-3 bg-[#2172c3]/20" />
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-20 h-3 bg-[#2172c3]/30 rounded" />
            ))}
          </div>

          {/* Legacy Main Content (Masonry Grid) */}
          <div className="flex-1 p-6 flex gap-6 overflow-hidden">
            {/* Left Column (70%) */}
            <div className="w-[70%] flex flex-col gap-6">
              {/* Action Plan */}
              <div className="w-full h-12 bg-[#fdf5e6] border border-[#f0e0c9] flex items-center px-4 rounded-sm shrink-0">
                <div className="w-48 h-4 bg-[#7d0000]/60 rounded" />
                <div className="w-32 h-6 bg-[#fcd269] rounded ml-10" />
              </div>
              {/* Course Registration Table */}
              <div className="w-full flex-1 bg-white border border-[#dee2e6] rounded-sm flex flex-col">
                <div className="w-full h-10 bg-[#fdf5e6] flex items-center px-4 justify-between border-b border-[#dee2e6] shrink-0">
                  <div className="w-64 h-4 bg-[#7d0000]/60 rounded" />
                  <div className="w-48 h-3 bg-[#7d0000]/40 rounded" />
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="w-full h-4 bg-[#e9ecef] rounded mb-2" />
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center w-full">
                       <div className="w-1/3 h-3 bg-[#e9ecef] rounded" />
                       <div className="w-12 h-3 bg-[#2172c3]/50 rounded" />
                       <div className="w-8 h-3 bg-[#2172c3]/50 rounded" />
                       <div className="w-24 h-3 bg-red-500/50 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (30%) */}
            <div className="w-[30%] flex flex-col gap-6">
              {/* Proctor Message */}
              <div className="w-full h-24 bg-white border border-[#dee2e6] rounded-sm flex flex-col shrink-0">
                <div className="w-full h-10 border-b border-[#dee2e6] flex items-center px-4">
                  <div className="w-32 h-4 bg-[#7d0000]/60 rounded" />
                </div>
              </div>
              {/* CGPA Status */}
              <div className="w-full h-64 bg-white border border-[#dee2e6] rounded-sm flex flex-col">
                <div className="w-full h-10 border-b border-[#dee2e6] flex items-center px-4 shrink-0">
                  <div className="w-40 h-4 bg-[#7d0000]/60 rounded" />
                </div>
                <div className="p-4 flex flex-col gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center w-full">
                       <div className="w-1/2 h-3 bg-[#2172c3]/50 rounded" />
                       <div className="w-12 h-4 bg-[#e9ecef] rounded" />
                    </div>
                  ))}
                  <div className="w-full h-8 bg-[#0dcaf0] mt-2 rounded-sm flex items-center justify-between px-2">
                     <div className="w-1/3 h-3 bg-black/40 rounded" />
                     <div className="w-1/3 h-3 bg-[#2172c3]/60 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Shadow DOM Modern UI sliding up */}
        <motion.div
           className="absolute inset-0 w-full h-full overflow-hidden bg-(--bg-surface) flex shadow-[0px_-10px_30px_rgba(0,0,0,0.3)]"
           initial={{ y: "100%", borderRadius: "0px" }}
           animate={{
             y: isModernUI ? "0%" : isPeeking ? "65%" : "100%",
             scale: isModernUI ? 1 : isPeeking ? 0.96 : 1,
             rotateX: isModernUI ? 0 : isPeeking ? 4 : 0,
             borderRadius: isPeeking && !isModernUI ? "2rem" : "0px",
           }}
           transition={{
             type: "spring",
             damping: 24,
             stiffness: 400,
             mass: 0.6
           }}
           style={{
             transformOrigin: "bottom center",
             transformPerspective: 1500
           }}
        >
          {/* Modern Retop UI — same DashboardMockup as hero */}
          <div className="absolute inset-0 w-full h-full">
            <DashboardMockup />
          </div>
        </motion.div>

        {/* The Shadow Host container for button */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 pointer-events-auto">
            <LegacyReturnButton 
               onMouseEnter={() => setIsPeeking(true)}
               onMouseLeave={() => setIsPeeking(false)}
               onClick={() => setIsModernUI(!isModernUI)} 
            />
          </div>
        </div>

      </div>
    </section>
  );
}
