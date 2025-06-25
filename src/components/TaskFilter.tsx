import React from 'react';
import { FilterType } from '../types/Task';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

export const TaskFilter: React.FC<TaskFilterProps> = ({
  currentFilter,
  onFilterChange,
  taskCounts,
}) => {
  const filters = [
    { key: 'all' as FilterType, label: 'All', count: taskCounts.all },
    { key: 'active' as FilterType, label: 'Active', count: taskCounts.active },
    { key: 'completed' as FilterType, label: 'Done', count: taskCounts.completed },
  ];

  return (
    <div className="flex gap-1 mb-6 bg-gray-100 p-1 rounded-lg">
      {filters.map(({ key, label, count }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            currentFilter === key
              ? 'bg-white text-black shadow-sm'
              : 'text-gray-600 hover:text-black'
          }`}
        >
          {label} {count > 0 && `(${count})`}
        </button>
      ))}
    </div>
  );
};