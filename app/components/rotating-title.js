"use client";

import { useEffect, useRef, useState } from "react";

const titles = [  
  "odd one",
  "Data Analyst",
  "caffine keeps alive",
  "Backend Engineer",
  "Aspiring Machine Learning Engineer",
];

export default function RotatingTitle() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setAnimating(true);

      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % titles.length);
        setAnimating(false);
      }, 500);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const nextIndex = (currentIndex + 1) % titles.length;

  return (
    <div className="relative mt-3 h-8 overflow-hidden">
      {/* Current */}
      <p
        key={`current-${currentIndex}`}
        className={`absolute left-0 top-0 whitespace-nowrap text-[1.02rem] font-medium text-stone-400 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform transform-gpu ${
          animating
            ? "-translate-y-7 opacity-0"
            : "translate-y-0 opacity-60"
        }`}
      >
        {titles[currentIndex]}
      </p>

      {/* Next */}
      <p
        key={`next-${nextIndex}`}
        className={`absolute left-0 top-0 whitespace-nowrap text-[1.02rem] font-medium text-stone-400 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform transform-gpu ${
          animating
            ? "translate-y-0 opacity-60"
            : "translate-y-7 opacity-0"
        }`}
      >
        {titles[nextIndex]}
      </p>
    </div>
  );
}