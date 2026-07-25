import Image from "next/image";
import {format, parseISO} from "date-fns";
import {Album} from "contentlayer/generated";

interface AlbumCardProps {
    album: Album
}

export const AlbumCard = ({album}: AlbumCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-sm bg-surface/50 border border-muted/20 hover:border-primary/40 transition-all duration-300">
            <div className="aspect-[3/2] overflow-hidden">
                <Image
                    src={album.cover}
                    alt={album.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
            </div>
            {/* Overlay Infos */}
            <div className="px-2 py-4 border-t border-primary/20">
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-xl font-bold leading-tight uppercase text-accent">
                            {album.artist}
                        </h2>
                        <p className="text-sm text-secondary font-mono">
                            {album.venue}
                        </p>
                    </div>
                    <time className="text-[20px] text-muted font-mono rotate-90 mb-1">
                        {format(parseISO(album.date), 'yyyy')}
                    </time>
                </div>
            </div>

            {/* Effet de lueur au survol */
            }
            <div
                className="absolute inset-0 border-2 border-white/0 group-hover:border-primary/30 transition-colors duration-500 pointer-events-none"/>
        </div>
    )
}
