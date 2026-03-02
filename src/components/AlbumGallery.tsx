import Image from "next/image";

interface GalleryProps {
    images: string[];
    title: string;
}

export default function AlbumGallery({images, title}: GalleryProps) {
    return (
        <div className='p-4'>
            <h1 className="text-3xl font-bold mb-8 text-white">{title}</h1>
            <div className='columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4'>
                {images.map((src, index) => (
                    <Image key={index} src={src} alt={`${title} - shot ${index}`} width={800} height={1200}
                           className='rounded-lg shadow-lg hover-opacity-00 transition-opacity cursor-pointer border border-white/10'
                           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                           priority={index < 3}
                    />
                ))}
            </div>
        </div>
    )
}