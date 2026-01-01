import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { getProfile, updateProfile, updateProfileSchema, type UpdateProfileData } from '../services/auth';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Save } from 'lucide-react';

const Profile: React.FC = () => {
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting, isDirty } } = useForm<UpdateProfileData>({
        resolver: zodResolver(updateProfileSchema),
    });

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await getProfile();
                setValue('name', data.name);
                setValue('email', data.email);
            } catch (error) {
                console.error('Failed to load profile', error);
            }
        };
        loadProfile();
    }, [setValue]);

    const onSubmit = async (data: UpdateProfileData) => {
        try {
            await updateProfile(data);
            alert('Profile updated successfully!');
            // Optional: clear password field after update
            setValue('password', '');
        } catch (error) {
            console.error('Failed to update profile', error);
            alert('Failed to update profile');
        }
    };

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Settings</h1>
                <p className="text-gray-500 mb-8">Manage your account information and security.</p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <User size={16} />
                            Full Name
                        </label>
                        <input
                            type="text"
                            {...register('name')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Mail size={16} />
                            Email Address
                        </label>
                        <input
                            type="email"
                            {...register('email')}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                                <Lock size={16} />
                                New Password
                            </label>
                            <input
                                type="password"
                                {...register('password')}
                                placeholder="Leave blank to keep current password"
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        </div>
                    </div>

                    <div className="pt-6 flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting || !isDirty}
                            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Save size={18} />
                            <span>{isSubmitting ? 'Saving...' : 'Save Changes'}</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
