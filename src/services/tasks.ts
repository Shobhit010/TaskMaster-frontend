import api from './api';
import { z } from 'zod';

export interface Task {
    _id: string;
    title: string;
    description: string;
    status: 'Pending' | 'Completed';
    priority: 'Low' | 'Medium' | 'High';
    dueDate?: string;
    createdAt: string;
}

export const createTaskSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    description: z.string().min(1, 'Description is required'),
    status: z.enum(['Pending', 'Completed']),
    priority: z.enum(['Low', 'Medium', 'High']).default('Medium'),
    dueDate: z.string().optional(),
});

export type CreateTaskData = z.infer<typeof createTaskSchema>;

export const getTasks = async (keyword = '', status = '') => {
    const response = await api.get(`/tasks?keyword=${keyword}&status=${status}`);
    return response.data;
};

export const createTask = async (data: CreateTaskData) => {
    const response = await api.post('/tasks', data);
    return response.data;
};

export const updateTask = async (id: string, data: Partial<CreateTaskData>) => {
    const response = await api.put(`/tasks/${id}`, data);
    return response.data;
};

export const deleteTask = async (id: string) => {
    await api.delete(`/tasks/${id}`);
};
