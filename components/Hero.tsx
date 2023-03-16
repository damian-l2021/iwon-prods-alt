"use client";
import React, { useEffect, useState } from "react";
import { BsWhatsapp, BsYoutube, BsInstagram, BsTiktok } from "react-icons/bs";
import { Roboto_Serif, Montserrat } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { smoothScroll } from "../utils/smoothScroll";
import getOS from "../utils/getOS";
import os from "os";

const linkCel = "https://wa.link/ydjwnw";
const linkPC =
  "https://web.whatsapp.com/send?phone=541128197638&text=Hola%2C%20quiero%20un%20video!";

function Hero() {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSubtitleVisible, setIsSubtitleVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [isSocialVisible, setIsSocialVisible] = useState(false);

  let navigator = os.platform();

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
    <div className="flex h-screen w-full items-start justify-center gap-[200px] overflow-hidden">
      {/*################## SOCIAL ###########################*/}
      <div className="absolute left-[30px] flex h-full items-center">
        <div
          className={`hidden translate-x-[-100px] transform flex-col gap-[20px]
          rounded-[15px] bg-[#2c2c2c] p-[15px] shadow-[0_11px_29px_#222222] transition duration-[.5s] ease-out xl:flex ${
            isSocialVisible ? "translate-x-[0]" : ""
          } border-r-2 border-r-lightGreen`}
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
      </div>
      {/*################## LIGHTS ###########################*/}
      <div className="absolute right-[30px] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:flex"></div>
      <div className="absolute right-[30px] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:flex"></div>
      <div className="absolute top-[25%] h-[5px] w-[200px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:hidden"></div>
      <div className="fixed top-0 z-[-9] hidden h-full w-full bg-darkGray opacity-50 md:flex"></div>
      {/*################## MAIN TEXT ###########################*/}
      <div
        className="my-auto flex max-w-[272px] flex-col items-center justify-start gap-[20px] xl:mt-0
      xl:h-screen xl:min-w-[1275px] xl:justify-center"
      >
        <h1
          className={`proxima-black text-center text-2xl font-bold text-[#fff] opacity-0 duration-700 xl:text-6xl xl:leading-[90px] ${
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
          className={`proxima-light text-center text-xs text-lighterGray opacity-0 duration-700 xl:text-xl ${
            isSubtitleVisible ? "opacity-100" : ""
          }`}
        >
          Envianos un mensaje a nuestro WhatsApp <br /> diciendo "QUIERO
          PARTICIPAR"
        </p>
        <a
          href={`${getOS(navigator, linkCel, linkPC)}`}
          className={`proxima-bold group my-[20px] flex w-max items-center gap-[20px] rounded-[40px] bg-darkGreen px-[45px] py-[22.5px] text-[20px] text-lighterGray opacity-0 shadow-[0_11px_19px_#222222d9] duration-[.2s] ${
            isButtonVisible ? "opacity-100" : ""
          } hover:outline hover:outline-8 hover:outline-lightGreen`}
          target="_blank"
        >
          <div>
            <BsWhatsapp size={"28px"} color={"#f7f7f7"} />{" "}
          </div>
          <span className="text-lighterGray">QUIERO PARTICIPAR</span>
        </a>
      </div>
      <div className="absolute bottom-10 flex justify-center">
        <a className="animate-pulse" href="#features">
          <IoIosArrowDown style={{ color: "#f7f7f7", fontSize: "40px" }} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
