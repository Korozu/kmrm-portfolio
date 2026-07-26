"use client";

import {MouseEventHandler, useEffect, useState, useCallback} from "react";
import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {ImageObject} from "contentlayer/generated";
import Link from "next/link";
import {ArrowLeft, Download} from "lucide-react";
import {ExifData} from '@/components/ExifDataRow';
import DownloadModal from '@/components/DownloadModal';
import {useLanguage} from '@/contexts/LanguageContext';
import {downloadAlbumAsZip} from '@/lib/downloadUtils';

interface AlbumGalleryProps {
    images: ImageObject[];
    title: string;
    date: string;
    passwordHash?: string;
}

export default function AlbumGallery({images, title, passwordHash}: Readonly<AlbumGalleryProps>) {
    const [selectedImg, setSelectedImg] = useState<ImageObject | null>(null);
    const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const { t } = useLanguage();

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

    const handleContextMenu: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        alert("Les photos de ce portfolio sont protégées contre le téléchargement. Si vous souhaitez les utiliser, veuillez me contacter sur Instagram :)");
    };

    const handleDownload = useCallback(async () => {
        setIsDownloading(true);
        try {
            await downloadAlbumAsZip(images, title);
        } catch (error) {
            console.error('Erreur lors du téléchargement:', error);
            alert('Une erreur est survenue lors du téléchargement. Veuillez réessayer.');
        } finally {
            setIsDownloading(false);
        }
    }, [images, title]);

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
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Retour</span>
                </Link>

                {/* Bouton de téléchargement */}
                <button
                    onClick={() => setIsDownloadModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 rounded-lg transition-all duration-300 group"
                >
                    <Download size={16} className="group-hover:animate-bounce" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">
                        {t.download.title}
                    </span>
                </button>
            </div>

            {/* Grille de photos */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {images.map((image, i) => (
                    <motion.div
                        key={image.src+i}
                        layoutId={image.src}
                        className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-sm bg-zinc-900"
                        onClick={() => setSelectedImg(image)}
                    >
                        <Image
                            src={image.src}
                            alt={`${title} - Photo ${i}`}
                            width={800}
                            height={1200}
                            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                        <div
                            className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] items-end"
                            onContextMenu={handleContextMenu}
                            role="button"
                            tabIndex={0}
                        >
                            <ExifData iso={image.iso} aperture={image.aperture} shutterSpeed={image.shutterSpeed}/>
                        </div>
                        <div className="md:hidden absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent">
                            <ExifData iso={image.iso} aperture={image.aperture} shutterSpeed={image.shutterSpeed}/>
                        </div>
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
                            <div className="relative w-full h-[70vh] md:h-[80vh]">
                                <Image
                                    src={selectedImg.src}
                                    alt="Agrandissement"
                                    fill
                                    priority
                                    className="object-contain shadow-2xl"
                                    sizes="100vw"
                                />
                                <div
                                    className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] items-end"
                                    onContextMenu={handleContextMenu}
                                    role="button"
                                    tabIndex={0}
                                />
                            </div>

                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
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

            {/* Modale de téléchargement */}
            <DownloadModal
                isOpen={isDownloadModalOpen}
                onClose={() => setIsDownloadModalOpen(false)}
                onDownload={handleDownload}
                passwordHash={passwordHash || ''}
                isDownloading={isDownloading}
            />
        </div>
    );
}
