import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { registerSchema, type RegisterData, register as registerUserFn } from '../services/auth';
import { useAuth } from '../context/AuthContext';

const Register: React.FC = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<RegisterData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterData) => {
        try {
            const user = await registerUserFn(data);
            loginUser(user);
            navigate('/dashboard');
        } catch (error: any) {
            setError('root', {
                message: error.response?.data?.message || 'Registration failed',
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Create Account</h2>
                {errors.root && <div className="text-red-500 text-center">{errors.root.message}</div>}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register('name')}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register('email')}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register('password')}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {isSubmitting ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/login" className="text-blue-600 hover:text-blue-500">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
