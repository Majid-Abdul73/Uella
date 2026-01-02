import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Lock, ArrowRight, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Welcome = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [error, setError] = useState('');

    // Clear previous auth on load to ensure valid login
    useEffect(() => {
        // Optional: clear auth if you want them to always login when hitting this page
        // localStorage.removeItem('uella_auth');
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Log the attempt
        const attempts = JSON.parse(localStorage.getItem('uella_login_logs') || '[]');
        const newAttempt = {
            id: Date.now(),
            name: name,
            dob: dob,
            timestamp: new Date().toLocaleString(),
            success: false
        };

        // Check credentials (case insensitive)
        const isCorrect = name.toLowerCase().trim().includes('emmanuella');

        if (isCorrect) {
            newAttempt.success = true;
            localStorage.setItem('uella_login_logs', JSON.stringify([newAttempt, ...attempts]));
            localStorage.setItem('uella_auth', 'true');
            navigate('/');
        } else {
            localStorage.setItem('uella_login_logs', JSON.stringify([newAttempt, ...attempts]));
            setError('Acccess Denied. Only the Queen can enter! 👑');
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden p-4">
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -left-20 text-primary-200"
                    >
                        <Heart className="w-96 h-96 opacity-20" />
                    </motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -right-20 text-secondary-200"
                    >
                        <Sparkles className="w-80 h-80 opacity-20" />
                    </motion.div>
                </div>

                <div className="max-w-md w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card p-8 md:p-10 text-center shadow-2xl relative z-10"
                    >
                        <div className="mb-8 flex justify-center">
                            <div className="p-4 bg-primary-100 rounded-full text-primary-600 mb-4 inline-block">
                                <Lock className="w-8 h-8" />
                            </div>
                        </div>

                        <h1 className="text-3xl font-display font-bold gradient-text mb-2">
                            Surprise!
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Please verify your identity to access this special gift.
                        </p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        placeholder="Enter your name..."
                                    />
                                </div>

                                <div className="text-left">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">Date of Birth</label>
                                    <input
                                        type="text"
                                        required
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                                        placeholder="e.g. July 15"
                                    />
                                </div>
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="text-red-500 text-sm font-medium"
                                >
                                    {error}
                                </motion.p>
                            )}

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold shadow-lg shadow-primary-500/30 flex items-center justify-center space-x-2"
                            >
                                <span>Unlock Gift</span>
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Welcome;
