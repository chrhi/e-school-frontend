"use client";

import { Play } from "lucide-react";
import MaxWidthWrapper from "../max-with-wrapper";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Hero() {
  return (
    <div className="w-full relative min-h-screen bg-gradient-to-br from-[#FFF3E4] to-[#FFE8D2] overflow-hidden">
      <MaxWidthWrapper>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 pt-16 md:pt-24 pb-16">
          <motion.div
            className="w-full flex flex-col mt-20 md:mt-0 justify-center gap-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Text content remains the same */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              variants={fadeIn}
            >
              <span className="text-[#f46506] inline-block">Studying</span>{" "}
              <span className="text-[#2F327D] inline-block">Online is now</span>
              <br />
              <span className="text-[#2F327D] inline-block bg-gradient-to-r from-[#2F327D] to-[#23BDEE] bg-clip-text text-transparent">
                much easier
              </span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-600 max-w-xl"
              variants={fadeIn}
            >
              Our school is an interesting platform that will teach you <br />{" "}
              in more an interactive way
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
              variants={fadeIn}
            >
              <motion.button
                className="px-8 py-4 bg-[#f46506] font-semibold rounded-full text-white hover:bg-[#e07e05] transition-all hover:scale-105 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join now
              </motion.button>

              <motion.div
                className="flex items-center gap-3 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all"
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <Play className="w-5 h-5 text-[#23BDEE] ml-1" />
                </motion.div>
                <span className="font-medium group-hover:text-[#f46506] transition-colors">
                  Watch how it works
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative w-full flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
          >
            <div className="relative flex items-center justify-center gap-4">
              <motion.img
                src="/girl.png"
                className="h-[450px] lg:h-[600px] object-contain relative z-10"
                alt="Student learning online"
                loading="eager"
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
              />
              <motion.img
                src="/boy.png"
                className="h-[300px] lg:h-[450px] object-contain relative z-10 -ml-8"
                alt="Student learning online"
                loading="eager"
                variants={floatingAnimation}
                initial="initial"
                animate={{
                  y: [-10, 10, -10],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5, // Adding a slight delay to create an alternating effect
                  },
                }}
              />

              {/* Floating cards remain the same */}
              <motion.div
                className="absolute top-20 -left-4 md:-left-10 bg-white p-4 rounded-xl shadow-lg z-20"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <span className="text-blue-500 text-sm font-medium">
                      5k+
                    </span>
                  </motion.div>
                  <p className="text-sm text-gray-700">Assisted Student</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-40 -right-4 md:-right-10 bg-white p-4 rounded-xl shadow-lg z-20"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-green-500 text-sm font-medium">
                    Congratulations
                  </p>
                  <p className="text-xs text-gray-600">
                    Your admission completed
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 bg-white p-4 rounded-xl shadow-lg z-20"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-purple-500 text-xl">👩‍💻</span>
                  </motion.div>
                  <div>
                    <p className="text-sm font-medium">Meeting Online Class</p>
                    <p className="text-xs text-gray-500">Today at 20.00 PM</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <svg
          viewBox="0 0 1440 120"
          className="relative block w-full h-[60px]"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 C576,33.6 768,86.4 1440,0 L1440,120 L0,120 Z"
            fill="#fff"
            className="transition duration-300 ease-in-out"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Background Gradient Circles */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />
    </div>
  );
}
