import React, { useMemo, forwardRef } from 'react';
import { FlashList } from '@shopify/flash-list';
import TaskItem from './TaskItem';

const TaskList = forwardRef(({ tasks, filterStatus }, ref) => {
  const filteredTasks = useMemo(() => {
    return filterStatus ? tasks.filter(task => task.status === filterStatus) : tasks;
  }, [tasks, filterStatus]);

  // Determine background color based on filterStatus
  const backgroundColor = useMemo(() => {
    switch (filterStatus) {
      case 'Pending':
        return '#FFF9C4'; // Light yellow
      case 'Completed':
        return '#C8E6C9'; // Light green
      default:
        return '#FFFFFF'; // White for All Tasks
    }
  }, [filterStatus]);

  return (
    <FlashList
      ref={ref}
      data={filteredTasks}
      renderItem={({ item }) => <TaskItem task={item} backgroundColor={backgroundColor} />}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={70}
    />
  );
});

export default TaskList;