import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import MusicPlayer from './MusicPlayer';

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-3xl"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="text-primary-600"
                        >
                            <Heart className="w-8 h-8 fill-current" />
                        </motion.div>
                        <span className="text-2xl font-display font-bold gradient-text">
                            Uella
                        </span>
                    </Link>

                    <div className="flex items-center space-x-4">
                        {/* Music Player (Desktop & Mobile) */}
                        <MusicPlayer />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
