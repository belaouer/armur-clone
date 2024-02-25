"use client";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Image from "next/image";

import React from "react";

const Home = () => {
  return (
    <PageTransition>
      <Navbar />
      <section className="relative h-screen w-full  ">
        <div className="w-full h-full flex flex-col justify-center items-center px-10 pt-20">
          <p className="hero text-[#c00e28] tracking-tighter">ARMUR</p>
          <div className="w-full ">
            <div className="text-[#b6b5b587] text-[0.77em] font-bold leading-3">
              <p>SPECIAL EFFECTS.</p>
              <p>PRODUCTION DESIGN</p>
              <p>COSTUMING</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
          <div className="relative py-20 w-[80%] h-full">
            <Image src="/armur.png" objectFit="cover" fill priority />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
