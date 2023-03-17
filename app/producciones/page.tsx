"use client";
import { useEffect } from "react";
import Video from "../../components/Video";

export default function Producciones() {
  return (
    <div className="flex w-full items-center justify-center xl:pt-[200px] xl:pb-[40px]">
      <div className="mt-[200px] w-full xl:my-0 xl:w-[1270px]">
        <h1 className="proxima-black mb-10 text-center text-4xl text-lighterGray xl:text-6xl">
          Nuestros Trabajos
        </h1>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-3 mb-10">
          <div className="col-span-1">
            <Video src="/videos/antes-27.mp4" poster="/images/poster-27.jpeg" />
          </div>
          <div className="col-span-1">
            <Video
              src="/videos/hero-video.mp4"
              poster="/images/poster-400.jpeg"
            />
          </div>
          <div className="col-span-1">
            <Video src="/videos/ensimota.mp4" poster="/images/poster-ensimota.jpeg"/>
          </div>
          <div className="col-span-1">
            <Video src="/videos/mi-puta.mp4" />
          </div>
        </div>
        <div className="mx-auto translate-y-[40px] h-[5px] w-[400px] rounded-[50%] bg-lightGreen blur-md"></div>
      </div>
    </div>
  );
}
