"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp, BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";
import { Roboto_Serif, Montserrat } from "next/font/google";

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  weight: "300",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const montserrat_light = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

function Hero() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSocialVisible(true);
    }, 500);
    setTimeout(() => {
      setIsTitleVisible(true);
    }, 1000);
    setTimeout(() => {
      setIsSubtitleVisible(true);
    }, 1500);
    setTimeout(() => {
      setIsButtonVisible(true);
    }, 2000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsSocialVisible(true);
    }, 500);
  }, [isSocialVisible]);

  return (
    <div
      className="flex h-screen w-full items-center justify-center
  gap-[200px] overflow-hidden"
    >
      {/* background video */}
      {/* social */}
      <div
        className={`absolute left-[20px] translate-x-[-100px] flex flex-col gap-[20px]
          rounded-[15px] bg-[#2c2c2c] p-[15px] transition transform duration-[.5s] ease-out ${isSocialVisible ? "translate-x-[0]" : ""}`}
      >
        <a href="https://www.youtube.com/@leonwayne6973" target="_blank">
          <BsYoutube color="#f7f7f7" size="20px" />
        </a>
        <a href="https://www.instagram.com/luzeneltrap/" target="_blank">
          <BsInstagram color="#f7f7f7" size="20px" />
        </a>
        <a href="https://www.tiktok.com/@leonwaayne?lang=en" target="_blank">
          <BsTiktok color="#f7f7f7" size="20px" />
        </a>
      </div>
      {/* main text */}
      <div
        className="mt-[150px] flex h-full min-w-[600px] flex-col items-center justify-center gap-[20px]
      xl:mt-0 xl:min-w-[1275px]"
      >
        <h1
          className={`proxima-black text-center text-[64px] font-bold leading-[90px] text-[#fff] opacity-0 duration-700 ${
            isTitleVisible ? "opacity-100" : ""
          }`}
        >
          Participa En Nuestro <br />
          <span className="bg-lightGreen py-2 px-4 text-[#2c2c2c]">
            Sorteo De Videoclips
          </span>{" "}
          <br />
          En Calidad De Cine.
        </h1>
        <p
          className={`proxima w-[90%] text-center text-[24px] text-[#aaaaaa] opacity-0 duration-700 ${
            isSubtitleVisible ? "opacity-100" : ""
          }`}
        >
          Envia a nuestro WhatsApp un mensaje diciendo "QUIERO PARTICIPAR".
        </p>
        <a
          href="#"
          className={`proxima-bold my-[20px] flex w-max
         items-center gap-[20px] rounded-[40px]
         bg-[#5FFC7B] px-[45px]
         py-[22.5px] text-[24px] text-[#2c2c2c] opacity-0 shadow-[0_11px_19px_#222222d9] duration-700 ${
           isButtonVisible ? "opacity-100" : ""
         }`}
        >
          <BsWhatsapp size={"30px"} color={"#2c2c2c"} />{" "}
          <span className="text-[#2c2c2c]">QUIERO PARTICIPAR</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
