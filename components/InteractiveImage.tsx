
import React, { useState } from 'react';
import { Hotspot } from '../types';

interface InteractiveImageProps {
    imageUrl: string;
    altText: string;
    hotspots: Hotspot[];
}

export const InteractiveImage: React.FC<InteractiveImageProps> = ({ imageUrl, altText, hotspots }) => {
    const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

    return (
        <div className="relative w-full" onMouseLeave={() => setActiveHotspot(null)}>
            <img src={imageUrl} alt={altText} className="w-full h-auto rounded-lg shadow-lg" />
            {hotspots.map(hotspot => (
                <div
                    key={hotspot.id}
                    className="absolute"
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    onMouseEnter={() => setActiveHotspot(hotspot)}
                >
                    <button className="w-6 h-6 bg-white/70 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md animate-pulse hover:animate-none focus:outline-none focus:ring-2 focus:ring-brand-primary">
                        <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
                    </button>
                    {activeHotspot?.id === hotspot.id && (
                        <div
                            className="absolute bottom-full mb-2 w-64 bg-white p-3 rounded-lg shadow-xl z-10 border border-gray-200"
                            style={{ transform: 'translateX(-50%)', left: '50%' }}
                        >
                            <h5 className="font-sans font-bold text-brand-primary">{hotspot.title}</h5>
                            <p className="text-sm text-brand-text mt-1">{hotspot.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
