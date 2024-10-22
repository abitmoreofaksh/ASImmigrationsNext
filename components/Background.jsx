"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Background = () => {
  return (
    <div className="relative h-screen bg-white flex justify-center overflow-hidden">
      <BackgroundCellCore />
      <div className="relative z-50  pointer-events-none select-none">
        <section className="relative pt-12 overflow-hidden dark:bg-black sm:pt-16">
          <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-normal tracking-widest uppercase">
                <span className="text-gray-800 font-semibold">
                  Welcome to GenV
                </span>
              </p>

              <h1 className="mt-2 text-3xl font-bold dark:text-white sm:text-3xl lg:text-4xl xl:text-5xl">
                Empowering Students To Learn Better
              </h1>

              <div className="flex flex-col items-center justify-center px-8 mt-8 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
                <Link
                  href="/our-projects"
                  className=" items-center justify-center w-full bg-gray-800 text-white font-semibold px-8 py-3 text-base  dark:text-white dark:bg-black border border-transparent rounded-lg sm:w-auto"
                  role="button"
                >
                  Our Projects
                </Link>
                <Link
                  href="/our-projects"
                  className=" items-center justify-center w-full bg-transparent border border-gray-800 text-gray-800 font-semibold px-8 py-3 text-base  dark:text-white dark:bg-black rounded-lg sm:w-auto"
                  role="button"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12">
              <Link href={"/our-services"}>
                <img
                  className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden h-[30rem] object-cover"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="GenV Hero"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="h-full absolute inset-0 overflow-hidden"
    >
      <div className="absolute h-[24rem] inset-y-0  overflow-hidden">
        <div className="absolute h-full w-full pointer-events-none -bottom-2 z-40 bg-white [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
            ${size / 4}px circle at center,
           white, transparent
          )`,
            WebkitMaskImage: `radial-gradient(
          ${size / 4}px circle at center,
          white, transparent
        )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-blue-400" />
      </div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(30).fill(0);
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row  relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="flex flex-col  relative z-20 border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,76,233,0.39)] h-12 w-12" //  rgba(14, 165, 233, 0.15) for a more subtle effect
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};
