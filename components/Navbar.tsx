"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar(props: any) {
  const [menuVisible, isMenuVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isMenuVisible(true);
    }, 500);
  }, [menuVisible]);

  return (
    <div
      className={`absolute left-0 right-0
    mx-auto flex w-[600px] translate-y-[-100px] items-center 
    justify-between rounded-bl-[30px] rounded-br-[30px] bg-[#383838] py-6 
    px-8 shadow-[0_11px_29px_#222222] xl:w-[1275px] transition transform duration-[.5s] ease-out  ${
      menuVisible ? "translate-y-[0]" : ""
    }`}
    >
      <a href="/">
        <Image src="/images/iwon-logo.svg" alt="image" width={80} height={0} />
      </a>
      <div className="mx-[20px] flex gap-[60px] text-[1rem]">
        <a
          className="font-medium tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          href="/producciones"
        >
          Producciones
        </a>
        <a
          className="overflow-hidden font-medium
           tracking-widest text-lighterGray
         duration-300 hover:text-lightGreen"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          href="/videos"
        >
          Promos
        </a>
        <a
          className="overflow-hidden font-medium tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
          style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
          href="/sorteo"
        >
          Sorteo
        </a>
      </div>
    </div>
  );
}
