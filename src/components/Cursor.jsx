"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const cursorVariant = {
    animate: {
      x: mousePosition.x - 2,
      y: mousePosition.y - 2,
      transition: {
        duration: 0.2,
      },
    },
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      console.log(e.clientX);
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.div
      variants={cursorVariant}
      animate="animate"
      className="cursor fixed top-0 left-0 flex justify-center items-center mix-blend-difference pointer-events-none"
    >
      <motion.div
        animate={{ rotate: 360, width: [25, 35, 25], height: [25, 35, 25] }}
        transition={{
          duration: 3.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute flex justify-center items-center"
      >
        <div className="ball absolute top-0 left-0 w-1 h-1 bg-red-500 rounded-full" />
        <div className="ball absolute top-0 right-0 w-1 h-1 bg-red-500 rounded-full" />
        <div className="ball absolute bottom-0 right-0 w-1 h-1 bg-red-500 rounded-full" />
        <div className="ball absolute bottom-0 left-0 w-1 h-1 bg-red-500 rounded-full" />
      </motion.div>
      <div className="w-3 h-3 rounded-full bg-red-500 z-20" />
    </motion.div>
  );
};

export default Cursor;
