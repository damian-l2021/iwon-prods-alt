import React from "react";
import getOS from "../utils/getOS";
import os from "os";
import { BsWhatsapp } from "react-icons/bs";

export default function Features() {
  const linkCel = "https://wa.link/pfrb02";
  const linkPC =
    "https://web.whatsapp.com/send?phone=541128197638&text=Quiero%20Participar%20Del%20Sorteo!";

  let navigator = os.platform();

  return (
    <div
      id="features"
      className="relative flex h-screen w-full items-center justify-center bg-darkGray"
    >
      {/*################## LIGHTS ###########################*/}
      <div className="absolute right-[30px] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:flex"></div>
      <div className="absolute left-[30px] top-[25%] hidden h-[400px] w-[10px] rounded-md bg-lightGreen shadow-[0_11px_29px_#5FFC7B] xl:flex"></div>
      <div className="mx-[200px] flex flex-col items-center justify-center">
        <h2 className="proxima-bold mb-6 text-center text-6xl text-lighterGray">
          <span className="mb-2 inline-block">Participa En Nuestro Sorteo</span>{" "}
          <br /> De Videoclips En Calidad De Cine.
        </h2>
        <p className="proxima mb-6 text-center text-3xl text-lightGray">
          Hay Ganadores Todos Los Meses!
        </p>
        <div className="relative">
          <a
            href={`${getOS(navigator, linkCel, linkPC)}`}
            className={`proxima-bold group group relative my-[20px] flex w-max items-center gap-[20px] rounded-[40px] bg-darkGreen px-[45px] py-[22.5px] text-[20px] text-lighterGray duration-[.2s] hover:outline hover:outline-8 hover:outline-lightGreen shadow-[0_5px_10px_#5FFC7B]`}
            target="_blank"
          >
            <div>
              <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
            </div>
            <span className="text-lighterGray transition-all">
              QUIERO PARTICIPAR
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
