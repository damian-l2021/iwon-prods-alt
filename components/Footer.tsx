import Image from "next/image"

export default function Footer(props:any){
    return (
        <div className=" h-[380px] w-full bg-zinc-800">
            <div className="flex flex-col w-[975px] h-full mx-auto justify-center gap-[50px] text-zinc-400 text-[10px] font-light">
                <div className="flex justify-between">
                    <div className="flex flex-col gap-4">
                        <Image src="/iwon-logo.svg" alt="image" width={80} height={0} />
                        <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[14px]">Quienes Somos</a>
                            <a href="#">Dónde Estámos</a>
                            <a href="#">Nuestro Compromiso</a>
                            <a href="#">Saber Más</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[14px]">Equipo</a>
                            <a href="#">Cámara</a>
                            <a href="#">Estudio</a>
                            <a href="#">Colaboradores</a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-[14px]">Acerca</a>
                            <a href="#">iWon Studios</a>
                            <a href="#">Sorteo Videoclips</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-[14px]">
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
    )
}