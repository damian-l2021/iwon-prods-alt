import React from "react";
import { BsWhatsapp, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";
import os from "os";
import getOS from "../../utils/getOS";

export default function Contacto() {
  let navigator = os.platform();
  const linkCel =
    "https://api.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20quiero%20filmar!";
  const linkPC =
    "https://web.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20quiero%20filmar!";

  return (
    <div>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <div className="rounded-[30px] border-2 border-lightGreen py-10 px-16">
          <h1 className="proxima-black mb-14 text-6xl text-lighterGray">
            Contacto
          </h1>
          <div className="grid grid-cols-3 gap-16">
            <div className="flex items-center justify-center">
              <a
                href="https://www.instagram.com/iwon.audiovisual/"
                target={"_blank"}
              >
                <BsInstagram size={"40px"} color={"#5FFC7B"} />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a
                href={`${getOS(navigator, linkCel, linkPC)}`}
                target={"_blank"}
              >
                <BsWhatsapp size={"40px"} color={"#5FFC7B"} />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://www.youtube.com/" target={"_blank"}>
                <BsYoutube size={"40px"} color={"#5FFC7B"} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="absolute bottom-10 h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen blur-md"></div>
      </div>
    </div>
  );
}
