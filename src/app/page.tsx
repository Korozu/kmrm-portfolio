import Image from "next/image";
import {allAlbums} from "contentlayer/generated";
import {compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

export default function Home() {
    // On trie les albums du plus récent au plus ancien
    const albums = allAlbums.sort((a, b) =>
        compareDesc(parseISO(a.date), parseISO(b.date))
    );
  return (
        <main className="min-h-screen bg-black text-white px-6 py-12">
            {/* Header Minimaliste */}
            <header className="max-w-7xl mx-auto mb-16">
                <h1 className="text-5xl font-extrabold tracking-tighter mb-2">
                    PHOTO / CONCERT
                </h1>
                <p className="text-zinc-400 text-lg uppercase tracking-widest">
                    Capturer l&#39;énergie brute de la scène.
                </p>
            </header>

            {/* Grille d'Albums */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {albums.map((album) => (
                    <Link
                        key={album.slug}
                        href={`/albums/${album.slug}`}
                        className="group relative overflow-hidden rounded-sm bg-zinc-900"
                    >
                        {/* Image de Couverture */}
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
                        <div className="p-4 border-t border-white/10">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-xl font-bold leading-tight uppercase">
                                        {album.artist}
                                    </h2>
                                    <p className="text-sm text-zinc-500 font-mono">
                                        {album.title}
                                    </p>
                                </div>
                                <time className="text-[10px] text-zinc-600 font-mono rotate-90 origin-bottom-right mb-1">
                                    {format(parseISO(album.date), 'yyyy')}
                                </time>
                            </div>
                        </div>

                        {/* Effet de lueur au survol */}
                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
                    </Link>
                ))}
            </div>

            <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-zinc-600 text-xs flex justify-between">
                <p>© 2026 — Portfolio de Photographie</p>
                <p>Built with Next.js & Passion</p>
            </footer>
        </main>
    );
}
