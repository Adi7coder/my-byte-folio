import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Task } from '../types/Task';

interface AddTaskFormProps {
  onAddTask: (text: string, priority: Task['priority']) => void;
}

export const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Task['priority']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTask(text, priority);
      setText('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-black transition-colors"
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={!text.trim()}
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>
      
      <div className="flex gap-2">
        {(['low', 'medium', 'high'] as const).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setPriority(p)}
            className={`px-3 py-1 text-sm rounded-full border transition-colors ${
              priority === p
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
            }`}
          >
            {p}
          </button>
        ))}
      </div>
    </form>
  );
};