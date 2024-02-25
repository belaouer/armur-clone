"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Enter = () => {
  return (
    <Link href="home">
      <div className=" cursor-pointer relative z-20 w-[12rem] h-[12rem]  flex justify-center items-center rounded-full border-[#fc123440] border-opacity-70 border-[1px] p-4 hover:scale-110 transition-transform duration-500">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          ENTER
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        >
          <Image src="/image.png" width={300} height={300} />
        </motion.div>
      </div>
    </Link>
  );
};

export default Enter;
