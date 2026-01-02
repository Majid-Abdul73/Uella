import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Star, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import PageTransition from '../components/PageTransition';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Images from Gallery
    const images = [
        { id: 1, src: '/img1.jpeg', alt: 'Beautiful friendship moment', caption: 'Celebrating our friendship' },
        { id: 2, src: '/img2.jpeg', alt: 'Joyful moments together', caption: 'Moments of joy' },
        { id: 3, src: '/img1.jpeg', alt: 'Ghanaian culture', caption: 'Proud Ghanaian heritage' },
        { id: 4, src: '/img2.jpeg', alt: 'Inspirational scene', caption: 'Dream big, shine bright' },
        // { id: 5, src: '/img1.jpeg', alt: 'Friendship celebration', caption: 'True friendship' },
        // { id: 6, src: '/img2.jpeg', alt: 'Ghana pride', caption: 'Ghana, our beautiful home' },
    ];

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-4">
                {/* Hero Section */}
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        {/* Floating decorative elements */}
                        <div className="relative">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-10 left-1/4 text-primary-400 opacity-20"
                            >
                                <Sparkles className="w-16 h-16" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute -top-5 right-1/4 text-secondary-400 opacity-20"
                            >
                                <Star className="w-12 h-12" />
                            </motion.div>

                            {/* Main Heading */}
                            <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text mb-6">
                                Hello Emmanella
                            </h1>

                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="inline-block"
                            >
                                <Heart className="w-16 h-16 text-primary-600 fill-current mx-auto" />
                            </motion.div>
                        </div>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                            A special place to celebrate our beautiful friendship
                        </p>

                        {/* Hero Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative mt-12 inline-block"
                        >
                            <div className="absolute inset-0 bg-secondary-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mx-auto">
                                <img
                                    src="/img1.jpeg"
                                    alt="Emmanella"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Story Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-20 max-w-4xl mx-auto mb-20"
                    >
                        <div className="glass-card p-8 md:p-12 space-y-6">
                            <div className="flex items-center justify-center space-x-3 mb-6">
                                <div className="w-12 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
                                <Sparkles className="w-8 h-8 text-primary-600" />
                                <div className="w-12 h-1 bg-gradient-to-r from-secondary-600 to-primary-600 rounded-full"></div>
                            </div>

                            <h2 className="text-4xl font-display font-bold text-center gradient-text">
                                Our Story
                            </h2>

                            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Yesterday was a day I'll always remember - the day I met you, Emmanella.
                                    What started as a simple conversation turned into something truly special.
                                </p>

                                <p>
                                    In just a short time, I discovered something remarkable about you. You carry a <span className="font-semibold text-primary-600">maturity</span> that's
                                    rare and beautiful. Your <span className="font-semibold text-primary-600">kindness</span> shines
                                    through in every word, every gesture.
                                </p>

                                <p>
                                    This website is my way of saying thank you - thank you for being you, for bringing
                                    light into my life, and for showing me that true friendship can blossom in the most
                                    unexpected moments.
                                </p>

                                <div className="pt-6 text-center">
                                    <p className="text-2xl font-display italic text-primary-600">
                                        "Some people make the world more special just by being in it."
                                    </p>
                                    <p className="text-lg text-gray-600 mt-2">And you, Emmanella, are one of those people.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    {/* Gallery Section (Replaced Life Lessons) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <ImageIcon className="w-6 h-6 text-secondary-600" />
                            <h2 className="text-3xl font-display font-bold text-gray-800">
                                Photo Gallery
                            </h2>
                            <ImageIcon className="w-6 h-6 text-secondary-600" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {images.map((image, index) => (
                                <motion.div
                                    key={image.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card overflow-hidden hover-lift cursor-pointer group"
                                    onClick={() => setSelectedImage(image.id)}
                                >
                                    <div className="aspect-square relative overflow-hidden">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                            <p className="text-white font-semibold p-4 w-full text-center">
                                                {image.caption}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 italic">
                                More beautiful memories to come as our friendship grows!
                            </p>
                        </div>
                    </motion.div>

                    {/* Video Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-16"
                    >
                        <div className="glass-card max-w-3xl mx-auto text-center">
                            <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
                                Video Memories
                            </h3>
                            <div className="rounded-xl overflow-hidden shadow-2xl">
                                <video
                                    className="w-full h-full object-cover"
                                    controls
                                    poster="/img1.jpeg"
                                >
                                    <source src="/uella.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="glass-card p-4">
                                <img
                                    src={images.find(img => img.id === selectedImage)?.src}
                                    alt={images.find(img => img.id === selectedImage)?.alt}
                                    className="w-full h-auto rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
};
export default Home;