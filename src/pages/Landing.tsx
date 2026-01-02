import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-6 bg-white shadow-sm sticky top-0 z-50">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    PrimeTrade AI
                </div>
                <div className="space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate('/register')}
                        className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all hover:scale-105 active:scale-95"
                    >
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-grow flex items-center justify-center relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

                <div className="text-center px-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                        Master Your Tasks <br />
                        <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Unlock Efficiency
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the next generation of task management. Streamline your workflow, collaborate seamlessly, and achieve your goals with PrimeTrade AI.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => navigate('/register')}
                            className="px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all hover:-translate-y-1"
                        >
                            Start for Free
                        </button>
                        <button
                            onClick={() => navigate('/login')}
                            className="px-8 py-4 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all hover:-translate-y-1"
                        >
                            Log In
                        </button>
                    </div>

                    {/* Features Snippet */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 text-2xl">
                                🚀
                            </div>
                            <h3 className="text-lg font-bold mb-2">Fast Execution</h3>
                            <p className="text-gray-500 text-sm">Lightning fast performance for all your management needs.</p>
                        </div>
                         <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-purple-600 text-2xl">
                                🛡️
                            </div>
                            <h3 className="text-lg font-bold mb-2">Secure & Reliable</h3>
                             <p className="text-gray-500 text-sm">Enterprise-grade security to keep your data safe and accessible.</p>
                        </div>
                         <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-green-600 text-2xl">
                                📊
                            </div>
                            <h3 className="text-lg font-bold mb-2">Insightful Analytics</h3>
                             <p className="text-gray-500 text-sm">Gain valuable insights into your productivity trends.</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-400 text-sm bg-white border-t border-gray-100">
                © {new Date().getFullYear()} PrimeTrade AI. All rights reserved.
            </footer>
        </div>
    );
};

export default Landing;
