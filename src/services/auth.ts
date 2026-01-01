import api from './api';
import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z.object({
    name: z.string().min(2, 'Name is required'),
    email: z.string().email(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export type LoginData = z.infer<typeof loginSchema>;
export type RegisterData = z.infer<typeof registerSchema>;

export const login = async (data: LoginData) => {
    const response = await api.post('/auth/login', data);
    return response.data;
};

export const register = async (data: RegisterData) => {
    const response = await api.post('/auth/register', data);
    return response.data;
};

// ... existing exports ...
export const logout = async () => {
    await api.post('/auth/logout');
};

export const updateProfileSchema = z.object({
    name: z.string().min(2, 'Name is required').optional(),
    email: z.string().email().optional(),
    password: z.string().min(6, 'Password must be at least 6 characters').optional().or(z.literal('')),
});

export type UpdateProfileData = z.infer<typeof updateProfileSchema>;

export const getProfile = async () => {
    const response = await api.get('/auth/profile');
    return response.data;
};

export const updateProfile = async (data: UpdateProfileData) => {
    const response = await api.put('/auth/profile', data);
    return response.data;
};
