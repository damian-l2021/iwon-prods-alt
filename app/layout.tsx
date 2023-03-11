import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import '../styles/output.css'
import  { Poppins }  from "next/font/google"

const poppins = Poppins({
    weight: "500",
    subsets: ['latin']
})

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang='es'>
            <body className={`bg-[#2c2c2c] ${poppins.className}`}>
                <NavBar />
                <main className='mx-auto flex items-center justify-center w-[600px] p] xl:w-auto h-screen'>{children}</main>
                {/* <Footer /> */}
            </body>
        </html>
    )
}