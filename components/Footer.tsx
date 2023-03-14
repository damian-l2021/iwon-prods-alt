import Image from "next/image";

export default function Footer(props: any) {
  return (
    <div className="relative flex justify-center items-center h-[50vh] w-full bg-zinc-800">
      <div className="flex w-[975px] flex-col justify-end gap-[180px] text-[10px] font-light text-zinc-400">
        <div className="flex justify-around">
          <div className="flex flex-col gap-4">
            <Image
              src="images/iwon-logo.svg"
              alt="image"
              width={80}
              height={0}
            />
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="flex gap-[50px]">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[14px]">
                Quienes Somos
              </a>
              <a href="#">Dónde Estámos</a>
              <a href="#">Nuestro Compromiso</a>
              <a href="#">Saber Más</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[14px]">
                Equipo
              </a>
              <a href="#">Cámara</a>
              <a href="#">Estudio</a>
              <a href="#">Colaboradores</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="#" className="text-[14px]">
                Acerca
              </a>
              <a href="#">iWon Studios</a>
              <a href="#">Sorteo Videoclips</a>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0 flex flex-col items-center gap-[14px] mb-10">
          <div className="flex gap-[20px]">
            <a href="#">Politicas</a>
            <a href="#">Garantia</a>
            <a href="#">Sorteo</a>
            <a href="#">Reembolso</a>
          </div>
          <div>
            <p>iWon Prods ©. 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
