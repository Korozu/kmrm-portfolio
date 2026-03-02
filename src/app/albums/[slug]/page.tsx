import {allAlbums} from "contentlayer/generated";
import {notFound} from "next/navigation";
import AlbumGallery from "@/components/AlbumGallery";

export const dynamic = 'force-static' // Force le mode SSG
export const dynamicParams = false // Indique que seules les pages de generateStaticParams existent

export async function generateStaticParams() {
    const paths = allAlbums.map((album) => ({
        slug: album.slug,
    }));

    console.log("LOG - Slugs générés :", paths);
    return paths;
}

export default async function AlbumPage({params}: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const album = allAlbums.find((album) => album.slug === slug);

    if(!album) notFound()

    return (
        <main className="min-h-screen bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <AlbumGallery images={album.images} title={album.title} />
            </div>
        </main>
    )
}