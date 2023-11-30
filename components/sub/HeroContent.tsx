"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center gap-10 px-5 lg:px-20 mt-28 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#fafafa8b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-white text-[13px]">
            Mern stack developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#07bee2]">
            I Build Value
            </span>
            Through design
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500  font-md my-5 max-w-[600px]"
        >
          Full stack developer proficient in MERN stack and Next.js,
          creating dynamic and efficient web applications with a
          keen eye for modern design and seamless user experiences
        </motion.p>

        <motion.a
          href="my-cv.pdf"
          download="my-cv.pdf"
          target="_black"
          variants={slideInFromLeft(1)}
          className="py-2 bg-cyan-700 text-center text-lg text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download my resume
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden lg:flex w-full h-full justify-center items-center ml-40"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
