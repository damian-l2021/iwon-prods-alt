"use client"
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/output.css";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";
import handleMenu from "../utils/handleMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (

    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`bg-darkGray proxima`}>
        <NavBar />
        <Menu isActive={false}/>
        <main className="mx-auto xl:w-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
