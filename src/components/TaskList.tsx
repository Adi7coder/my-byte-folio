import React from 'react';
import { Task, FilterType } from '../types/Task';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  filter,
  onToggleTask,
  onDeleteTask,
}) => {
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  if (filteredTasks.length === 0) {
    const emptyMessages = {
      all: 'No tasks yet. Add one above to get started.',
      active: 'No active tasks. Great job!',
      completed: 'No completed tasks yet.'
    };

    return (
      <div className="text-center py-12 text-gray-500">
        <p>{emptyMessages[filter]}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filteredTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
};