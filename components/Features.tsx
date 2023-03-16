import React from "react";

export default function Features() {
  return (
    <div id="features" className="flex py-10 md:py-[272px] items-center justify-center bg-darkGray">
      <div className="md:w-[1275px] mx-auto flex w-full flex-col justify-start gap-[64px]">
        <h1 className="proxima-black text-center text-5xl text-lighterGray">
          Nuestra Propuesta
        </h1>
        <div className="flex w-72 xl:w-auto mx-auto gap-10">
          <div className="rounded-[30px] bg-lightGreen w-5 shadow-[0_11px_29px_#5FFC7B] h-[400px] my-auto">
          </div>
          <div className="flex flex-col gap-[16px] rounded-[30px] bg-darkGreen p-10 w-[720px] h-[600px] col-span-10 border-l-2 border-l-lightGreen border-r-2 border-r-lightGreen">
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
            <h2 className="text-center text-3xl proxima text-lighterGray">La Mejor Calidad De Video</h2>
          </div>
          <div className="flex flex-col gap-[16px] rounded-[30px] bg-lightGreen w-5 shadow-[0_11px_29px_#5FFC7B] h-[400px] my-auto">
          </div>
        </div>
      </div>
    </div>
  );
}
