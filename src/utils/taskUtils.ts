import { Task } from '../types/Task';

export const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const createTask = (text: string, priority: Task['priority'] = 'medium'): Task => {
  return {
    id: generateId(),
    text: text.trim(),
    completed: false,
    createdAt: new Date(),
    priority,
  };
};

export const getTaskStats = (tasks: Task[]) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const active = total - completed;
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  return { total, completed, active, progress };
};