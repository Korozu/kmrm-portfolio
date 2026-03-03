"use client";

import { Album, NetworkLink } from 'contentlayer/generated';
import {format, parseISO} from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import { SiFacebook, SiInstagram, SiSpotify, SiYoutube } from '@icons-pack/react-simple-icons';

export const GalleryHeader = ({ album }: { album: Album }) => {
    return <header className="relative h-[30vh] md:h-[50vh] w-full overflow-hidden">
        <Image
            src={album.cover}
            alt={album.title}
            fill
            priority
            className="object-cover object-center"
        />

        {/* Overlay Dégradé :
            Transparent en haut -> Sombre au milieu -> Couleur de fond en bas
        */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/100"/>

        {/* Contenu textuel centré en bas */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-16 md:pb-24 px-4">
            <motion.div
                initial={{y: 30, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
                className="text-center justify-center flex flex-col gap-6"
            >
                <h1 className="text-xl md:text-4xl lg:text-7xl font-black uppercase italic tracking-tighter leading-none mb-4">
                    {album.artist}
                </h1>
                <div
                    className="flex items-center justify-center gap-4 text-sm md:text-base font-mono uppercase tracking-[0.3em] text-zinc-400">
                    <span>{album.venue}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-white"/>
                    <span>{format(parseISO(album.date), 'dd-MM-yyyy')}</span>
                </div>
                {album.network && <NetworkRow network={album.network}/>}
            </motion.div>
        </div>
    </header>
}


const NetworkRow = ({ network }: { network: NetworkLink }) => {
    return (
        <div className="flex items-center justify-center gap-25 mt-4 text-sm md:text-base text-zinc-400">
            {network.instagram && <Link target="_blank" className="flex flex-col items-center gap-2 hover:text-white transition-colors cursor-pointer" href={network.instagram}><SiInstagram/>Instagram</Link>}
            {network.facebook && <Link target="_blank" className="flex flex-col items-center gap-2 hover:text-white transition-colors cursor-pointer" href={network.facebook}><SiFacebook/>Facebook</Link>}
            {network.spotify && <Link target="_blank" className="flex flex-col items-center gap-2 hover:text-white transition-colors cursor-pointer" href={network.spotify}><SiSpotify/>Spotify</Link>}
            {network.youtube && <Link target="_blank" className="flex flex-col items-center gap-2 hover:text-white transition-colors cursor-pointer" href={network.youtube}><SiYoutube/>Youtube</Link>}
        </div>
    )
}
