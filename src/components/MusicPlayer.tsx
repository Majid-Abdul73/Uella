import { useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="relative z-50">
            {/* Hidden Player for Daddy Lumba */}
            {isPlaying && (
                <iframe
                    width="1"
                    height="1"
                    className="absolute opacity-0 pointer-events-none"
                    src="https://play.mdundo.com/artist/129111/KiDi#autoplay-1985529"
                    // src="https://play.mdundo.com/artist/132450/Daddy-Lumba?utm_source=mdundo&utm_medium=geo&utm_campaign=geo_redirect#autoplay-1260171"
                    allow="autoplay; encrypted-media"
                    title="Background Music"
                ></iframe>
            )}

            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPlaying(!isPlaying)}
                className={`p-2 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 backdrop-blur-md border border-white/20 ml-4 ${isPlaying
                    ? 'bg-secondary-500 text-white shadow-secondary-500/30'
                    : 'bg-white/50 text-gray-800 hover:bg-white'
                    }`}
                title={isPlaying ? "Pause Music" : "Play Music"}
            >
                {isPlaying ? (
                    <div className="relative">
                        <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping"></span>
                        <Pause className="w-5 h-5 fill-current relative z-10" />
                    </div>
                ) : (
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                )}
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
