"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import { useEffect, useState } from "react";

export default function Home() {
  const [video, setVideo] = useState("/videos/trailer.mp4");

  return (
    <div className="flex flex-col">
      <div>
        <video
          className="fixed top-0 z-[-10] w-full md:flex"
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
