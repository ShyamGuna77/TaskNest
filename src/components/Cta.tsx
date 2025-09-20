/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "motion/react";

export default function Cta() {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center p-4 bg-gray-50 -mt-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#4D89FE] via-[#6B9BFF] to-[#ADC9FF] px-6 py-12 md:px-16 lg:px-28 lg:py-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Background Cloud Images */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Bottom cloud - positioned to overflow bottom right */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/19745e1ef1a7082db5594e5633757c4e054bbf61?width=2884"
              alt=""
              className="absolute bottom-0 right-0 w-[900px] h-[357px] translate-x-1/4 translate-y-1/3 opacity-80"
            />

            {/* Chip cloud 1 - left side */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/bd5036981be3400bdfff9db4a1bc3da3724dbd59?width=1252"
              alt=""
              className="absolute top-1/2 left-0 w-[390px] h-[261px] -translate-x-1/3 -translate-y-1/4 opacity-35"
            />

            {/* Chip cloud 2 - right side */}
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1b77559b8bc5d17d75c0a6c4906899782d8423eb?width=1252"
              alt=""
              className="absolute top-1/2 right-0 w-[390px] h-[261px] translate-x-1/4 -translate-y-1/3 opacity-40"
            />
          </div>

          {/* Content Container */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Heading and Supporting Text */}
            <div className="flex flex-col items-center gap-5 max-w-[790px]">
              {/* Main Heading */}
              <motion.h1
                className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Ready to Step Into a Brighter HR Future?
              </motion.h1>

              {/* Supporting Text */}
              <motion.p
                className="text-white text-lg md:text-xl leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Schedule a free demo today and discover how Lumify can bring
                light to your HR processes with AI-powered tools.
              </motion.p>
            </div>

            {/* Buttons Container */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {/* Primary Button - Get Started */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-[14px] bg-gradient-to-b from-[#060612] to-[#060612] p-[3.5px]">
                  <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#060612] to-[#292930] border-[3px] border-[#3F3F45]"></div>
                </div>
                <button className="relative px-6 py-3 rounded-[10px] bg-gradient-to-b from-[#060612] to-[#292930] border-[3px] border-[#3F3F45] shadow-lg hover:shadow-xl transition-all duration-200">
                  <span className="text-white font-bold text-sm">
                    Get Started
                  </span>
                </button>
              </motion.div>

              {/* Secondary Button - Download App */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 rounded-[14px] bg-gradient-to-b from-[#E9E9E9] to-[#FFF] p-[3.5px]">
                  <div className="w-full h-full rounded-[10px] bg-gradient-to-b from-[#F4F4F4] to-[#FEFEFE] border-[3px] border-white"></div>
                </div>
                <button className="relative px-6 py-3 rounded-[10px] bg-gradient-to-b from-[#F4F4F4] to-[#FEFEFE] border-[3px] border-white shadow-lg hover:shadow-xl transition-all duration-200">
                  <span className="text-[#06071A] font-bold text-sm">
                    Download App
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
