"use client";
import React, { useRef } from "react";

interface CardProps {
  title: string;
  athlete: string;
  brand: string;
  value: string;
  icon: React.ReactNode;
}

export default function ContractCard({ title, athlete, brand, value, icon }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card bg-white/5 border-2 border-white/10 rounded-xl p-6 relative overflow-hidden group flex flex-col transition-colors hover:border-blue-400/30"
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/40 rounded flex items-center justify-center">
            {icon}
          </div>
          <h3 className="font-medium text-white text-base">{title}</h3>
        </div>
        
        <div className="mb-5">
          <div className="text-sm text-white font-medium mb-1">{athlete}</div>
          <div className="text-sm text-blue-400 font-medium">{brand}</div>
        </div>

        <div className="mt-auto pt-5 border-t border-white/10">
          <div className="text-xs text-gray-400 uppercase tracking-wider mb-2">Market Value</div>
          <div className="text-xl text-blue-400 font-bold">{value}</div>
        </div>
      </div>
    </div>
  );
}
