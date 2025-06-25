import React from 'react';
import { Task } from '../types/Task';
import { getTaskStats } from '../utils/taskUtils';

interface TaskStatsProps {
  tasks: Task[];
}

export const TaskStats: React.FC<TaskStatsProps> = ({ tasks }) => {
  const { total, completed, active, progress } = getTaskStats(tasks);

  if (total === 0) return null;

  return (
    <div className="mb-8 text-center">
      <div className="text-sm text-gray-500 mb-2">
        {completed} of {total} completed
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-black h-1 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};