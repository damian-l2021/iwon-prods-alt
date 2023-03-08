import Image from "next/image";

export default function NavBar(props: any) {
    return (
        <div className="flex justify-between items-center w-[975px] mx-auto py-6 px-8 bg-[#383838] rounded-bl-[30px] rounded-br-[30px] shadow-[0_11px_29px_#222222]">
            <a href="/">
                <Image src="/iwon-logo.svg" alt="image" width={60} height={0} />
            </a>
            <div className="flex gap-[40px] text-sm">
                <a className="relative group font-medium overflow-hidden text-[#C8C8C8]" href="/producciones">
                    Producciones
                    <div className="w-1/3 h-[5px] relative translate-x-[-70px] my-1 bg-[#c8c8c8] rounded-md group-hover:translate-x-[100%] group-hover:transition-transform"></div>
                </a>
                <a className="relative group font-medium overflow-hidden text-[#C8C8C8]" href="/videos">
                    Videos
                    <div className="w-1/3 h-[5px] relative translate-x-[-70px] my-1 bg-[#c8c8c8] rounded-md group-hover:translate-x-[100%] group-hover:transition-transform"></div>
                </a>
                <a className="relative group font-medium overflow-hidden text-[#C8C8C8]" href="/sorteo">
                    Sorteo
                    <div className="w-1/3 h-[5px] relative translate-x-[-70px] my-1 bg-[#c8c8c8] rounded-md group-hover:translate-x-[100%] group-hover:transition-transform"></div>
                </a>
            </div>
        </div>
    );
}
