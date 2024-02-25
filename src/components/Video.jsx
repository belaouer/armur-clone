import React from "react";

const Video = () => {
  return (
    <video
      className="absolute top-0 object-cover w-full h-full opacity-50"
      autoPlay
      muted
      loop
    >
      <source
        src="https://assets-global.website-files.com/65418d587c283640ab4fbb64/6563312ee79197d7d7c454ec_GettyImages-1370362961-transcode.mp4"
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
