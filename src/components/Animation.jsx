"use Client";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";

const Animation = ({ setIsComplete }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = async () => {
      await animate(
        ".line",
        { height: "10px", backgroundColor: "#c00e28" },
        { duration: 0.3 }
      );
      await animate(
        ".line",
        { width: "100%" },
        { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
      );
      animate(
        ".top",
        { height: 0 },
        { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
      );
      animate(".line", { opacity: 0 });
      animate(".logo", { opacity: 1 });
      await animate(
        ".bottom",
        { height: 0 },
        { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
      );
      animate(
        ".left",
        { width: "50vw" },
        { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
      );
      await animate(
        ".right",
        { width: "50vw" },
        { duration: 1.2, ease: [0.87, 0, 0.13, 1] }
      );

      setIsComplete(true);
    };
    startAnimation();
  }, []);
  return (
    <div
      ref={scope}
      className="relative w-full h-full bg-[#c00e28] flex justify-center items-center"
    >
      <h1 className="logo text-black opacity-0">ARMUR</h1>
      <div className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black w-1  z-10" />
      <div className="top absolute top-0 w-full h-[50vh] bg-black" />
      <div className="bottom absolute bottom-0 w-full h-[50vh] bg-black" />
      <div className="left absolute left-0 w-0 h-full bg-black" />
      <div className="right absolute right-0 w-0 h-full bg-black" />
    </div>
  );
};

export default Animation;
