"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(183deg, #006DBC 2.49%, #F9F9F9 88.88%)",
      }}
    >
      {/* Background clouds */}
      <motion.img
        src="https://api.builder.io/api/v1/image/assets/TEMP/7f7092bc3e0670a189b47742156cde6b11c69c90?width=1252"
        alt=""
        className="absolute object-cover z-0 hidden lg:block"
        style={{
          width: "626px",
          height: "419px",
          top: "-188px",
          right: "-98px",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.img
        src="https://api.builder.io/api/v1/image/assets/TEMP/1bbe67f6aff728cb6d4ba0652610835b218cdc93?width=1252"
        alt=""
        className="absolute object-cover z-0 hidden lg:block"
        style={{
          width: "626px",
          height: "419px",
          top: "-142px",
          left: "-452px",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      <motion.img
        src="https://api.builder.io/api/v1/image/assets/TEMP/2aad045bcb1d0ec7ce10151ed5f308bfbfeccfe1?width=2884"
        alt=""
        className="absolute object-cover z-0 hidden sm:block"
        style={{
          width: "1442px",
          height: "572px",
          top: "461px",
          left: "-63px",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-[110px] pt-24 sm:pt-28 lg:pt-[159px] pb-16 sm:pb-20 lg:pb-24 min-h-screen">
        <div className="w-full flex flex-col items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Hero content */}
          <motion.div
            className="w-full flex flex-col items-center gap-6 sm:gap-8 lg:gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Header section */}
            <div className="flex flex-col items-center justify-center w-full gap-4 sm:gap-6 lg:gap-8">
              {/* Badge */}
              <motion.div
                className="flex items-center border rounded-full"
                style={{
                  gap: "10px",
                  padding: "4px 16px 4px 4px",
                  borderRadius: "99999px",
                  borderColor: "#E6E2E0",
                  backgroundColor: "rgba(255, 255, 255, 0.40)",
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div
                  className="flex items-center justify-center rounded-full"
                  style={{
                    padding: "2px 6px",
                    borderRadius: "99999px",
                    backgroundColor: "#F4F2F1",
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{ padding: "0 4px" }}
                  >
                    <span
                      className="text-center font-medium font-instrument"
                      style={{
                        color: "#17191C",
                        fontSize: "12px",
                        lineHeight: "18px",
                      }}
                    >
                      TaskNest
                    </span>
                  </div>
                </div>
                <span
                  className="text-center font-normal font-inter"
                  style={{
                    color: "#FFF",
                    fontSize: "12px",
                    lineHeight: "normal",
                  }}
                >
                  Trusted by 100+ Companies
                </span>
              </motion.div>

              {/* Main heading */}
              <motion.h1
                className="text-center font-semibold font-inter w-full px-2 sm:px-4 lg:px-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-tight lg:leading-[72px] tracking-tight"
                style={{
                  color: "#FFF",
                  fontWeight: "600",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                TaskNest: Illuminating the Future of Work with AI
              </motion.h1>

              {/* Supporting text */}
              <motion.p
                className="text-center font-normal font-inter w-full px-2 sm:px-4 lg:px-0 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl"
                style={{
                  color: "#FFF",
                  fontWeight: "400",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                A modern HR SaaS platform powered by artificial intelligence,
                bringing clarity, efficiency, and insight to your people
                management.
              </motion.p>
            </div>

            {/* CTA section */}
            <motion.div
              className="flex flex-col items-center w-full px-2 sm:px-4 lg:px-0 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Download button */}
                <div
                  className="flex flex-col items-start rounded-lg w-full sm:w-auto"
                  style={{
                    padding: "3.542px",
                    gap: "2.024px",
                    borderRadius: "13.663px",
                    background:
                      "linear-gradient(180deg, #E9E9E9 0%, #E9E9E9 0.01%, #FFF 100%)",
                  }}
                >
                  <Button
                    className="flex items-center justify-center border rounded-lg w-full sm:w-auto"
                    style={{
                      padding: "10.627px 12.145px",
                      gap: "8.096px",
                      borderRadius: "10.12px",
                      borderWidth: "3.036px",
                      borderColor: "#FFF",
                      background:
                        "linear-gradient(180deg, #F4F4F4 0%, #FEFEFE 100%)",
                      boxShadow:
                        "0 0 0.225px 0.225px rgba(0, 0, 0, 0.07), 0 0 0.225px 0.675px rgba(0, 0, 0, 0.05), 0 2.698px 2.923px -1.349px rgba(0, 0, 0, 0.25), 0 0.899px 3.598px 0.899px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.6817 16.1353C17.1734 15.3853 17.3567 15.002 17.7317 14.1604C14.9651 13.1104 14.5234 9.16867 17.2567 7.66034C16.4234 6.61034 15.2484 6.00201 14.1401 6.00201C13.3401 6.00201 12.7901 6.21036 12.2984 6.40202C11.8817 6.56036 11.5067 6.70201 11.0401 6.70201C10.5401 6.70201 10.0984 6.54369 9.63174 6.37702C9.1234 6.19369 8.59007 6.00201 7.9234 6.00201C6.68173 6.00201 5.35674 6.76035 4.51507 8.06035C3.33174 9.89368 3.54007 13.327 5.44841 16.2603C6.13174 17.3103 7.0484 18.4853 8.24007 18.502C8.74007 18.5103 9.06507 18.3604 9.4234 18.202C9.83174 18.0187 10.2734 17.8187 11.0484 17.8187C11.8234 17.8103 12.2567 18.0187 12.6651 18.202C13.0151 18.3604 13.3317 18.5103 13.8234 18.502C15.0317 18.4853 15.9984 17.1853 16.6817 16.1353Z"
                        fill="black"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.965 1.83533C14.0983 2.75199 13.7233 3.66034 13.2317 4.29367C12.7067 4.977 11.79 5.51032 10.9067 5.47699C10.7483 4.59366 11.1567 3.68532 11.6567 3.07699C12.215 2.41032 13.1567 1.89366 13.965 1.83533Z"
                        fill="black"
                      />
                    </svg>
                    <span
                      className="font-semibold font-inter text-center sm:text-left whitespace-nowrap"
                      style={{
                        color: "#06071A",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Download for Apple Silicon
                    </span>
                  </Button>
                </div>

                {/* Buy now button */}
                <div
                  className="flex flex-col items-start rounded-lg w-full sm:w-auto"
                  style={{
                    padding: "3.542px",
                    gap: "2.024px",
                    borderRadius: "13.663px",
                    background:
                      "linear-gradient(180deg, #060612 0%, #060612 0.01%, #060612 100%)",
                  }}
                >
                  <Button
                    className="flex items-center justify-center border rounded-lg w-full sm:w-auto"
                    style={{
                      padding: "10.627px 12.145px",
                      gap: "8.096px",
                      borderRadius: "10.12px",
                      borderWidth: "3.036px",
                      borderColor: "#3F3F45",
                      background:
                        "linear-gradient(180deg, #060612 0%, #292930 100%)",
                      boxShadow:
                        "0 0 0.225px 0.225px rgba(0, 0, 0, 0.07), 0 0 0.225px 0.675px rgba(0, 0, 0, 0.05), 0 2.698px 2.923px -1.349px rgba(0, 0, 0, 0.25), 0 0.899px 3.598px 0.899px rgba(0, 0, 0, 0.12)",
                    }}
                  >
                    <span
                      className="font-semibold font-inter text-center sm:text-left whitespace-nowrap"
                      style={{
                        color: "#FFF",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: "600",
                      }}
                    >
                      Buy now
                    </span>
                  </Button>
                </div>
              </div>

              {/* Small text */}
              <motion.p
                className="text-center font-normal font-inter w-full px-2 sm:px-4 lg:px-0 text-xs sm:text-sm"
                style={{
                  color: "#475467",
                  lineHeight: "18px",
                  fontWeight: "400",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Free version available. No credit card required.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            className="w-full flex justify-center items-center px-2 sm:px-4 lg:px-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.img
              src="https://api.builder.io/api/v1/image/assets/TEMP/80fbf3b73fa1dba5eb74bdb055b7bfb5d9d9bb29?width=1864"
              alt="Lumify Dashboard"
              className="w-full rounded-lg border shadow-lg"
              style={{
                maxWidth: "932px",
                borderRadius: "8px",
                borderWidth: "11px",
                borderColor: "rgba(238, 233, 233, 0.30)",
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
