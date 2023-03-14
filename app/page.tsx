"use client";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Works from "../components/Works";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
  const [video, setVideo] = useState("/videos/hero-video.mp4");

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if(scrollY >= 1080) {
        setVideo("/videos/video-prueba-1.mp4");
      } else {
        setVideo("/videos/hero-video.mp4")
      }
    })
  }, [])
  
  return (
    <div className="flex flex-col">
      <video
        className="fixed z-[-10]
            xl:h-[1080px] xl:w-[1920px]"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      {/* hero */}
      <Hero />
      {/* producciones */}
      <Features />
      <Works
        song="Matamo' La Calle"
        artist="Callejero"
      />
      <Footer />
    </div>
  );
}
