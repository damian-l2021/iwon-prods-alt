"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import BurgerMenu from "./BurgerMenu";
import Menu from "./Menu";
export default function NavBar(props: any) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    isMenuVisible ? setIsMenuVisible(false) : setIsMenuVisible(true);
    console.log("click");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsNavVisible(true);
    }, 500);
  }, [isNavVisible]);

  return (
    <div
      className={`absolute left-0 right-0 proxima
    mx-auto flex w-96 translate-y-[-100px] transform 
    items-center justify-between rounded-bl-[30px] rounded-br-[30px] bg-transparent 
    py-6 px-8 transition duration-[.5s] ease-out lg:w-[1275px]  ${
      isNavVisible ? "translate-y-[0]" : ""
    } border-b-2 border-b-lightGreen`}
    >
      <a href="/">
        <Image src="/images/iwon-logo.svg" alt="image" width={80} height={0} />
      </a>
      <div>
        <div className={`flex lg:hidden`}>
          <BurgerMenu isActive={isMenuVisible} />
        </div>
        <div className={`mx-[20px] hidden gap-10 text-[1.2rem] lg:flex`}>
          <a
            className="proxima tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/producciones"
          >
            Producciones
          </a>
          <a
            className="overflow-hidden proxima
           tracking-widest text-lighterGray
         duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/videos"
          >
            Promos
          </a>
          <a
            className="overflow-hidden proxima tracking-widest text-lighterGray
          duration-300 hover:text-lightGreen"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.5)" }}
            href="/sorteo"
          >
            Sorteo
          </a>
        </div>
      </div>
    </div>
  );
}
