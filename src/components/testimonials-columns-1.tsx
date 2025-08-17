/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

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
            <div
              className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-background"
              key={i}
            >
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 opacity-60 tracking-tight">
                    {role}
                  </div>
                </div>
              </div>
            </div>
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
            <div
              className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full bg-background"
              key={`duplicate-${i}`}
            >
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <img
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 opacity-60 tracking-tight">
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
