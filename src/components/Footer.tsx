import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="border-t border-white/40 bg-white/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity">
                        <Heart className="w-5 h-5 text-primary-600 fill-current" />
                        <span className="text-xl font-display font-bold gradient-text">Uella</span>
                    </div>

                    <p className="text-sm text-gray-500 flex items-center">
                        © {new Date().getFullYear()} • Made with <span className="text-secondary-500 mx-1 animate-pulse">❤️</span> for a special friend
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
