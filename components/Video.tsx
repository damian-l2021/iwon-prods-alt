import React from "react";
import { playVideo, pauseVideo } from "../utils/handleVideo";

export default function Video({ src, poster }: any) {
  return (
    <video
      data-video
      className="transition duration-300 xl:hover:scale-[2]"
      width={400}
      muted
      poster={poster}
      src={src}
      onMouseOver={(e) =>
         setTimeout(() => { playVideo(e.target) }, 1000) }
      onMouseOut={(e) => pauseVideo(e.target)}
    ></video>
  );
}
