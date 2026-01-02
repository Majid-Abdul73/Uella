import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash2, User, Calendar, Clock, CheckCircle, XCircle, Lock, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

interface LoginLog {
    id: number;
    name: string;
    dob: string;
    timestamp: string;
    success: boolean;
}

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [logs, setLogs] = useState<LoginLog[]>([]);

    useEffect(() => {
        if (isAuthenticated) {
            const storedLogs = JSON.parse(localStorage.getItem('uella_login_logs') || '[]');
            setLogs(storedLogs);
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Hardcoded credentials
        if (username === 'admin' && password === 'admin123!!') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const clearLogs = () => {
        if (window.confirm('Are you sure you want to clear all logs?')) {
            localStorage.removeItem('uella_login_logs');
            setLogs([]);
        }
    };

    // Login Gate
    if (!isAuthenticated) {
        return (
            <PageTransition>
                <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="glass-card p-8 max-w-sm w-full"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="p-3 bg-gray-100 rounded-full">
                                <Lock className="w-6 h-6 text-gray-600" />
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Admin Access</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                            <button
                                type="submit"
                                className="w-full py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex justify-center items-center"
                            >
                                Login <ArrowRight className="w-4 h-4 ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-card overflow-hidden"
                    >
                        <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-white/50">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">Login Activity</h1>
                                <p className="text-sm text-gray-500">Monitoring access attempts</p>
                            </div>
                            <button
                                onClick={clearLogs}
                                className="flex items-center space-x-2 text-red-500 hover:text-red-700 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors cursor-pointer"
                            >
                                <Trash2 className="w-4 h-4" />
                                <span>Clear Logs</span>
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50/50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date of Birth</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {logs.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                                No activity logs found.
                                            </td>
                                        </tr>
                                    ) : (
                                        logs.map((log) => (
                                            <tr key={log.id} className="hover:bg-white/50 transition-colors">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {log.success ? (
                                                        <span className="flex items-center text-green-600 text-sm font-medium">
                                                            <CheckCircle className="w-4 h-4 mr-2" />
                                                            Success
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center text-red-500 text-sm font-medium">
                                                            <XCircle className="w-4 h-4 mr-2" />
                                                            Failed
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <User className="w-4 h-4 text-gray-400 mr-2" />
                                                        <span className="text-gray-900 font-medium">{log.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                                                    <div className="flex items-center">
                                                        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                                                        {log.dob}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 text-sm">
                                                    <div className="flex items-center">
                                                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                                        {log.timestamp}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Admin;
