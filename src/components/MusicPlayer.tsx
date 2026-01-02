import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="relative z-50">
            <audio
                ref={audioRef}
                src="/images/No-More.mp3"
                loop
            />

            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
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
