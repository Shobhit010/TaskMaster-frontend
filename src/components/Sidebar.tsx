import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, LogOut, User } from 'lucide-react';
import { logout as logoutApi } from '../services/auth';

const Sidebar: React.FC = () => {
    const { logoutUser, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutApi();
        } catch (e) {
            console.error("Logout api failed", e);
        }
        logoutUser();
        navigate('/login');
    };

    return (
        <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col shadow-xl">
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                TaskMaster
            </div>
            <div className="flex-1 p-4 spaces-y-2">
                <div className="uppercase text-xs text-gray-500 font-semibold mb-2">Menu</div>
                <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                </Link>
                <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800 transition-colors">
                    <User size={20} />
                    <span>Profile</span>
                </Link>
            </div>
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center space-x-3 mb-4 px-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                        {user?.name?.charAt(0) || 'U'}
                    </div>
                    <div className="overflow-hidden">
                        <div className="text-sm font-medium truncate">{user?.name}</div>
                        <div className="text-xs text-gray-400 truncate">{user?.email}</div>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 w-full p-2 text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
