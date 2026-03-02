"use client";

import {useEffect, useState} from "react";
import Image from "next/image"; // Import du composant Next.js
import {AnimatePresence, motion} from "framer-motion";
import {ImageObject} from "contentlayer/generated";
import {format, parseISO} from "date-fns";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

export default function AlbumGallery({images, title, date}: { images: ImageObject[], title: string, date: string }) {
    const [selectedImg, setSelectedImg] = useState<ImageObject | null>(null);

    useEffect(() => {
        if (selectedImg) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [selectedImg]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImg(null);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <div className='flex flex-col items-start justify-start gap-6'>
            <div className='w-full flex items-start justify-between gap-6'>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                    <div
                        className="p-2 rounded-full border border-zinc-800 group-hover:border-zinc-400 transition-colors">
                        <ArrowLeft size={16}/>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Back</span>
                </Link>
                <div className='flex flex-col items-end gap-1'>
                    <h1 className="text-xl lg:text-5xl md:text-2xl font-extrabold tracking-tighter mb-2">
                        {title}
                    </h1>
                    <p className="text-zinc-400 text-lg uppercase tracking-widest">
                        {format(parseISO(date), 'dd-MM-yyyy')}
                    </p>
                </div>

            </div>


            {/* Grille de photos */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, i) => (
                    <motion.div
                        key={i}
                        layoutId={image.src}
                        className="break-inside-avoid cursor-pointer overflow-hidden rounded-sm bg-zinc-900 relative"
                        onClick={() => setSelectedImg(image)}
                    >
                        {/* Utilisation de Image pour la grille */}
                        <Image
                            src={image.src}
                            alt={`${title} - Photo ${i}`}
                            width={800} // Largeur de référence
                            height={1200} // Hauteur de référence (Next calculera le ratio)
                            className="w-full h-auto hover:opacity-80 transition-opacity duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Modale d'agrandissement */}
            <AnimatePresence>
                {selectedImg && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            onClick={() => setSelectedImg(null)}
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
                        />

                        <motion.div
                            layoutId={selectedImg.src}
                            className="relative z-[10000] w-full h-full max-w-5xl flex flex-col items-center justify-center"
                        >
                            {/* Utilisation de Image avec "fill" pour la vue agrandie */}
                            <div className="relative w-full h-[70vh] md:h-[80vh]">
                                <Image
                                    src={selectedImg.src}
                                    alt="Agrandissement"
                                    fill
                                    priority // Charge cette image immédiatement
                                    className="object-contain shadow-2xl"
                                    sizes="100vw"
                                />
                            </div>

                            <motion.div
                                initial={{y: 10, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                className="mt-4 text-center"
                            >
                                <button
                                    onClick={() => setSelectedImg(null)}
                                    className="mt-4 text-xs text-zinc-500 hover:text-white uppercase tracking-widest border border-zinc-800 px-4 py-2 rounded-full transition-colors"
                                >
                                    Fermer
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}