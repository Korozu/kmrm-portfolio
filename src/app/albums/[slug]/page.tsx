import {allAlbums} from "contentlayer/generated";
import {notFound} from "next/navigation";
import AlbumGallery from "@/components/AlbumGallery";

export async function generateStaticParams() {
    return allAlbums.map((album) => ({
        slug: album.slug,
    }));
}

interface PageParams {
    params: { slug: string };
}

export default function AlbumPage({params}: PageParams) {
    const album = allAlbums.find(album => album.slug === params.slug);

    if(!album) notFound()

    return (
        <main className="min-h-screen bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <AlbumGallery images={album.images} title={album.title} />
            </div>
        </main>
    )
}