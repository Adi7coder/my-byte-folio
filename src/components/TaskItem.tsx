import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Task } from '../types/Task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete(task.id);
    }, 150);
  };

  const priorityDot = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  return (
    <div
      className={`group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all ${
        isDeleting ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
      }`}
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
          task.completed
            ? 'bg-black border-black'
            : 'border-gray-300 hover:border-black'
        }`}
      >
        {task.completed && (
          <div className="w-2 h-2 bg-white rounded-full" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div className={`w-2 h-2 rounded-full ${priorityDot[task.priority]}`} />
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {task.priority}
          </span>
        </div>
        <p
          className={`text-gray-900 transition-all ${
            task.completed ? 'line-through opacity-50' : ''
          }`}
        >
          {task.text}
        </p>
      </div>

      <button
        onClick={handleDelete}
        className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};