'use client';

import { allAlbums } from 'contentlayer/generated';
import { compareDesc, parseISO } from 'date-fns';
import Link from 'next/link';
import { AlbumCard } from '@/components/AlbumCard';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
    //const { t } = useLanguage();
    // On trie les albums du plus récent au plus ancien
    const albums = allAlbums.toSorted((a, b) =>
        compareDesc(parseISO(a.date), parseISO(b.date))
    );
  return (
      <main className="min-h-screen bg-black text-white px-6 py-12 scroll-m-16">
          {/* Grille d'Albums */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {albums.map((album) => (
                  <Link
                      key={album.slug}
                      href={`/albums/${album.slug}`}
                  >
                      <AlbumCard album={album}/>
                  </Link>
              ))}
          </div>
          <div className="h-24 md:h-24"/>
      </main>
  );
}
