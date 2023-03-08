import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import '../styles/output.css'

export default function RootLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <html lang='es'>
            <body className='bg-[#2c2c2c]'>
                <Image 
                    src='/blob.svg'
                    height={100} 
                    width={100} 
                    alt="blob" 
                    style={{position:'absolute', top:"400px", left:"200px", filter:"blur(100px)"}}
                    />
                <NavBar />
                <main className='flex items-center justify-center h-screen'>{children}</main>
                <Footer />
            </body>
        </html>
    )
}