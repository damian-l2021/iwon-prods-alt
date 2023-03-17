"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import { useEffect, useState } from "react";

export default function Home() {
  const [video, setVideo] = useState("/videos/trailer.mp4");

  useEffect(() => {
    innerWidth < 640 ? setVideo("/videos/video-vertical.mp4") : setVideo("/videos/trailer.mp4");
  }, [])
  

  return (
    <div className="flex flex-col">
      <div className="">
        <video
          className="fixed right-0 bottom-0 z-[-10] min-w-full scale-150 min-h-full md:flex"
          src={video}
          autoPlay
          muted
          loop
        ></video>
      </div>
      {/* hero */}
      <Hero />
      {/* producciones */}
      <div id="features">
        <Features />
      </div>
    </div>
  );
}
