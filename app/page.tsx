"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import { useEffect, useState } from "react";

export default function Home() {
  const [video, setVideo] = useState("/videos/hero-video.mp4");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (scrollY >= 720) {
        setVideo("/videos/video-prueba-1.mp4");
      } else {
        setVideo("/videos/hero-video.mp4");
      }
    });

  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <video
          className="fixed top-0 z-[-10] hidden w-full md:flex"
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
      <Works song="BOBO" artist="Maria Angelic x Maria Becerra x Bag Gyal" />
    </div>
  );
}
