/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const duration = props.duration || 20;

  return (
    <div className={props.className}>
      <div className="flex flex-col gap-6 pb-6 bg-background overflow-hidden relative">
        <div
          className="animate-marquee flex flex-col gap-6"
          style={{
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {props.testimonials.map(({ text, image, name, role }, i) => (
            <motion.div
              className="p-6 sm:p-8 lg:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-background"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-sm sm:text-base">{text}</div>
              <div className="flex items-center gap-2 mt-4 sm:mt-5">
                <img
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 text-sm sm:text-base">
                    {name}
                  </div>
                  <div className="leading-5 opacity-60 tracking-tight text-xs sm:text-sm">
                    {role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Duplicate positioned right after the first set */}
        <div
          className="animate-marquee2 flex flex-col gap-6 absolute top-0"
          style={{
            animationDuration: `${duration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {props.testimonials.map(({ text, image, name, role }, i) => (
            <motion.div
              className="p-6 sm:p-8 lg:p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-background"
              key={`duplicate-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-sm sm:text-base">{text}</div>
              <div className="flex items-center gap-2 mt-4 sm:mt-5">
                <img
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5 text-sm sm:text-base">
                    {name}
                  </div>
                  <div className="leading-5 opacity-60 tracking-tight text-xs sm:text-sm">
                    {role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
