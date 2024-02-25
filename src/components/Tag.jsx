import Image from "next/image";
import React from "react";

const Tag = () => {
  return (
    <div className="relative w-[6em] h-[3em]">
      <Image
        src="https://assets-global.website-files.com/65418d587c283640ab4fbb64/655ca439b716711d50ee7a99_tag-intro.svg"
        loading="lazy"
        className="z-20 "
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Tag;
