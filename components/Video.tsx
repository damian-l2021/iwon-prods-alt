import React from "react";
import { playVideo, pauseVideo } from "../utils/handleVideo";
import getWindowWidth from "../utils/getWindowWidth";

export default function Video({ src, poster }: any) {

  const windowWidth = getWindowWidth();

  return (
    <div>
      {windowWidth <= 640 
      ? 
      <video
        data-video
        className="transition duration-300"
        width={400}
        poster={poster}
        controls
        src={src}
      ></video>
      : 
      <video
        data-video
        className="transition duration-300 xl:hover:scale-[1.5]"
        width={400}
        poster={poster}
        src={src}
        muted={true}
        onMouseOver={(e) =>
           setTimeout(() => { playVideo(e.target) }, 1000) }
        onMouseOut={(e) => pauseVideo(e.target)}
      ></video>
    }
    </div>
  );
}
