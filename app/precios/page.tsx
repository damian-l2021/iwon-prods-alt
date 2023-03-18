"use client";
import React, { useEffect, useState } from "react";
import { BsInstagram, BsWhatsapp, BsCheckCircleFill } from "react-icons/bs";
import getOS from "../../utils/getOS";
import os from "os";

const linkCel =
  "https://api.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20Quiero%20Participar%20Del%20Sorteo!";
const linkPC =
  "https://web.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20Quiero%20Participar%20Del%20Sorteo!";
export default function Precios() {
  let navigator = os.platform();

  const isHovering = (e: any) => {
    console.log(e);
  };

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", e => {

    })
  }, []);

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-10 pt-[200px]">
      {/*################## CONTAINER #########################*/}
      <div className="flex flex-col gap-10">
        <h1 className="proxima-black mb-10 text-center text-6xl text-lighterGray">
          Precios
        </h1>
        {/*################## CARDS #########################*/}
        <div className="grid w-[400px] grid-cols-1 gap-10 xl:w-[1270px] xl:grid-cols-3">
          {/*################## CARD #########################*/}
          <div
            data-card
            id="1"
            className="group col-span-1 min-h-[200px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen"
          >
            <div className="flex h-full flex-col items-center justify-start p-4">
              <div className="row-span-1 mb-4 h-[120px]">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                  One Shot
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                    <del>$29.900</del>
                  </span>
                  <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                    $10.900
                  </span>
                </div>
              </div>
              <div className="h-[400px] w-[270px]">
                <div className="proxima-light text-start text-xl leading-10 text-lighterGray transition-colors group-hover:text-darkGray">
                  <div className="flex gap-8">
                    <div className="pt-2">
                      
                      <BsCheckCircleFill
                        className="fill-lightGreen group-hover:fill-darkGray transition-colors"
                      />
                    </div>
                    Jornada de 4 horas
                  </div>
                  <div className="flex gap-8">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    1 Locación
                  </div>
                  <div className="flex gap-8">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Incluye Trailer De Lanzamiento
                  </div>
                  <div className="flex gap-8">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Entrega En El Día
                  </div>
                  <div className="flex gap-8">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Ideal Para Lanzamientos Rápidos
                  </div>
                </div>
              </div>
              <div className="mb-4 mt-10">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray transition-colors duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] group-hover:bg-darkGray md:text-xl`}
                  target="_blank"
                >
                  <div>
                    <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                  </div>
                  <span className="text-lighterGray transition-all">
                    RESERVAR AHORA
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/*################## CARD #########################*/}
          <div
            data-card
            id="2"
            className="col-span-1 min-h-[400px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen"
          >
            <div className="flex h-full flex-col items-center justify-start p-4 group">
              <div className="row-span-1 mb-4 h-[120px] ">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                  Videoclip
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                    <del>$79.900</del>
                  </span>
                  <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">$25.900</span>
                </div>
              </div>
              <div className="h-[400px] w-[270px]">
                <div className="proxima-light text-start text-xl leading-10 text-lighterGray">
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Completo
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    2 Locaciones
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Incluye Iluminación Básica
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Incluye Trailer De Lanzamiento
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Entrega en 1 semana
                  </div>
                </div>
              </div>
              <div className="mb-4 mt-10">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] group-hover:bg-darkGray md:text-xl`}
                  target="_blank"
                >
                  <div>
                    <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                  </div>
                  <span className="text-lighterGray transition-all">
                    RESERVAR AHORA
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/*################## CARD #########################*/}
          <div
            data-card
            id="3"
            className="col-span-1 min-h-[400px] rounded-md border-2 border-lightGreen transition-colors hover:bg-lightGreen group"
          >
            <div className="flex h-full flex-col items-center justify-start p-4">
              <div className="row-span-1 mb-4 h-[120px]">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray transition-colors group-hover:text-darkGray">
                  Videoclip Avanzado
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray transition-colors group-hover:text-darkGray">
                    <del>$110.000</del>
                  </span>
                  <span className="text-4xl text-lighterGray transition-colors group-hover:text-darkGray">$60.900</span>
                </div>
              </div>
              <div className="h-[400px] w-[270px]">
                <div className="proxima-light flex flex-col text-start text-xl leading-10 text-lighterGray">
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Completo
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    3 Locaciones
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Diferentes Lentes
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Iluminación Profesional
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Estabilizador
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Incluye Fotos
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Incluye Portada
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Video Vertical Para Historia
                  </div>
                  <div className="flex gap-8 transition-colors group-hover:text-darkGray">
                    <div className="pt-2">
                      <BsCheckCircleFill className="fill-lightGreen group-hover:fill-darkGray transition-colors" />
                    </div>
                    Entrega en 1 semana
                  </div>
                </div>
              </div>
              <div className="mb-4 mt-10">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] group-hover:bg-darkGray md:text-xl`}
                  target="_blank"
                >
                  <div>
                    <BsWhatsapp size={"28px"} color={"#f7f7f7"} />
                  </div>
                  <span className="text-lighterGray transition-all">
                    RESERVAR AHORA
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto h-[5px] w-[400px] translate-y-[40px] rounded-[50%] bg-lightGreen shadow-[0_11px_29px_#5FFC7B]"></div>
      {/*################## PROMO SORTEO #########################*/}
      <div className="mt-16 flex flex-col gap-10">
        <h1 className="proxima-black text-center text-6xl text-lighterGray">
          Promoción Sorteo VideoClip
        </h1>
        <p className="proxima-light text-center text-2xl text-lighterGray">
          Entra a nuestro instagram y participa!
        </p>
        <div className="mb-4 flex justify-center">
          <a
            href="https://www.instagram.com/p/Cp6JZXNrtk5/"
            className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-[#833AB4] bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#833AB4] md:text-xl`}
            target="_blank"
          >
            <div>
              <BsInstagram size={"28px"} color={"#f7f7f7"} />
            </div>
            <span className="text-lighterGray transition-all">Inscribirse</span>
          </a>
        </div>
      </div>
    </div>
  );
}
