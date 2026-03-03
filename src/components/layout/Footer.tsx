import {SiInstagram} from '@icons-pack/react-simple-icons';
import Link from "next/link";


export const Footer = () => (
    <footer className="absolute bottom-0 w-full border-t border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto px-4 py-8 text-zinc-600 text-[10px] uppercase tracking-widest flex justify-between items-center">
            <p className="text-[10px] md:text-base">© 2026 — kmrm shots</p>
            <div className="flex gap-4">
                <Link href="https://www.instagram.com/kmrm.shots" target='_blank' className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><SiInstagram />Instagram</Link>
            </div>
            <p className="hidden md:block">Fait avec Passion & Next.js</p>
        </div>
    </footer>
)
