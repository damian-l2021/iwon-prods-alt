"use client"
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Menu({ isVisible }: any) {
  const [isMenuVisible, setIsMenuVisible] = useState(isVisible);

  const handleClick = () => {
    isMenuVisible ? setIsMenuVisible(false) : setIsMenuVisible(true);
  };

  return (
    <div
      className={`absolute top-0 z-[100] h-screen w-full bg-darkGreen 
    ${
      isMenuVisible ? "left-0" : "left-[-1920px]"
    } items-center justify-center transition-transform`}
    >
      <button className="absolute top-4 left-4" onClick={handleClick}>
        {isMenuVisible ? (
          <IoMdClose
            className="transition-all"
            style={{ color: "#f7f7f7", fontSize: "30px" }}
          />
        ) : (
          <IoMdMenu style={{ color: "#f7f7f7", fontSize: "30px" }} />
        )}
      </button>
      <div className="flex flex-col items-center justify-center gap-10">
        <a className="proxima text-2xl text-lighterGray" href="#">
          Nuestros Trabajos
        </a>
        <a className="proxima text-2xl text-lighterGray" href="#">
          Promociones
        </a>
        <a className="proxima text-2xl text-lighterGray" href="#">
          Ganá Un Video
        </a>
      </div>
    </div>
  );
}
