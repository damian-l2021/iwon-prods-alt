import React from "react";

export default function Works({ song, artist }: any) {
  return (
    <div className="relative flex h-[100vh] w-full items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div
          className="flex flex-col gap-[16px] rounded-[30px]
         border-4 border-darkGreen bg-transparent p-4 backdrop-blur"
        >
          <h1 className="proxima-bold text-center text-4xl text-lighterGray">
            BOBO
          </h1>
          <p className="proxima-light text-center text-base text-lightGray">
            Maria Angelic x Maria Becerra x Bag Gyal
          </p>
        </div>
      </div>
    </div>
  );
}
