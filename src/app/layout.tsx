import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Footer} from "@/components/layout/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "KMRM - Shots",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className='h-full overflow-hidden'>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased 
                h-[100dvh] w-full bg-[#0a0a0a] text-white overflow-hidden relative m-0`}
        >
        {/* 1. Le contenu qui scrolle en toute indépendance */}
        <main className="h-full w-full overflow-y-auto overflow-x-hidden">
            {children}

            {/* 2. Un espace vide (spacer) pour que le contenu ne passe pas
                           SOUS le footer à la fin du scroll */}
        </main>

        {/* 3. Le Footer en position absolue/fixe */}
        <Footer/>
        </body>
        </html>
    );
}
