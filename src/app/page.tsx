import {allAlbums} from "contentlayer/generated";
import {compareDesc, parseISO} from "date-fns";
import Link from "next/link";
import {AlbumCard} from "@/components/AlbumCard";

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
                    KMRM - SHOTS
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
                    >
                        <AlbumCard album={album} />
                    </Link>
                ))}
            </div>

            <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-zinc-600 text-xs flex justify-between">
                <p>© 2026 — kmrm shots©</p>
                <p>Built with Next.js & Passion</p>
            </footer>
        </main>
    );
}
