import React from "react";
import Tag from "./Tag";
import Video from "./Video";
import Enter from "./Enter";
import Text from "./Text";

const Intro = () => {
  return (
    <div className="w-screen h-screen relative  flex flex-col justify-between items-center p-6 text-[#fc1234]">
      <Tag />
      <Enter />
      <Text />
      <Video />
    </div>
  );
};

export default Intro;
