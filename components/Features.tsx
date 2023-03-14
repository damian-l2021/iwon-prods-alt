import React from "react";

export default function Features() {
  return (
    <div id="features" className="flex min-h-[100vh] items-center justify-center bg-darkGray">
      <div className="container mx-auto flex h-[50vh] w-[1270px] flex-col justify-start gap-[64px]">
        <h1 className="proxima-black text-center text-5xl text-lighterGray">
          Nuestra Propuesta
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col gap-[16px] rounded-[30px] bg-darkGreen p-10">
            <h1 className="proxima-bold text-2xl text-lighterGray">Lorem</h1>
            <p className="proxima-light text-base text-lightGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              recusandae!
            </p>
            <a href="#" className="text-lg text-lighterGray">
              Filmar Ahora
            </a>
          </div>
          <div className="flex flex-col gap-[16px] rounded-[30px] bg-darkGreen p-10">
            <h1 className="proxima-bold text-2xl text-lighterGray">Lorem</h1>
            <p className="proxima-light text-base text-lightGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              recusandae!
            </p>
            <a href="#" className="text-lg text-lighterGray">
              Filmar Ahora
            </a>
          </div>
          <div className="flex flex-col gap-[16px] rounded-[30px] bg-darkGreen p-10">
            <h1 className="proxima-bold text-2xl text-lighterGray">Lorem</h1>
            <p className="proxima-light text-base text-lightGray">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid,
              recusandae!
            </p>
            <a href="#" className="text-lg text-lighterGray">
              Filmar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
