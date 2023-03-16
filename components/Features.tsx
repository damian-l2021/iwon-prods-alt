import React from "react";

export default function Features() {
  return (
    <div
      id="features"
      className="flex items-center justify-center bg-lighterGray py-10 md:py-[272px]"
    >
      <div className="grid grid-cols-2 gap-10 w-[1272px] h-[720px]">
        <div className="col-span-1 w-auto bg-darkGreen rounded-[30px]"></div>
        <div className="col-span-1 grid grid-rows-2 gap-10">
          <div className="w-auto bg-darkGreen rounded-[30px]"></div>
          <div className="w-auto bg-darkGreen rounded-[30px]"></div>
        </div>
      </div>
    </div>
  );
}
