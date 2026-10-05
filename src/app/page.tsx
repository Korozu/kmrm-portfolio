'use client';

import { allAlbums } from 'contentlayer/generated';
import { compareDesc, parseISO } from 'date-fns';
import Link from 'next/link';
import { AlbumCard } from '@/components/AlbumCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMemo, useState } from 'react';

export default function Home() {
    const { t } = useLanguage();
    // On trie les albums du plus récent au plus ancien
    const albums = allAlbums.toSorted((a, b) =>
        compareDesc(parseISO(a.date), parseISO(b.date))
    );

    const [searchTerm, setSearchTerm] = useState('');

    const filteredAlbums = useMemo(() => {
        return albums.filter((album) =>
            album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            album.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
            album.venue.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [albums, searchTerm]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12 scroll-m-16 flex flex-col gap-8">
            {/* Grille d'Albums */}
            <input className="p-2 md:w-1/4 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none" 
                onChange={handleSearch}
                placeholder={t.components.searchInput.placeholder} />
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAlbums.map((album) => (
                    <Link
                        key={album.slug}
                        href={`/albums/${album.slug}`}
                    >
                        <AlbumCard album={album} />
                    </Link>
                ))}
            </div>
            <div className="h-24 md:h-24" />
        </main>
    );
}
