import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import getOS from "../../utils/getOS";
import os from "os";

export default function Precios() {
  const linkCel =
    "https://api.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20Quiero%20Participar%20Del%20Sorteo!";
  const linkPC =
    "https://web.whatsapp.com/send?phone=5491159427230&text=Hola%2C%20Quiero%20Participar%20Del%20Sorteo!";

  let navigator = os.platform();

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-10 py-[200px]">
      {/*################## CONTAINER #########################*/}
      <div className="flex flex-col gap-10">
        <h1 className="proxima-black text-center text-6xl text-lighterGray">
          Precios
        </h1>
        {/*################## CARDS #########################*/}
        <div className="grid w-[400px] grid-cols-1 gap-10 xl:w-[1270px] xl:grid-cols-3">
          {/*################## CARD #########################*/}
          <div className="col-span-1 h-[400px] rounded-md border-2 border-lightGreen">
            <div className="grid grid-rows-3 items-center justify-center p-4">
              <div className="row-span-1 mb-4">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray">
                  Videoclip
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray">
                    <del>$79.900</del>
                  </span>
                  <span className="text-4xl text-lighterGray">$20.900</span>
                </div>
              </div>
              <div>
                <p className="proxima-light text-center text-xl text-lighterGray">
                  Completo <br />
                  3 Escenarios <br />
                  Vestuario <br />
                  Entrega en 1 semana <br />
                </p>
              </div>
              <div className="mb-4">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] md:text-xl`}
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
          <div className="col-span-1 h-[400px] rounded-md border-2 border-lightGreen">
            <div className="grid grid-rows-3 items-center justify-center p-4">
              <div className="row-span-1 mb-4">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray">
                  One Shot
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray">
                    <del>$29.900</del>
                  </span>
                  <span className="text-4xl text-lighterGray">$10.900</span>
                </div>
              </div>
              <div>
                <p className="proxima-light text-center text-xl text-lighterGray">
                  Jornada de 4 horas <br />
                  1 escenario <br />
                  entrega en el dia <br />
                  Ideal para lanzamientos rápidos <br />
                </p>
              </div>
              <div className="mb-4">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] md:text-xl`}
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
          <div className="col-span-1 h-[400px] rounded-md border-2 border-lightGreen">
            <div className="grid grid-rows-3 items-center justify-center p-4">
              <div className="row-span-1 mb-4">
                <h1 className="proxima-bold text-center text-4xl text-lighterGray">
                  Videoclip
                </h1>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl text-lighterGray">
                    <del>$29.900</del>
                  </span>
                  <span className="text-4xl text-lighterGray">$10.900</span>
                </div>
              </div>
              <div>
                <p className="proxima-light text-center text-xl text-lighterGray">
                  Completo <br />
                  3 Escenarios <br />
                  Vestuario <br />
                  Entrega en 1 semana <br />
                </p>
              </div>
              <div className="mb-4">
                <a
                  href={`${getOS(navigator, linkCel, linkPC)}`}
                  className={`proxima-bold group group relative flex w-max items-center gap-[20px] rounded-[40px] border-2 border-lightGreen bg-transparent px-[30px] py-[15px] text-lg text-lighterGray duration-[.2s] hover:shadow-[0_0_20px_#5FFC7B] md:text-xl`}
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
      <br />
      {/*################## PROMO SORTEO #########################*/}
      <div className="flex flex-col gap-10">
        <h1 className="proxima-black text-center text-6xl text-lighterGray">
          Promoción Sorteo
        </h1>
      </div>
    </div>
  );
}
