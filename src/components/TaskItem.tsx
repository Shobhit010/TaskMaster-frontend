import React from 'react';
import { type Task } from '../services/tasks';
import { Pencil, Trash2, CheckCircle, Clock, Calendar, Flag } from 'lucide-react';
import clsx from 'clsx';

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    const isCompleted = task.status === 'Completed';

    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'High': return 'text-red-600 bg-red-50 border-red-100';
            case 'Medium': return 'text-orange-600 bg-orange-50 border-orange-100';
            case 'Low': return 'text-blue-600 bg-blue-50 border-blue-100';
            default: return 'text-gray-600 bg-gray-50 border-gray-100';
        }
    };

    return (
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                    <div className={clsx(
                        "mt-1 p-2 rounded-xl transition-colors",
                        isCompleted ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                    )}>
                        {isCompleted ? <CheckCircle size={22} /> : <Clock size={22} />}
                    </div>
                    <div className="space-y-2">
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className={clsx(
                                    "text-lg font-bold text-gray-800 transition-colors group-hover:text-blue-600",
                                    isCompleted && "line-through text-gray-400"
                                )}>
                                    {task.title}
                                </h3>
                                <span className={clsx(
                                    "px-2 py-0.5 rounded-full text-xs font-medium border flex items-center gap-1",
                                    getPriorityColor(task.priority)
                                )}>
                                    <Flag size={10} />
                                    {task.priority || 'Medium'}
                                </span>
                            </div>
                            <p className={clsx("text-sm leading-relaxed", isCompleted ? "text-gray-400" : "text-gray-600")}>
                                {task.description}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
                                <Calendar size={12} />
                                <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
                            </div>
                            {task.dueDate && (
                                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md text-orange-400">
                                    <Clock size={12} />
                                    <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(task)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                        title="Edit Task"
                    >
                        <Pencil size={18} />
                    </button>
                    <button
                        onClick={() => onDelete(task._id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Task"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
