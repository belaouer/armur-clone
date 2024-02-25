"use Client";
import React, { useState } from "react";
import Animation from "./Animation";

const PageTransition = ({ children }) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="relative w-screen h-screen">
      {!isComplete ? <Animation setIsComplete={setIsComplete} /> : children}
    </div>
  );
};

export default PageTransition;
