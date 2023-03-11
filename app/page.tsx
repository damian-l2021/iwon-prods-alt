import { url } from "inspector";
import { Roboto_Serif, Montserrat } from "next/font/google";
import { BsWhatsapp } from "react-icons/bs";

const roboto_serif = Roboto_Serif({
  subsets: ["latin"],
  weight: "300",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "800",
});

const montserrat_light = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-[200px] w-full">
      {/* background video */}
      <video
        className="z-[-10] top-[-50%] fixed w-[1920px] h-[1080px] blur-[100px]"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="z-[-10] fixed w-[1920px] h-[1080px]"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
      ></video>
      <video
        className="z-[-20] fixed bottom-[-50%] w-[1920px] h-[1080px] blur-[100px]"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
      ></video>
      {/* main text */}
      <div className="flex flex-col gap-[20px] items-center w-[600px] xl:w-[1275px]
      xl:mt-0 mt-[150px]">
        <h1
          className={`leading-[90px] text-center text-[#fff] text-[64px] ${montserrat.className}`}
        >
          Participa En Nuestro <br />
          <span className="bg-[#5FFC7B] text-[#2c2c2c] py-2 px-4">
            Sorteo De Videoclips
          </span>{" "}
          <br />
          En Calidad De Cine.
        </h1>
        <p
          className={`text-[16px] text-center text-[#aaaaaa] w-[90%] ${montserrat_light.className}`}
        >
          Envia a nuestro WhatsApp un mensaje diciendo "QUIERO PARTICIPAR".
        </p>
        <a
          href="#"
          className={`text-[24px] text-[#2c2c2c]
         px-[45px] py-[22.5px] 
         bg-[#5FFC7B] shadow-[0_11px_19px_#222222d9] 
         w-max rounded-[40px] my-[20px] flex items-center gap-[20px] ${montserrat.className}`}
        >
          <BsWhatsapp size={"30px"} color={"#2c2c2c"} />{" "}
          <span className="text-[#2c2c2c]">QUIERO PARTICIPAR</span>
        </a>
      </div>
      {/* <div className="flex w-[40%] h-[400px] justify-center items-start">
        <video id="hero-video" className="rounded-[30px]" autoPlay muted>
          <source src="/hero-video.mp4" type="video/mp4"/>
        </video>
      </div> */}
    </div>
  );
}
