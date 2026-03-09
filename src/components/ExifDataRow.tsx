interface ExifDataProps {
    shutterSpeed?: string;
    aperture?: string;
    iso?: string;
}

export const ExifData = ({shutterSpeed, aperture, iso}: ExifDataProps) => {
    return <div className="w-full">
        <div className="flex justify-between items-center text-white border-t border-white/20 p-2">

            {/* Bloc Vitesse */}
            <div className="flex flex-col">
                <span className="text-[8px] uppercase tracking-widest text-zinc-400">Vitesse</span>
                <span className="text-xs font-mono">{shutterSpeed || "—"}</span>
            </div>

            {/* Bloc Ouverture */}
            <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-widest text-zinc-400">Ouverture</span>
                <span className="text-xs font-mono">{aperture || "—"}</span>
            </div>

            {/* Bloc ISO */}
            <div className="flex flex-col items-end">
                <span className="text-[8px] uppercase tracking-widest text-zinc-400">ISO</span>
                <span className="text-xs font-mono">{iso || "—"}</span>
            </div>

        </div>
    </div>
}
