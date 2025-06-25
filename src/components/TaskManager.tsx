import React, { useState, useEffect } from 'react';
import { CheckSquare } from 'lucide-react';
import { Task, FilterType } from '../types/Task';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { createTask } from '../utils/taskUtils';
import { TaskStats } from './TaskStats';
import { AddTaskForm } from './AddTaskForm';
import { TaskFilter } from './TaskFilter';
import { TaskList } from './TaskList';

export const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    setTasks(prevTasks => 
      prevTasks.map(task => ({
        ...task,
        createdAt: new Date(task.createdAt)
      }))
    );
  }, []);

  const handleAddTask = (text: string, priority: Task['priority']) => {
    const newTask = createTask(text, priority);
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <CheckSquare className="w-8 h-8 text-black" />
            <h1 className="text-3xl font-light text-black">
              Mr&gt;Taskmanager
            </h1>
          </div>
          <p className="text-gray-500">
            Simple task management
          </p>
        </header>

        <TaskStats tasks={tasks} />
        
        <AddTaskForm onAddTask={handleAddTask} />
        
        <TaskFilter
          currentFilter={filter}
          onFilterChange={setFilter}
          taskCounts={taskCounts}
        />
        
        <TaskList
          tasks={tasks}
          filter={filter}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
};