import React from "react";
import { playVideo, pauseVideo } from "../utils/handleVideo";

export default function Video({ src }: any) {
  return (
    <video
      data-video
      className="rounded-[30px] transition duration-1000 hover:scale-110"
      width={400}
      muted
      src={src}
      onMouseOver={(e) => playVideo(e.target)}
      onMouseLeave={(e) => pauseVideo(e.target)}
    ></video>
  );
}
