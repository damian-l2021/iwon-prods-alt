"use client";
import { useEffect } from "react";
import Video from "../../components/Video";

export default function Producciones() {


  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="proxima-black mb-10 text-center text-6xl text-lighterGray">
          Nuestros Trabajos
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-1">
            <Video src="/videos/antes-27.mp4"/>
          </div>
          <div className="col-span-1">
            <Video src="/videos/hero-video.mp4"/>
          </div>
          <div className="col-span-1">
            <Video src="/videos/ensimota.mp4"/>
          </div>
          <div className="col-span-1">
            <Video src="/videos/mi-puta.mp4"/>
          </div>
        </div>
      </div>
    </div>
  );
}
