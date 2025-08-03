// components/RandomBackground.jsx
import { useMemo } from 'react';

const generateBlob = () => {
    const size = Math.floor(Math.random() * 40 + 40); // 40-80rem
    const blur = Math.floor(Math.random() * 100 + 100); // 100-200px
    const top = Math.floor(Math.random() * 120 - 20); // -20% to 100%
    const left = Math.floor(Math.random() * 120 - 20);
    const color = Math.random() > 0.5 ? 'bg-emerald-200' : 'bg-emerald-300';
    const opacity = Math.random() * 0.3 + 0.6; // 0.6 to 0.9

    return {
        style: {
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}rem`,
            height: `${size}rem`,
            opacity,
        },
        color,
        blur,
    };
};

export default function RandomBackground({ count = 5 }) {
    const blobs = useMemo(() => Array.from({ length: count }, generateBlob), [count]);

    return (
        <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
            {blobs.map((blob, index) => (
                <div
                    key={index}
                    className={`absolute rounded-full ${blob.color}`}
                    style={{
                        ...blob.style,
                        filter: `blur(${blob.blur}px)`
                    }}
                />
            ))}
        </div>
    );
}